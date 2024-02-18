from .serializers import *
from .models import *

from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.views import APIView

from oauth2_provider.contrib.rest_framework import OAuth2Authentication

from django.contrib.auth import get_user_model


class CreateSkill(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class CreateExperience(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class CreateWebsite(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Website.objects.all()
    serializer_class = WebsiteSerializer


class CreateJobApplication(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer

    # TODO: send email to Business on post
    def post(self, request, *args, **kwargs):
        pass


class CreateJobPosting(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer


class SkillDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ExperienceDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class JobApplicationDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer


User = get_user_model()


class UserLogin(APIView):
    authentication_classes = [
        SessionAuthentication,
        BasicAuthentication,
        OAuth2Authentication
    ]
    permission_classes = [permissions.AllowAny]

    # TODO: handle user login


class UserSignUp(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = CustomUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = [
        SessionAuthentication,
        BasicAuthentication,
        OAuth2Authentication
    ]
    permission_classes = User.objects.all()
    serializer_class = CustomUserSerializer
