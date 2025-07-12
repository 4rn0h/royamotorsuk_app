from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from enquiries.views import EnquiryCreateAPIView
from django.conf import settings
from django.conf.urls.static import static

# Import your custom token view
from users.views import CustomTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),

    # login endpoint using your custom view
    path('api/auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/', include('vehicles.urls')),
    path('api/users/', include('users.urls')),
    path('api/', include('testimonials.urls')),
    path('api/', include('chat.urls')),

    path('api/enquiries/', EnquiryCreateAPIView.as_view(), name='enquiry-create'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
