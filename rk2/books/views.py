from django.db.models.aggregates import Avg
from django.http.response import HttpResponse
from django.shortcuts import get_list_or_404, get_object_or_404, redirect, render
from .models import BookStore, Book
from django.db import models


def index(request):
    return render(request, 'index.html')

# BOOKS


def read_book(request):
    books = Book.objects.all()
    return render(request, 'book/book_list.html', {'books': books})


def create_book(request):
    if request.method == 'GET':
        stores = BookStore.objects.all()
        return render(request, 'book/create_book.html', {"stores": stores})
    else:
        dto = {}
        for key in request.POST:
            if key in Book.__dict__:
                dto[key] = request.POST[key]
        dto['store'] = get_object_or_404(BookStore, pk=request.POST['store'])
        new_book = Book(**dto)
        new_book.save()
        return redirect('read_book')


def update_book(request, book_id):
    if request.method == 'GET':
        stores = BookStore.objects.all()
        book = get_object_or_404(Book, pk=book_id)
        return render(request, 'book/update_book.html', {"book": book, "stores": stores})
    else:
        book = get_object_or_404(Book, pk=book_id)
        for key in request.POST:
            if key in book.__dict__ and key != 'store':
                setattr(book, key, request.POST[key])
        if 'store' in request.POST:
            setattr(book, 'store', get_object_or_404(
                BookStore, pk=request.POST['store']))
        book.save()
        return redirect('read_book')


def delete_book(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    book.delete()
    return redirect(request.META.get('HTTP_REFERER'))

# STORES


def read_store(request):
    stores = BookStore.objects.all()
    return render(request, 'store/store_list.html', {'stores': stores})


def create_store(request):
    if request.method == 'GET':
        return render(request, 'store/create_store.html')
    else:
        new_store = BookStore(name=request.POST['name'])
        new_store.save()
        return redirect('read_store')


def update_store(request, store_id):
    if request.method == 'GET':
        store = get_object_or_404(BookStore, pk=store_id)
        return render(request, 'store/update_store.html', {"store": store})
    else:
        store = get_object_or_404(BookStore, pk=store_id)
        for key in request.POST:
            if key in store.__dict__:
                setattr(store, key, request.POST[key])
        store.save()
        return redirect('read_store')


def delete_store(request, store_id):
    store = get_object_or_404(BookStore, pk=store_id)
    store.delete()
    return redirect(request.META.get('HTTP_REFERER'))


# REPORT


def report(request):
    expensive_books = Book.objects.filter(cost__gt=1000)
    avg_prices = []
    for store in BookStore.objects.all():
        avg_prices.append({"store": store,  "price": Book.objects.filter(
            store=store.pk).aggregate(Avg('cost'))['cost__avg']})
    return render(request, 'report.html', {"expensive_books": expensive_books, "avg_prices": avg_prices})
