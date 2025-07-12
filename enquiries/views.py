from rest_framework import generics
from .models import Enquiry
from .serializers import EnquirySerializer

class EnquiryCreateAPIView(generics.CreateAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
