# Generated by Django 3.2.8 on 2021-10-31 12:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('heroes', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Heroes',
            new_name='Hero',
        ),
    ]
