from django.db import models
from user_authentication.models import CustomUser

class Skill(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'


class Posting(models.Model):
    level_choices = [
        ("I", "Entry Level"),
        ("II", "Mid-Level"),
        ("III", "Senior")
    ]

    title = models.CharField(max_length=255)
    company = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    skills = models.ForeignKey(Skill, on_delete=models.PROTECT)
    level = models.CharField(max_length=3, choices=level_choices)
    description = models.TextField()

    def __str__(self):
        return f'{self.title} at {self.company}'
