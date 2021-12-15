from django.http.response import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

# BOOKS


def create_book(request):
    return render(request, 'book_form.html')


def update_book(request):
    return render(request, 'book_form.html')


def delete_book(request):
    return HttpResponse('delete book')

# STORES


def create_store(request):
    return render(request, 'store_form.html')


def update_store(request):
    return render(request, 'store_form.html')


def delete_store(request):
    return HttpResponse('delete book')

# REPORT


def report(request):
    return render(request, 'report.html')
