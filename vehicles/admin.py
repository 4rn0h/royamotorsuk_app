from django.contrib import admin
from django.utils.html import format_html
from .models import Vehicle, VehicleImage

class VehicleImageInline(admin.TabularInline):
    model = VehicleImage
    extra = 1  # Show one empty slot by default
    readonly_fields = ['image_preview']

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height:100px;"/>', obj.image.url)  # noqa: F821
        return "(No image)"
    image_preview.short_description = "Preview"

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    inlines = [VehicleImageInline]
    list_display = ('make', 'model', 'year', 'price', 'status')

@admin.register(VehicleImage)
class VehicleImageAdmin(admin.ModelAdmin):
    list_display = ('vehicle', 'image')
