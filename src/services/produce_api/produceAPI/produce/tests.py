from django.test import TestCase
from rest_framework.test import APIRequestFactory

from produce.models import Produce
from produce.serializers import ProduceSerialiser

#using the standard API Request Factory to test the create request
createTest = APIRequestFactory()
request = createTest.post('/products/', {'name': 'testname'})
print('created test ran successifully')

#using the standard Request Factory to test the update request
updateTest = APIRequestFactory()
request = updateTest.put('/products/100/', {'name': 'updating test name'})
print('updated succesifully')
