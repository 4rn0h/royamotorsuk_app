from django.db import models

class Vehicle(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    mileage = models.PositiveIntegerField()
    exterior_color = models.CharField(max_length=100)
    interior_color = models.CharField(max_length=100)
    fuel_type = models.CharField(max_length=50)
    transmission = models.CharField(max_length=50)
    engine_size = models.CharField(max_length=50)
    description = models.TextField()
    features = models.JSONField()  # Allows a list of features
    status = models.CharField(max_length=50, default="Available")

class VehicleImage(models.Model):
    vehicle = models.ForeignKey(Vehicle, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to='vehicle_images/')

