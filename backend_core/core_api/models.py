from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

from .managers import NewUserManager

class NewUser(AbstractUser):
    """
    New User
    Args:
        AbstractUser: Inherits from Django's Abstract User Class, add role field and separate user model manager
    """
    ROLE_CHOICES = [
        ("applicant", "Applicant"),
        ("business", "Business")
    ]

    username = None
    email = models.EmailField(_("email address"), unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = NewUserManager()

    def __str__(self):
        """Display User

        Returns:
            str: user's email
        """
        return self.email
