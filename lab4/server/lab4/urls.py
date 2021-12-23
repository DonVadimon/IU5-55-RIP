from django.contrib import admin
from django.urls import path, include
from app import views as app_views
from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'cars', app_views.CarsViewSet)
router.register(r'manufacturers', app_views.ManufacturerViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
