# Generated by Django 3.0.4 on 2020-08-28 11:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0010_auto_20200828_1712'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userfeedback',
            old_name='bookedat',
            new_name='created_at',
        ),
    ]
