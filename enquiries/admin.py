from django.contrib import admin
from .models import Enquiry

@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'preferred_contact', 'car_id', 'created_at')
    search_fields = ('name', 'email', 'phone', 'message')
    list_filter = ('preferred_contact', 'created_at')
