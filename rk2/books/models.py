from django.db import models


class BookStore(models.Model):
    name = models.CharField(max_length=256, verbose_name="Store name")

    def __str__(self):
        return self.name


class Book (models.Model):
    name = models.CharField(max_length=256, verbose_name="Book name")
    cost = models.PositiveIntegerField(verbose_name="Book cost")
    store = models.ForeignKey(
        BookStore,
        on_delete=models.SET_DEFAULT,
        null=True,
        default=None,
        related_name="books"
    )

    def __str__(self):
        return self.name
