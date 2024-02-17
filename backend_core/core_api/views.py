from application.models import Application
from job_posting.models import Posting, Skill
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from user_authentication.models import CustomUser, Experience, Website

from .serializers import *


class ApplicationViewSet(ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer


class UserList(generics.ListCreateAPIView):
    #permission_classes = [IsAuthenticated, TokenHasReadWriteScope]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class UserDetails(generics.RetrieveAPIView):
    #permission_classes = [IsAuthenticated, TokenHasReadWriteScope]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class GroupList(generics.ListAPIView):
    #permission_classes = [IsAuthenticated, TokenHasScope]
    required_scopes = ['groups']
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class SkillViewSet(ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class PostingViewSet(ModelViewSet):
    queryset = Posting.objects.all()
    serializer_class = PostingSerializer


class ExperienceViewSet(ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class WebsiteViewSet(ModelViewSet):
    queryset = Website.objects.all()
    serializer_class = WebsiteSerializer