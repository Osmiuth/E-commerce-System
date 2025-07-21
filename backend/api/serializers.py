from django.contrib.auth.models import User
from rest_framework import serializers
from django.core.exceptions import ObjectDoesNotExist
from .models import Note
from .models import Product
from .models import Category
import re


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
        read_only_fields = ['id']

    def validate_category(self, value):
        if not value:
            raise serializers.ValidationError("Category cannot be empty.")
        if len(value) < 3:
            raise serializers.ValidationError("Category must be at least 3 characters long.")
        if len(value) > 100:
            raise serializers.ValidationError("Category should not go beyond 100 characters long.")
        return value

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ["id", "productID","productName", "description","dim_x", "dim_y", "created_at", "category", "material", "metric","metric2", "capacity", "image"]
        read_only_fields = ['created_at', 'id']

    def update(self, instance, validated_data):
   
        category_data = validated_data.pop('category')
        category_name = category_data.get('name')

        # Save the old category for later check
        old_category = instance.category

        # Get or create a category with the new name
        category, created = Category.objects.get_or_create(name=category_name)

        # Assign the existing or new category to the product
        instance.category = category

        # Update the 'Product' fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Check if the old category is still used
        if not Product.objects.filter(category=old_category).exists():
            # If not, delete it
            old_category.delete()

        return instance
    
    def validate_productName(self, value):
        if not value:
            raise serializers.ValidationError("Product name cannot be empty.")
        if len(value) < 3:
            raise serializers.ValidationError("Product name must be at least 3 characters long.")
        if len(value) > 100:
            raise serializers.ValidationError("Product name should not go beyond 100 characters long.")
        return value
    
    def validate_material(self, value):
        if not value:
            raise serializers.ValidationError("Material cannot be empty.")
        if len(value) < 3:
            raise serializers.ValidationError("Material must be at least 3 characters long.")
        if len(value) > 100:
            raise serializers.ValidationError("Material should not go beyond 100 characters long.")
        return value
    
    def validate_metric(self, value):
        if not value:
            raise serializers.ValidationError("Metric cannot be empty.")
        if len(value) != 2:
            raise serializers.ValidationError("Metric must be 2 characters long.")
        if re.search(r'\d', value):
            raise serializers.ValidationError("Metric must not contain numbers.")
        return value
    
    def validate_metric2(self, value):
        if not value:
            raise serializers.ValidationError("Metric2 cannot be empty.")
        if len(value) != 2 and len(value) != 1:
            raise serializers.ValidationError("Metric2 must be 1 or 2 characters long.")
        if re.search(r'\d', value):
            raise serializers.ValidationError("Metric2 must not contain numbers.")
        return value
    
    def validate_description(self, value):
        if not value:
            raise serializers.ValidationError("Description cannot be empty.")
        if len(value) > 1000:
            raise serializers.ValidationError("Description should not go beyond 1000 characters long.")
        return value

    def validate_dim_x(self, value):
        if value < 0:
            raise serializers.ValidationError("Dimension X must be a positive number.")
        if value > 10000:
            raise serializers.ValidationError("Dimension X should not go beyond 10,000 digits.")
        return value

    def validate_dim_y(self, value):
        print(type(value))
        if value < 0:
            raise serializers.ValidationError("Dimension Y must be a positive number.")
        if value > 10000:
            raise serializers.ValidationError("Dimension Y should not go beyond 10,000 digits.")
        return value
    
    def validate_capacity(self, value):
        if value < 0:
            raise serializers.ValidationError("Capacity must be a positive number.")
        if value > 10000:
            raise serializers.ValidationError("Capacity should not go beyond 10,000 digits.")
        return value

    
    def create(self, validated_data):
        category_data = validated_data.pop('category')
        category_name = category_data.get('name')

        # Get or create a category with the provided name
        category, created = Category.objects.get_or_create(name=category_name)

        validated_data['category'] = category
        return super().create(validated_data)