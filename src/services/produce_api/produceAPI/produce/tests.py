import json

from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase, RequestsClient

from .models import Produce
from .serializers import ProduceSerialiser

client = RequestsClient()
response = client.get('http://127.0.0.1:8000/products/')
assert response.status_code == 200

class CreateProductTestCase(APITestCase):
    def test_new_productcreation(self):
        data = {"name": "nakati", "description": "this is a test description"}
        response = self.client.post('/products/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_updateProduct(self):
        data = {"name": "testchange"}
        response = self.client.put('/products/2/', data)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class CredentialsTestCase(APITestCase):
    test_url = reverse('prod')
    def setup(self):
        self.user = User.objects.create_user(username='testuser', email='testuser@farmrail.com', password='verystrongpsw')

        self.token = Token.objects.create(user=self.user)
        self.produceAPI_authentication
    def produceAPI_authentication(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)

    def test_authentication(self):
        response = self.client.get(self.test_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
