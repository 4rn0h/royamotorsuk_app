from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
import os

class Command(BaseCommand):
    help = 'Create a superuser if none exists'

    def handle(self, *args, **kwargs):
        User = get_user_model()
        if not User.objects.filter(is_superuser=True).exists():
            username = os.environ.get("DJANGO_SUPERUSER_USERNAME", "admin")
            email = os.environ.get("DJANGO_SUPERUSER_EMAIL", "admin@royamotorsuk.com")
            password = os.environ.get("DJANGO_SUPERUSER_PASSWORD", "Roy4Mot0rs1")

            User.objects.create_superuser(username=username, email=email, password=password)
            self.stdout.write(self.style.SUCCESS("Superuser created successfully"))
        else:
            self.stdout.write(self.style.WARNING("Superuser already exists"))
