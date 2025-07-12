from django.db import models

class Enquiry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    preferred_contact = models.CharField(max_length=20)
    message = models.TextField()
    car_id = models.CharField(max_length=50, blank=True, null=True)  # reference car by id
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Enquiry from {self.name}"
