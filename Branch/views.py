from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.template import RequestContext
from django.http import HttpResponseRedirect
from .models import *
app_name = "Branch"

def home(request):
	if request.method == "POST" and "like" in request.POST:
		product_name_from_pTag = request.POST.get("liked_obj")
		product_name = product_name_from_pTag
		product = Product.objects.get(name=product_name)
		product.likes = int(product.likes) + 1
		product.save()

	context = {
	"Categories": Categorie.objects.filter(status="p").order_by("-publish")[:4],
	"Products": Product.objects.filter(status="p").order_by("-publish")[:4],
	}
	return render(request, "index.html", context)

def offer(request):
	if (request.method == "POST"):
		name = request.POST.get("product")
		price = request.POST.get("price")
		category = request.POST["category"]
		image = request.FILES.get("image")

		if (name != "" and price != "" and category != "" and image != None):
			Product.objects.create(name=name, price=price, category=category, image=image, sale="بدون تخفیف", likes=0, status="p")
			return HttpResponseRedirect("/")

	return render(request, "product.html")
