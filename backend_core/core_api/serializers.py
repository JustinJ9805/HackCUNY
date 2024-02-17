from rest_framework.serializers import ModelSerializer
from application.models import Application
from job_posting.models import Posting, Skill
from user_authentication.models import CustomUser, Experience, Website

class ApplicationSerializer(ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

class PostingSerializer(ModelSerializer):
    class Meta:
        model = Posting
        fields = '__all__'

class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'role',
            'blurb',
        ]

class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class WebsiteSerializer(ModelSerializer):
    class Meta:
        model = Website
        fields = '__all__'
