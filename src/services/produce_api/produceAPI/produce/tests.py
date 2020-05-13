import json

from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

from produce.models import Produce
from produce.serializers import ProduceSerialiser

class ProductCreationTest(APITestCase):
    def test_creation(self):
        data = {
            "name": "testcase",
            "thumbnail": "https://www.farmrail.com/test.png",
            "description": "test description"
        }
        response = self.client.post("/products/", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

class ProductViewSet(APITestCase):
    def setUp(self):
        self.produce = Produce.objects.create_produce("name": "pumpkins", "thumbnail": "null"
                    "description": "this is a very long description")
        self.token = Token.objects.create(Produce=self.produce)

    def produce_list_authentication(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)