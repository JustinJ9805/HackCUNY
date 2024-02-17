from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import path, include

router = DefaultRouter()
router.register(r'applications', ApplicationViewSet)
router.register(r'posting', PostingViewSet)
router.register(r'website', WebsiteViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'users', CustomUserViewSet)
router.register(r'skills', SkillViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
