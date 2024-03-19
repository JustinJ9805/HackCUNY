from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _

class NewUserManager(BaseUserManager):
    """
    NewUserManager

    Args:
        BaseUserManager: Inherits from BaseUserManager class, allows NewUser class to create Users without requiring a username
    """
    def create_user(self, email, password, **extra_fields):
        """_summary_

        Args:
            email (str): user's email
            password (str): user's password

        Raises:
            ValueError: Email cannot be None

        Returns:
            User: creates a new User with information passed into this function
        """
        if not email:
            raise ValueError(_("The email must be set!"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        """_summary_

        Args:
            email (str): user's email
            password (str): user's password

        Raises:
            ValueError: is_staff must be set to True
            ValueError: is_superuser must be set to True

        Returns:
            User: creates an instance of User with is_staff and is_superuser set to True
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)