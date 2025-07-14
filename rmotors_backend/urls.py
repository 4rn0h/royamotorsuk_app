from django.contrib import admin
from django.urls import path, include, re_path # Added re_path
from rest_framework_simplejwt.views import TokenRefreshView
from enquiries.views import EnquiryCreateAPIView
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView # Added TemplateView import

# Import your custom token view
from users.views import CustomTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),

    # Login endpoint using your custom view
    path('api/auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/', include('vehicles.urls')),
    path('api/users/', include('users.urls')),
    path('api/', include('testimonials.urls')),
    path('api/', include('chat.urls')),

    path('api/enquiries/', EnquiryCreateAPIView.as_view(), name='enquiry-create'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


urlpatterns += [
    re_path(r'^(?!api/).*$', TemplateView.as_view(template_name='index.html')),
]