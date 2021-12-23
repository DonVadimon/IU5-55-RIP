from django.db import models
from .models import Car, Manufacturer
from rest_framework.serializers import ModelSerializer


class ManufacturerSerializer(ModelSerializer):
    class Meta:
        model = Manufacturer
        fields = ["pk", "name"]


class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = ["pk", "name", "price", "description",
                  "main_image", "manufacturer", "score"]
