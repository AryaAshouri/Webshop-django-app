from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from .forms import CreateUserForm
from .models import *
app_name = "Branch"

def home(request):
	context = {"Products" : Product.objects.filter(status = "p").order_by("-publish")}
	return render(request, "index.html", context)
