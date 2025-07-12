from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer

# Create your views here.
class TestimonialList(generics.ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class TestimonialSubmit(generics.CreateAPIView):
    serializer_class = TestimonialSerializer
from django.shortcuts import render

