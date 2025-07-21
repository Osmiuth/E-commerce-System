from django.urls import path
from . import views

urlpatterns = [
    path("users/", views.CreateUserView.as_view(), name="user-create"),
    path("products/", views.ProductListCreate.as_view(), name="product-list"),
    path("products/<int:pk>/", views.ProductRetrieveUpdateDestroy.as_view(), name="product-detail"),
    path("categories/", views.CategoryListCreate.as_view(), name="category-list"),
]