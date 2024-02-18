from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='Users')


urlpatterns = [
    path('', include(router.urls)),
    path('skills/', CreateSkill.as_view()),
    path('experiences/', CreateExperience.as_view()),
    path('websites/', CreateWebsite.as_view()),
    path('applications/', CreateJobApplication.as_view()),
    path('postings/', CreateJobPosting.as_view()),
    path('skills/<int:pk>/', SkillDetail.as_view()),
    path('experiences/<int:pk>/', ExperienceDetail.as_view()),
    path('applications/<int:pk>/', JobApplicationDetail.as_view()),
    path('login/', UserLogin.as_view()),
    path('signup/', UserSignUp.as_view()),
]

urlpatterns += router.urls