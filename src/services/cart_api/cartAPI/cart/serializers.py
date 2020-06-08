from rest_framework import serializers
from .models import Cart

class Cart_serializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = [
            'items',
            'item_quatity',
        ]