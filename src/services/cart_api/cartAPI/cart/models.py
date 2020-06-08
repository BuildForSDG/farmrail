from django.db import models

class Cart(models.Model):
    ADJUSTMENTS_CHOICES = (
        ('DISC', 'Discount'),
        ('SHIP', 'Shipping'),
        ('TAX', 'Tax'),
    )

    CHECKOUT_CHOICES = (
        ('PEN', 'Pending'),
        ('COM', 'Completed'),
        ('CAN', 'Cancelled')
    )

    CURRENCY_CHOICES = (
        ('UGX', 'Ugandan Shillings'),
        ('USD', 'United States Dollars'),
        ('GBP', 'British Pound'),
    )



    customer_firstName = models.CharField(max_length=50)
    customer_lastName = models.CharField(max_length=50)
    customer_email = models.CharField(max_length=50, unique=True)
    items = models.TextField()
    item_quatity = models.PositiveIntegerField(default=0)
    itemsTotal = models.DecimalField(max_digits=12, decimal_places=3, default=0.0)
    adjustments = models.CharField(max_length=12, choices=ADJUSTMENTS_CHOICES, default='DISC')
    adjustmentsTotal = models.DecimalField(max_digits=12, decimal_places=3, default=0.0)
    total = models.DecimalField(max_digits=12, decimal_places=3, default=0.0)
    checkOut = models.CharField(max_length=12, choices=CHECKOUT_CHOICES, default='PEN')
    currenceCode = models.CharField(max_length=5, choices=CURRENCY_CHOICES, default='UGX')

