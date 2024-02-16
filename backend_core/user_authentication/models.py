from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('applicant', 'Applicant'),
        ('business', 'Business')
    ]

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='applicant')
t')
