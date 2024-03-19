from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("profile/<int:pk>/", GetProfile.as_view(), name="profile"),
]