from rest_framework.serializers import ModelSerializer
from .models import *

class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ExperienceSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class WebsiteSerializer(ModelSerializer):
    class Meta:
        model = Website
        fields = '__all__'


class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'email',
            'user_name',
            'first_name',
            'last_name',
            'password'
        ]

        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ApplicantSerializer(ModelSerializer):
    class Meta:
        model = Applicant
        fields = '__all__'


class BusinessSerializer(ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'


class JobPostingSerializer(ModelSerializer):
    class Meta:
        model = JobPosting
        fields = '__all__'


class JobApplicationSerializer(ModelSerializer):
    class Meta:
        model = JobApplication
        fields = '__all__'


class ApplicantSkillSerializer(ModelSerializer):
    class Meta:
        model = ApplicantSkill
        fields = '__all__'
