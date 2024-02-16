from django.db import models
from user_authentication.models import CustomUser
from job_posting.models import Posting


class Application(models.Model):
    applicant = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    posting = models.ForeignKey(Posting, on_delete=models.CASCADE)
