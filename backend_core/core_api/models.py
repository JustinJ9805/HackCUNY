from django.db import models
from oauth2_provider.models import AbstractApplication
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class HackathonApplication(AbstractApplication):
    pass


class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)


class Experience(models.Model):
    job_title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(default=timezone.now)


class Website(models.Model):
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=50)


class CustomUserManager(BaseUserManager):
    def create_user(self, email, user_name, password=None, **extra_fields):
        if not email:
            raise ValueError(_('You must provide an email address'))
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            user_name=user_name,
            **extra_fields
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, user_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if not extra_fields.get('is_staff'):
            raise ValueError('Superuser must have is_staff=True.')
        if not extra_fields.get('is_superuser'):
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, user_name, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('applicant', 'Applicant'),
        ('business', 'Business')
    ]

    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    start_date = models.DateTimeField(default=timezone.now)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='applicant')
    profile_photo = models.ImageField(upload_to='profile_photos', blank=True, null=True)
    bio = models.TextField(_('about'), blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'user_name',
        'first_name',
        'last_name'
    ]

    def __str__(self):
        return self.user_name


class Applicant(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    experiences = models.ManyToManyField(Experience, blank=True)


class Business(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)


class JobPosting(models.Model):
    LEVEL_CHOICES = [
        ('I', 'Entry Level'),
        ('II', 'Mid Level'),
        ('III', 'Senior')
    ]

    title = models.CharField(max_length=255)
    level = models.CharField(max_length=3, choices=LEVEL_CHOICES)
    business = models.ForeignKey(Business, on_delete=models.CASCADE)
    description = models.TextField()
    skills = models.ManyToManyField(Skill)


class JobApplication(models.Model):
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    recipient = models.ForeignKey(Business, on_delete=models.CASCADE)
    posting = models.ForeignKey(JobPosting, on_delete=models.CASCADE)


class ApplicantSkill(models.Model):
    user = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
