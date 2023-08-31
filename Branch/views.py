from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from .forms import CreateUserForm
from .models import *
app_name = "Branch"

def home(request):
	context = {"Categories" : Categorie.objects.filter(status = "p").order_by("-publish"),
	"Products" : Product.objects.filter(status = "p").order_by("-publish"),
	}
	return render(request, "index.html", context)

def category(request):
	return render(request, "category.html")

def product(request):
	if request.method == "POST":
		name = request.POST.get("product")
		price = request.POST.get("price")
		category = request.POST.get("category")
		image = request.FILES.get("image")
		Product.objects.create(name=name, price=price, category=category, image=image, status="p")

	return render(request, "product.html")
