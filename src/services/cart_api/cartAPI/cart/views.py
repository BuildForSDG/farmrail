from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from .models import Cart
from .serializers import CartSerializer


@api_view(['GET', 'POST'])
def addToCart(request):
    if request.method == 'GET':
        cart = Cart.objects.all()
        serialiser = CartSerializer(cart, many=True)
        return Response(serialiser.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serialiser = CartSerializer(data=data)

        if serialiser.is_valid():
            serialiser.save()
            Response.set_cookie(key='edit_cookie', value=serializer, path='/add-to-cart/')
            return Response(serialiser.data, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
def editCart(request):
    if request.method == 'GET':
        cart = Cart.objects.all()
        serialiser = CartSerializer(cart, many=True)
        return Response(serialiser.data, status=status.HTTP_200_OK)
        request.COOKIE
    elif request.method == 'PUT':
        cart = Cart.objects.all()
        serialiser = CartSerializer(cart, data=request.data)
        if serialiser.is_valid():
            serialiser.save()
            return Response(serialiser.data, status=status.HTTP_202_ACCEPTED)
            Response.set_cookie(key='edit_cookie', value=serializer, path='/add-to-cart/')
            request.COOKIES.get('edit_cookie')
    return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE'])
def emptyCart(request):
    if request.method == 'GET':
        cart = Cart.objects.all()
        serialiser = CartSerializer(cart, many=True)
        return Response(serialiser.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        cart = Cart.objects.all()
        cart.delete()
        request.COOKIE.delete()
        return Response(cart, status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)
