from rest_framework.viewsets import ModelViewSet
from .serializers import (
    PostingSerializer,
    ApplicationSerializer,
    CustomUserSerializer,
    SkillSerializer,
    WebsiteSerializer,
    ExperienceSerializer
)

from application.models import Application
from user_authentication.models import CustomUser, Experience, Website
from job_posting.models import Posting, Skill


class ApplicationViewSet(ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer


class CustomUserViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


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
