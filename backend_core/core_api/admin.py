from django.contrib import admin
from .models import *

admin.site.register(Location)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(Skill)
admin.site.register(UserProfile)