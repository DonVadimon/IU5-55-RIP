from django.db import models


class Manufacturer(models.Model):
    name = models.CharField(max_length=200)


class Car(models.Model):
    name = models.CharField(max_length=200, verbose_name="Name")
    price = models.PositiveIntegerField(verbose_name="Price")
    description = models.TextField(verbose_name="Description")
    main = models.ImageField(
        upload_to='car_images/',
        blank=True
    )
    manufacturer = models.ForeignKey(
        'Manufacturer',
        on_delete=models.CASCADE,
    )
