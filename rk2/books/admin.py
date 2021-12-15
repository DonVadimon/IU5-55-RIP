from django.contrib import admin
from .models import Book, BookStore

admin.site.register(Book)
admin.site.register(BookStore)
