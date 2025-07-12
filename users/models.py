from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('guest', 'Guest'),
        ('customer', 'Customer'),
        ('staff', 'Staff'),
        ('inventory_manager', 'Inventory Manager'),
        ('sales_manager', 'Sales Manager'),
        ('admin', 'Admin'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='guest')
