from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.test import APIClient
from rest_framework import status
from .serializers import ProductSerializer as YourSerializer  # Import your serializer
from .serializers import CategorySerializer

class YourSerializerIntegrationTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()


    def test_product_creation_with_valid_data(self):
        user = User.objects.create_user(username='admin', password='password')
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

        # Create a category
        valid_category_data = {
        'name': 'Test Category',
        # Add other fields if necessary
        }
        category_response = self.client.post('/api/categories/', valid_category_data, format='json')
        self.assertEqual(category_response.status_code, status.HTTP_201_CREATED)
        category_name = category_response.data

        # Define valid data for product creation
        valid_data = {
            'productName': 'Valid Product',
            'metric': 'in',
            'material': 'wood',
            'category': category_name,
            'description': 'funny!',
            'dim_x': 10,
            'dim_y': 20,
            'capacity': 1
        }

        # Make POST request to create a new product
        response = self.client.post('/api/products/', valid_data, format='json')

        print(response.data)

        # Assert that the request was successful (status code 201)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Optionally, you can verify the response data
        # For example, if your serializer returns the created product data
        self.assertIn('productName', response.data)
        self.assertEqual(response.data['productName'], valid_data['productName'])

    def test_product_creation_with_invalid_data(self):
        user = User.objects.create_user(username='admin', password='password')
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

        # Create a category
        valid_category_data = {
        'name': '',
        # Add other fields if necessary
        }
        category_response = self.client.post('/api/categories/', valid_category_data, format='json')
        self.assertEqual(category_response.status_code, status.HTTP_400_BAD_REQUEST)
        category_name = category_response.data

        print(category_name)

        # Define valid data for product creation
        valid_data = {
            'productName': '',
            'metric': 'n',
            'material': '',
            'category': category_name,
            'description': '',
            'dim_x': -1,
            'dim_y': 0,
            'capacity': ''
        }

        # Make POST request to create a new product
        response = self.client.post('/api/products/', valid_data, format='json')


        # Assert that the request was unsuccessful (status code 400)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_product_creation_with_invalid_data2(self):
        user = User.objects.create_user(username='admin', password='password')
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

        # Create a category
        valid_category_data = {
        'name': 'dadw',
        # Add other fields if necessary
        }
        category_response = self.client.post('/api/categories/', valid_category_data, format='json')
        self.assertEqual(category_response.status_code, status.HTTP_201_CREATED)
        category_name = category_response.data

        print(category_name)

        # Define valid data for product creation
        valid_data = {
            'productName': 'as',
            'metric': '2',
            'material': 'dsd',
            'category': category_name,
            'description': 'gdsgdsf',
            'dim_x': 2,
            'dim_y': 2,
            'capacity': 'hi'
        }

        # Make POST request to create a new product
        response = self.client.post('/api/products/', valid_data, format='json')


        # Assert that the request was unsuccessful (status code 400)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_product_creation_with_invalid_data3(self):
        user = User.objects.create_user(username='admin', password='password')
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

        # Create a category
        valid_category_data = {
        'name': 'dadw',
        # Add other fields if necessary
        }
        category_response = self.client.post('/api/categories/', valid_category_data, format='json')
        self.assertEqual(category_response.status_code, status.HTTP_201_CREATED)
        category_name = category_response.data

        print(category_name)

        # Define valid data for product creation
        valid_data = {
            'productName': 'as',
            'metric': '2',
            'material': 'dsd',
            'category': category_name,
            'description': 'gdsgdsf',
            'dim_x': 2,
            'dim_y': 2,
            'capacity': 1
        }

        # Make POST request to create a new product
        response = self.client.post('/api/products/', valid_data, format='json')


        # Assert that the request was unsuccessful (status code 400)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_product_creation_with_invalid_data4(self):
        user = User.objects.create_user(username='admin', password='password')
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

        # Create a category
        valid_category_data = {
        'name': 'dadw',
        # Add other fields if necessary
        }
        category_response = self.client.post('/api/categories/', valid_category_data, format='json')
        self.assertEqual(category_response.status_code, status.HTTP_201_CREATED)
        category_name = category_response.data

        print(category_name)

        # Define valid data for product creation
        valid_data = {
            'productName': 'assdaw',
            'metric': '2',
            'material': 'dsddwads',
            'category': category_name,
            'description': 'gdsgdsf',
            'dim_x': 2,
            'dim_y': 2,
            'capacity': '1'
        }

        # Make POST request to create a new product
        response = self.client.post('/api/products/', valid_data, format='json')


        # Assert that the request was unsuccessful (status code 400)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)