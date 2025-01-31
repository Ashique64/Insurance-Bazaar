from django.db import models

# Create your models here.


class Car(models.Model):
    makename = models.CharField(max_length=255)
    modelname = models.CharField(max_length=255)
    trimname = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.makename} {self.modelname} {self.trimname}"


class Motorcycle(models.Model):
    brand_name = models.CharField(max_length=255)
    model_name = models.CharField(max_length=255)
    year = models.IntegerField()
    category = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.brand_name} {self.model_name} {self.category} ({self.year})"
