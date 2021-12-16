from django.http.response import HttpResponse
from django.shortcuts import get_list_or_404, get_object_or_404, redirect, render
from .models import BookStore, Book
from django.db.models import F


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
            if key in book.__dict__:
                setattr(book, key, request.POST[key])
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
    return render(request, 'report.html')
