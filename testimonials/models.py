from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)
