from rest_framework import serializers
from .models import *

class UserCreationSerializer(serializers.ModelSerializer):
    """User Creation Serializer

    Args:
        serializers(ModelSerializer): Inherits from ModelSerializer class to serializer the User Model into JSON format
    """
    class Meta:
        model = NewUser
        fields = [
            'email',
            'password',
        ]