from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('role', 'profile_photo', 'bio')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('role', 'profile_photo', 'bio')}),
    )
    list_display = ('user_name', 'email', 'first_name', 'last_name', 'is_staff', 'role')
    search_fields = ('user_name', 'email', 'first_name', 'last_name')
    ordering = ('user_name',)


admin.site.register(CustomUser, CustomUserAdmin)
