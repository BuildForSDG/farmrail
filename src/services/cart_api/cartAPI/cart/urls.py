from django.urls import path
from . import views

urlpatterns = [
    path('add-to-cart/', views.add_to_cart),
    path('edit-cart/', views.edit_cart),
]
