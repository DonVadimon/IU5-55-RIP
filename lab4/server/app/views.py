from django.http.response import Http404, JsonResponse
from django.core import serializers
from django.shortcuts import render
from django.forms.models import model_to_dict
import json

from .models import Car

# Create your views here.


def index(req):
    cars = list(Car.objects.all().values())
    return JsonResponse({'cars': cars})


def details(req, car_id):
    try:
        car = list(Car.objects.filter(pk=car_id).values())[0]
    except Car.DoesNotExist:
        raise Http404('Car Does Not Exist')

    return JsonResponse({'car': car})
