from rest_framework.viewsets import ModelViewSet
from .serializers import CarSerializer, ManufacturerSerializer
from .models import Car, Manufacturer


class CarsViewSet(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class ManufacturerViewSet(ModelViewSet):
    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer
