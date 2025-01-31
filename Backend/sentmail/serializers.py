from rest_framework import serializers
from .models import Car,Motorcycle

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['makename', 'modelname', 'trimname']
        

class MotorcycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Motorcycle
        fields = ['brand_name', 'model_name', 'year', 'category']