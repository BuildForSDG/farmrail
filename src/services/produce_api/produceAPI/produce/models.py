from django.db import models

# specifying database fields
class Produce(models.Model):
    name = models.CharField(max_length=150)
    thumbnail = models.ImageField(null=True)
    category = models.CharField(max_length=100, default='')
    description = models.TextField()
    farmer_id = models.CharField(max_length=50, unique=True, default='')
    farm_id = models.CharField(max_length=12, default='')
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
