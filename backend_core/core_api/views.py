from rest_framework import generics

from .models import *
from .serializers import *

class GetProfile(generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer