from django.urls import path
from . import views

urlpatterns = [
    path('products/',views.Product.as_view(), name='prod'),
    path('products/<int:id>/',views.Product_detail.as_view()),
]
