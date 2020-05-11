from django.db import models

class Produce(models.Model):
    name = models.CharField(max_length=150)
    thumbnail = models.ImageField(null=True)
    description = models.TextField()
    price = models.DecimalField(decimal_places=3, max_digits=10, default= 00.0)
	created_date = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name
