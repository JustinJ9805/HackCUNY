from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from oauth2_provider.models import AbstractApplication


class HackCUNYApplication(AbstractApplication):
    redirect_uris = models.TextField(blank=True)


class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('applicant', 'Applicant'),
        ('business', 'Business')
    ]

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='applicant')


class Experience(models.Model):
    applicant = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='experiences')
    job_title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True, default=timezone.now)


class Website(models.Model):
    applicant = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=255)


class Blurb(models.Model):
    applicant = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    body = models.TextField()




