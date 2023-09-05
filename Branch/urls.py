from django.views.generic import TemplateView
from django.urls import path
from .views import *
app_name = "Branch"

urlpatterns = [
    path('', home, name="home"),
    path('offer', offer, name="offer"),
]
