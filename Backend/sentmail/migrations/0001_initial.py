# Generated by Django 5.1.4 on 2025-01-31 05:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('makename', models.CharField(max_length=255)),
                ('modelname', models.CharField(max_length=255)),
                ('trimname', models.CharField(max_length=255)),
            ],
        ),
    ]
