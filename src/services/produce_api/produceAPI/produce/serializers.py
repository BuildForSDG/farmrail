from .models import Produce
from rest_framework import serializers

class ProduceSerialiser(serializers.ModelSerializer):
	class Meta:
		model = Produce
		fields = '__all__'
