from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve as django_serve
from enquiries.views import EnquiryCreateAPIView
from users.views import CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('vehicles.urls')),
    path('api/users/', include('users.urls')),
    path('api/', include('testimonials.urls')),
    path('api/', include('chat.urls')),
    path('api/enquiries/', EnquiryCreateAPIView.as_view(), name='enquiry-create'),

    # Serve static assets before fallback route
    re_path(r'^assets/(?P<path>.*)$', django_serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'rmotors_frontend', 'dist', 'assets'),
    }),
    re_path(r'^favicon.ico$', django_serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'rmotors_frontend', 'dist'),
    }),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Catch-all for React routing
urlpatterns += [
    re_path(r'^(?!admin/|api/|static/|media/|assets/).*$', TemplateView.as_view(template_name='index.html')),
]
