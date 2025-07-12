from django.urls import path
from .views import TestimonialList, TestimonialSubmit

urlpatterns = [
    path('testimonials/', TestimonialList.as_view(), name='testimonial-list'),
    path('testimonials/submit/', TestimonialSubmit.as_view(), name='testimonial-submit'),
]
