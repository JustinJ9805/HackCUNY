# Generated by Django 5.0.2 on 2024-02-17 17:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_authentication', '0004_hackcunyappication'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='HackCUNYAppication',
            new_name='HackCUNYApplication',
        ),
    ]