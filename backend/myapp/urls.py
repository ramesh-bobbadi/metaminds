from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('welcome',views.WelcomeViewset,basename='welcome')
router.register('Liveupdates',views.LiveUpdatesViewset,basename='Liveupdates')
urlpatterns = [
    path('hello/',views.Hello),
]+router.urls
