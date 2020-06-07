from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from .models import Cart
from .serializers import Cart_serializer

@api_view(['GET', 'POST'])
def add_to_cart(request):
    item = Cart.items
    quantity = Cart.item_quatity
    items_list = {item: quantity}
    serializer = Cart_serializer(items_list)
    if request.method == 'GET':
       result = Response(serializer.data, status=status.HTTP_200_OK)
       result.set_cookie(key='cart_items', value=serializer, max_age=None)
       return result
    else:
        if request.method == 'POST':
            saved_cart_items = serializer
            if saved_cart_items is None:
                saved_cart_items = {}
            if item not in saved_cart_items:
                saved_cart_items.update(Mapping[item, quantity])
                saved_cart_items.save()
            else:
                if item in saved_cart_items:
                    items_list = {item: quantity + 1}
                    result = Cart_serializer(items_list)
                    if saved_cart_items.is_valid():
                        saved_cart_items.save()
                        cart = Cart_serializer(saved_cart_items)
                        Response.set_cookie(key='cart_items_cookie', value=saved_cart_items)
                        return Response(cart, status=status.HTTP_201_CREATED)
    return Response(saved_cart_items.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
def edit_cart(request):
    item = Cart.items
    quantity = Cart.item_quatity
    items_list = {item: quantity}
    serializer = Cart_serializer(data=items_list)
    if request.method == 'GET':
       result = Response(serializer, status=status.HTTP_200_OK)
       result.set_cookie(key='cart_items', value=serializer, max_age=None)
       return result

@api_view(['GET', 'DELETE'])
def empty_cart(request):
    if request.method == 'GET':
        item = Cart.items
        quantity = Cart.item_quatity
        items_list = {item: quantity}
        serializer = Cart_serializer(data=items_list)
    if request.method == 'GET':
        result = Response(serializer, status=status.HTTP_200_OK)
        result.set_cookie(key='cart_items', value=serializer, max_age=None)
        return result
    if request.method == 'DELETE':
        cookie = request.COOKIES[tuple(['cart_items_cookie'])]
        saved_cart_items = json.dump(cookie, True)
        saved_cart_items = []
        del cookie
        return Response(saved_cart_items, status=status.HTTP_204_NO_CONTENT)
        Response.set_cookie('cart_items_cookie', '', max_age=time()-3600)
        result = json.load(saved_cart_items, True)
        Response.set_cookie(self, cart_items_cookie, result, path='/empty-cart/')
