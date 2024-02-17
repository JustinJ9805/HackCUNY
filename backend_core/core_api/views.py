from rest_framework.viewsets import ModelViewSet
from rest_framework import generics, permissions

from django.contrib.auth.models import Group

from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope

from user_authentication.models import Experience, Website, Blurb, CustomUser
from job_posting.models import Posting, Skill
from application.models import Application

from .serializers import *


class UserList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
        TokenHasReadWriteScope
    ]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class UserDetails(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
        TokenHasReadWriteScope
    ]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class GroupList(generics.ListAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
        TokenHasScope
    ]
    required_scopes = ['groups']
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class ApplicationViewSet(ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer


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


class BlurbViewSet(ModelViewSet):
    queryset = Blurb.objects.all()
    serializer_class = BlurbSerializer
