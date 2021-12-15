"""rk2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from books import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="main"),
    path('book/', include([
        path('create/', views.create_book, name="create_book"),
        path('update/<int:question_id>/', views.update_book, name="update_book"),
        path('delete/<int:question_id>/', views.delete_book, name="delete_book"),
    ])),
    path('store/', include([
        path('create/', views.create_store, name="create_store"),
        path('update/<int:question_id>/',
             views.update_store, name="update_store"),
        path('delete/<int:question_id>/',
             views.delete_store, name="delete_store"),
    ])),
    path('report/', views.report, name="report"),
]
