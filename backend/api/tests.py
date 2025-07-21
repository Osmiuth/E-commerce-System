from django.forms import ValidationError
from django.test import TestCase, Client
from django.contrib.auth.models import User
from .models import Product, Category
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.status import HTTP_200_OK, HTTP_403_FORBIDDEN, HTTP_401_UNAUTHORIZED, HTTP_201_CREATED, HTTP_302_FOUND
from .views import ProductListCreate, ProductRetrieveUpdateDestroy, CategoryListCreate
from rest_framework.test import APIClient

class PositiveCreateProductTestCase1(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Plastic")
        self.product = Product.objects.create(productName="Water Bottle", description="this is a water bottle", category=self.category)


    def test_ProductValidate(self):
        self.assertEqual(self.product.description, "this is a water bottle")
        self.assertEqual(self.product.category, self.category)

class PositiveCreateProductTestCase2(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Wood")
        self.product = Product.objects.create(productName="Chair", description="this is a chair", category=self.category)

    def test_ProductValidate(self):
        self.assertEqual(self.product.description, "this is a chair")
        self.assertEqual(self.product.category, self.category)

class PositiveCreateProductTestCase3(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name=4)
        self.product = Product.objects.create(productName="number", description="this is a number", category=self.category)


    def test_ProductValidate(self):
        self.assertEqual(self.product.description, "this is a number")
        self.assertEqual(self.product.category, self.category)

class PositiveCreateProductTestCase4(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="MK47")
        self.product = Product.objects.create(productName="gun", description="this is a rifle", category=self.category)

    def test_ProductValidate(self):
        self.assertEqual(self.product.description, "this is a rifle")
        self.assertEqual(self.product.category, self.category)

#Test Authentication for the Product and Category Views
class ProductCategoryViewsTest(TestCase):
    def setUp(self):
        self.client = APIClient()
         
    def test_authentication(self):
        
        user = User.objects.create_user(username='admin', password='password')

       # Generate a JWT for the user
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        
        
        # Try to access the view without authenticating
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, HTTP_401_UNAUTHORIZED)

        response = self.client.get('/api/categories/')
        self.assertEqual(response.status_code, HTTP_401_UNAUTHORIZED)

        # Authenticate the user
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')
        
        # Try to access the view again
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, HTTP_200_OK)

        response = self.client.get('/api/categories/')
        self.assertEqual(response.status_code, HTTP_200_OK)

class ProductCategoryViewsTest2(TestCase):
    def setUp(self):
        self.client = APIClient()
         
    def test_authentication(self):
        
        user = User.objects.create_user(username='---', password='-sdasdandja')

       # Generate a JWT for the user
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        
        
        # Try to access the view without authenticating
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, HTTP_401_UNAUTHORIZED)

        response = self.client.get('/api/categories/')
        self.assertEqual(response.status_code, HTTP_401_UNAUTHORIZED)

        # Authenticate the user
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')
        
        # Try to access the view again
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, HTTP_200_OK)

        response = self.client.get('/api/categories/')
        self.assertEqual(response.status_code, HTTP_200_OK)

class PositiveCreateProductTestCase5(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="run")
        self.product = Product.objects.create(productName="hi", description="test", category=self.category)


    def test_ProductValidate(self):
        self.assertEqual(self.product.description, "test")
        self.assertEqual(self.product.category, self.category)

class PositiveCreateProductTestCase6(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="welcome")
        self.product = Product.objects.create(productName="hi", description="test", category=self.category)

    def test_ProductValidate(self):
        self.assertEqual(self.product.description, "test")
        self.assertEqual(self.product.category, self.category)

class PositiveCreateProductTestCase7(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="lid")
        self.product = Product.objects.create(productName="lid bottle", description="this is lid", category=self.category)

    def test_ProductValidate(self):
        self.assertEqual(self.product.description, "this is lid")
        self.assertEqual(self.product.category, self.category)

class NegativeCreateProductTestCase(TestCase):
    def test_ProductValidate(self):
        with self.assertRaises(ValidationError) as cm:
            self.category = Category.objects.create(name="⥨⹠⭳⸨ⴎ⟙⯆⦟⃆␖⃠⽽⯺✞ⲽ⯣⦣⪖Ⲹ⇥⒂⾜⥜№ⅎ⦁▯⏚⬤⧩ℴ↠⽇≌⍰ⰐⅡ⢌⥞⑈♼ℛ⯁⿮⊰⥅✯⧍‽∎ⶍ⏧⤳⶚₤⚯▵ⶴ⪶⚬ⶶⵝ⤱␙⎱✲⟄♗⫴Ⲝ╓⪪⦠Ⳗ⹩┬ℎ◆Ⰱ⍁▰⶷∞ₙ₴∻⠽⩴⦜⑮⭦⎻⏚∏⹤Ⲵ⯣⿒⸟☀")
            self.product = Product.objects.create(productName="⥨⹠⭳⸨ⴎ⟙⯆⦟⃆␖⃠⽽⯺✞ⲽ⯣⦣⪖Ⲹ⇥⒂⾜⥜№ⅎ⦁▯⏚⬤⧩ℴ↠⽇≌⍰ⰐⅡ⢌⥞⑈♼ℛ⯁⿮⊰⥅✯⧍‽∎ⶍ⏧⤳⶚₤⚯▵ⶴ⪶⚬ⶶⵝ⤱␙⎱✲⟄♗⫴Ⲝ╓⪪⦠Ⳗ⹩┬ℎ◆Ⰱ⍁▰⶷∞ₙ₴∻⠽⩴⦜⑮⭦⎻⏚∏⹤Ⲵ⯣⿒⸟☀", description="this is a rifle", category=self.category)

        self.assertIn('Data length longer than 100 not allowed.', str(cm.exception))

