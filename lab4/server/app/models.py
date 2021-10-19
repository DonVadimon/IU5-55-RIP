from django.db import models


class Manufacturer(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Car(models.Model):
    name = models.CharField(max_length=200, verbose_name="Name")
    price = models.PositiveIntegerField(verbose_name="Price")
    description = models.TextField(verbose_name="Description")
    main_image = models.ImageField(
        upload_to='car_images/',
        blank=True
    )
    manufacturer = models.ForeignKey(
        'Manufacturer',
        on_delete=models.CASCADE,
    )
    score = models.PositiveSmallIntegerField(verbose_name="Score")

    def __str__(self):
        return self.name
