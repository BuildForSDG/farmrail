from django.urls import path
from cart import views

urlpatterns = [
    path('add-to-cart/',views.addToCart),
    path('edit-cart/', views.editCart),
    path('empty-cart/', views.emptyCart),
]
