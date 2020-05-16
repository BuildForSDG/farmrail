from rest_framework import generics

from .models import Produce
from .serializers import ProduceSerialiser

# creating the create and list products class
class Product(generics.ListCreateAPIView):
    serializer_class = ProduceSerialiser
    queryset = Produce.objects.all()

# defining a get function, this should return a list of products in the db
    def get(self, request):
        return self.list(request)
# defining a get function, this should allow a user to create products and save to the db
    def post(self, request):
        return self.create(request)

# creating the create and list products class
class Product_detail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProduceSerialiser
    queryset = Produce.objects.all()
    lookup_field = 'id'

# defining a get function, this should update a product with the given id
    def put(self, request, id):
        return self.update(request)

# defining a delete function, this should delete a product with the given id
    def delete(self, request, id):
        return self.destroy(request)

# defining a get function, this should return a product with the given id
    def get(self, request, id):
        return self.retrieve(request)
