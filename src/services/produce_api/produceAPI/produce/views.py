from rest_framework import generics, mixins, status
from rest_framework.views import APIView
from .serializers import ProduceSerialiser
from .models import Produce

class Product(generics.ListCreateAPIView):
    serializer_class = ProduceSerialiser
    queryset = Produce.objects.all()

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class Product_detail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProduceSerialiser
    queryset = Produce.objects.all()
    lookup_field = 'id'

    def put(self, request, id):
        return self.update(request)

    def delete(self, request, id):
        return self.destroy(request)

    def get(self, request, id):
        return self.retrieve(request)
