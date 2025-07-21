from django.test import TestCase
from rest_framework import serializers
from .serializers import ProductSerializer as YourSerializer
from .serializers import CategorySerializer as OurSerializer

class YourSerializerValidationTestCase(TestCase):
    def test_productName_validation(self):
        serializer = YourSerializer()
        
        # Test empty product name
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_productName('')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Product name cannot be empty.', code='invalid')]")

        # Test product name less than 3 characters long
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_productName('ab')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Product name must be at least 3 characters long.', code='invalid')]")
        
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_productName('abababababababababababababababababababababababababababababababababababababababababababababababababababa')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Product name should not go beyond 100 characters long.', code='invalid')]")

        # Test valid product name
        validated_value = serializer.validate_productName('Valid Product Name')
        self.assertEqual(validated_value, 'Valid Product Name')

    def test_material_validation(self):
        serializer = YourSerializer()
        
        # Test empty product name
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_material('')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Material cannot be empty.', code='invalid')]")
        
        # Test product name less than 3 characters long
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_material('ab')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Material must be at least 3 characters long.', code='invalid')]")
        
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_material('ababababababababababababababababababababababababababababababababababababababababababababababababababa')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Material should not go beyond 100 characters long.', code='invalid')]")
        
        # Test valid product name
        validated_value = serializer.validate_material('Valid Material Name')
        self.assertEqual(validated_value, 'Valid Material Name')

    def test_category_validation(self):
        serializer = OurSerializer()
        
        # Test empty product name
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_category('')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Category cannot be empty.', code='invalid')]")
        
        # Test product name less than 3 characters long
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_category('ab')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Category must be at least 3 characters long.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_category('ababababababababababababababababababababababababababababababababababababababababababababababababababa')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Category should not go beyond 100 characters long.', code='invalid')]")
        
        # Test valid product name
        validated_value = serializer.validate_category('Valid Category Name')
        self.assertEqual(validated_value, 'Valid Category Name')

        validated_value = serializer.validate_category('abc')
        self.assertEqual(validated_value, 'abc')

    def test_metric_validation(self):
        serializer = YourSerializer()
        
        # Test empty product name
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_metric('')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Metric cannot be empty.', code='invalid')]")
        
        # Test product name less than 3 characters long
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_metric('abc')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Metric must be 2 characters long.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_metric('a')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Metric must be 2 characters long.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_metric('12')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Metric must not contain numbers.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_metric('a2')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Metric must not contain numbers.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_metric('b2')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Metric must not contain numbers.', code='invalid')]")

        # Test valid product name
        validated_value = serializer.validate_metric('in')
        self.assertEqual(validated_value, 'in')

    def test_desc_validation(self):
        serializer = YourSerializer()
        
        # Test empty product name
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_description('')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Description cannot be empty.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_description('ababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa')
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Description should not go beyond 1000 characters long.', code='invalid')]")

        # Test valid product name
        validated_value = serializer.validate_description('hey everyone, this is a very good product!!')
        self.assertEqual(validated_value, 'hey everyone, this is a very good product!!')

    def test_dimension_validations(self):
        serializer = YourSerializer()
        
        # Test dimension X less than or equal to 0
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_dim_x(0)
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Dimension X must be a positive number.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_dim_x(10001)
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Dimension X should not go beyond 10,000 digits.', code='invalid')]")
        
        # Test dimension Y less than or equal to 0
        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_dim_y(-1)
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Dimension Y must be a positive number.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_dim_y(10001)
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Dimension Y should not go beyond 10,000 digits.', code='invalid')]")
        
        # Test valid dimensions
        validated_dim_x = serializer.validate_dim_x(10)
        self.assertEqual(validated_dim_x, 10)
        
        validated_dim_y = serializer.validate_dim_y(20)
        self.assertEqual(validated_dim_y, 20)

    def test_capacity_validation(self):
        serializer = YourSerializer()

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_capacity(0)
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Capacity must be a positive number.', code='invalid')]")

        with self.assertRaises(serializers.ValidationError) as cm:
            serializer.validate_capacity(31231231231231230)
        self.assertEqual(str(cm.exception), "[ErrorDetail(string='Capacity should not go beyond 10,000 digits.', code='invalid')]")

