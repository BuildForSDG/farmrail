from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Cart API documentaion')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('cart.urls')),
    path('docs/', schema_view),
]
