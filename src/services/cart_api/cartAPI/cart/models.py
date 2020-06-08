from django.db import models

ADJUSTMENT_CHOICES = (
    ('DISC', 'Discount'),
    ('TAX', 'Tax'),
    ('SHIP', 'Shipping'),
)

CHECKOUT_CHOICES = (
    ('PEN', 'Pending'),
    ('CAN', 'Cancelled'),
    ('COM', 'Completed'),
)

class Cart(models.Model):
    Customer_first_name = models.CharField(max_length=50, default='first name')
    Customer_last_name = models.CharField(max_length=50, default='last name')
    Customer_email = models.CharField(max_length=75, unique=True, default='name@example.com')
    items = models.TextField(blank=True)
    itemsTotal = models.DecimalField(max_digits=15, decimal_places=3, default=0.000)
    adjustments = models.CharField(choices=ADJUSTMENT_CHOICES, default='DISC', max_length=20)
    adjustmentsTotal = models.DecimalField(max_digits=15, decimal_places=3, default=0.000)
    total = models.DecimalField(max_digits=15, decimal_places=3, default=0.000)
    checkOut_status = models.CharField(choices=CHECKOUT_CHOICES, max_length=15, default='PEN')
    currencyCode = models.CharField(default='UGX', max_length=10)

    def __str__(self):
        return self.Customer_email
