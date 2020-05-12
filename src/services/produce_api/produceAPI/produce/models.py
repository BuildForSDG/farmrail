from django.db import models

class Produce(models.Model):
    name = models.CharField(max_length=150)
    thumbnail = models.ImageField(null=True)
    description = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
