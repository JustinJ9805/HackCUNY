# Generated by Django 5.0.2 on 2024-03-19 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_api', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='profile_photo',
            field=models.ImageField(blank=True, upload_to='profile_photos'),
        ),
    ]
