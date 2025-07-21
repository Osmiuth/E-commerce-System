from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, default="none")

    def __str__(self):
        return self.name

class Product(models.Model):
    productID = models.CharField(default=0, max_length=100)
    productName = models.CharField(max_length=100, default="no name yet")
    description = models.TextField(default="no description yet")
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    material = models.CharField(max_length=100, default="none")
    dim_x = models.IntegerField(default=0)
    dim_y = models.IntegerField(default=0)
    metric = models.CharField(max_length=2, default="na")
    metric2 = models.CharField(max_length=2, default="na")
    capacity = models.IntegerField(default=0)
    image = models.ImageField(upload_to='images/', default='images/None/no-img.jpg')

    def delete(self, *args, **kwargs):
        if not Product.objects.filter(category=self.category).exclude(id=self.id).exists():
            self.category.delete()
        super().delete(*args, **kwargs)
        
    def __str__(self):
        return self.productName