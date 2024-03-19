from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from localflavor.us.models import USStateField
from phonenumber_field.modelfields import PhoneNumberField

User = get_user_model()

class Location(models.Model):
    city = models.CharField(_("city"), max_length=100)
    state = USStateField(_("state"), default="AL")
    
    def __str__(self):
        return f"{self.city}, {self.state}"
    
class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.title} at {self.company}"

class Education(models.Model):
    school = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    field_of_study = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.degree} in {self.field_of_study} from {self.school}"
    
class Skill(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    profile_photo = models.ImageField(upload_to="profile_photos", blank=True)
    bio = models.TextField(blank=True)
    phone_number = PhoneNumberField(_("Phone Number"), blank=True)
    location = models.OneToOneField(Location, on_delete=models.CASCADE)
    education = models.ManyToManyField(Education)
    experience = models.ManyToManyField(Experience)
    skills = models.ManyToManyField(Skill)
    
    