class NegativeCreateProductTestCase2(TestCase):
    def test_ProductValidate(self):
        with self.assertRaises(ValidationError) as cm:
            self.category = Category.objects.create(name="⥨⹠⭳⸨ⴎ⟙⯆⦟⃆␖⃠⽽⯺✞ⲽ⯣⦣⪖Ⲹ⇥⒂⾜⥜№ⅎ⦁▯⏚⬤⧩ℴ↠⽇≌⍰ⰐⅡ⢌⥞⑈♼ℛ⯁⿮⊰⥅✯⧍‽∎ⶍ⏧⤳⶚₤⚯▵ⶴ⪶⚬ⶶⵝ⤱␙⎱✲⟄♗⫴Ⲝ╓⪪⦠Ⳗ⹩┬ℎ◆Ⰱ⍁▰⶷∞ₙ₴∻⠽⩴⦜⑮⭦⎻⏚∏⹤Ⲵ⯣⿒⸟☀")
            self.product = Product.objects.create(productName="⥨⹠⭳⸨ⴎ⟙⯆⦟⃆␖⃠⽽⯺✞ⲽ⯣⦣⪖Ⲹ⇥⒂⾜⥜№ⅎ⦁▯⏚⬤⧩ℴ↠⽇≌⍰ⰐⅡ⢌⥞⑈♼ℛ⯁⿮⊰⥅✯⧍‽∎ⶍ⏧⤳⶚₤⚯▵ⶴ⪶⚬ⶶⵝ⤱␙⎱✲⟄♗⫴Ⲝ╓⪪⦠Ⳗ⹩┬ℎ◆Ⰱ⍁▰⶷∞ₙ₴∻⠽⩴⦜⑮⭦⎻⏚∏⹤Ⲵ⯣⿒⸟☀", description="this is a rifle", category=self.category)

        print("Actual exception:", cm.exception)
        self.assertIn('Symbols are not allowed', str(cm.exception))
        
class NegativeCreateProductTestCase3(TestCase):
    def test_ProductValidate(self):
        with self.assertRaises(ValidationError) as cm:
             self.category = Category.objects.create(name="⥨⹠⭳⸨ⴎ⟙⯆⦟⃆␖⃠⽽⯺✞ⲽ⯣⦣⪖Ⲹ⇥⒂⾜⥜№ⅎ⦁▯⏚⬤⧩ℴ↠⽇≌⍰ⰐⅡ⢌⥞⑈♼ℛ⯁⿮⊰⥅✯⧍‽∎ⶍ⏧⤳⶚₤⚯▵ⶴ⪶⚬ⶶⵝ⤱␙⎱✲⟄♗⫴Ⲝ╓⪪⦠Ⳗ⹩┬ℎ◆Ⰱ⍁▰⶷∞ₙ₴∻⠽⩴⦜⑮⭦⎻⏚∏⹤Ⲵ⯣⿒⸟☀")
             self.product = Product.objects.create(productName="⥨⹠⭳⸨ⴎ⟙⯆⦟⃆␖⃠⽽⯺✞ⲽ⯣⦣⪖Ⲹ⇥⒂⾜⥜№ⅎ⦁▯⏚⬤⧩ℴ↠⽇≌⍰ⰐⅡ⢌⥞⑈♼ℛ⯁⿮⊰⥅✯⧍‽∎ⶍ⏧⤳⶚₤⚯▵ⶴ⪶⚬ⶶⵝ⤱␙⎱✲⟄♗⫴Ⲝ╓⪪⦠Ⳗ⹩┬ℎ◆Ⰱ⍁▰⶷∞ₙ₴∻⠽⩴⦜⑮⭦⎻⏚∏⹤Ⲵ⯣⿒⸟☀", description="this is a rifle", category=self.category)

        print("Actual exception:", cm.exception)
        self.assertIn('Symbols are not allowed and no data length longer than 100', str(cm.exception))

class NegativeCreateProductTestCase4(TestCase):
    def test_ProductValidate(self):
        with self.assertRaises(ValidationError) as cm:
            self.category = Category.objects.create(name="'--")
            self.product = Product.objects.create(productName="-- ORDER BY '1'='1", description="this is a rifle", category=self.category)

        print("Actual exception:", cm.exception)
        self.assertIn('SQL queries are not allowed', str(cm.exception))

