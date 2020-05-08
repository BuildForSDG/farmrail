from django.urls import path
from . import views

urlpatterns = [
    path('products/',views.Product.as_view()),
    path('product/details/<int:id>/',views.Product_detail.as_view()),
]
