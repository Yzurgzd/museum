# Generated by Django 3.2.8 on 2021-10-30 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Heroes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to='photo/%Y/%m/%d/', verbose_name='Фотография')),
                ('last_name', models.CharField(max_length=100, verbose_name='Фамилия ветерана')),
                ('first_name', models.CharField(max_length=100, verbose_name='Имя ветерана')),
                ('middle_name', models.CharField(blank=True, max_length=100, null=True, verbose_name='Отчество ветерана')),
                ('description', models.TextField(verbose_name='Описание')),
                ('student', models.CharField(max_length=255, verbose_name='Студент(ка)')),
                ('kinship', models.CharField(max_length=100, verbose_name='Ветеран приходится')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('signature', models.CharField(blank=True, max_length=100, null=True, verbose_name='Подпись')),
                ('verified', models.BooleanField(default=False, verbose_name='Проверен')),
                ('date_added', models.DateTimeField(auto_now_add=True, verbose_name='Дата добавления')),
            ],
            options={
                'verbose_name': 'Ветеран',
                'verbose_name_plural': 'Ветераны',
            },
        ),
    ]
