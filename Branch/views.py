from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.template import RequestContext
from django.http import HttpResponseRedirect
from .models import *
app_name = "Branch"
dict_of_cart_products = {}

def home(request):
	global dict_of_cart_products
	if request.method == "POST" and "like-product-button" in request.POST:
		product_name = request.POST.get("product-name")
		product = Product.objects.get(name=product_name)
		product.likes = int(product.likes) + 1
		product.save()

		product_price = product.price
		for name, price in dict_of_cart_products.items():
			if (name == product_name and price == product_price):
				Cart.objects.filter(name=name).delete()
				Cart.objects.create(name=product_name, price=product.price, category=product.category, likes=product.likes, image=product.image, status="p")

	elif request.method == "POST" and "add-product-button" in request.POST:
		main_product = request.POST.get("product-name")
		product = Product.objects.get(name=main_product)
		product_name = product.name
		product_price = product.price
		product_category = product.category
		product_likes = product.likes
		product_image = product.image

		dict_of_cart_products.update({product_name : product_price})
		for name, price in dict_of_cart_products.items():
			if (name == product_name and price == product_price):
				Cart.objects.filter(name=name).delete()
				Cart.objects.create(name=product_name, price=product_price, category=product_category, likes=product_likes, image=product_image, status="p")

	count = Cart.objects.filter(status="p").count() #count is method which can calculate number of objects!
	context = {
	"Categories": Categorie.objects.filter(status="p").order_by("-publish")[:4],
	"Products": Product.objects.filter(status="p").order_by("-publish")[:4],
	"Count" : count,
	}
	return render(request, "index.html", context)

def offer(request):
	if (request.method == "POST"):
		name = request.POST.get("product-name-input")
		price = request.POST.get("product-price-input")
		category = request.POST["product-category-input"]
		image = request.FILES.get("product-image-input")

		if (name != "" and price != "" and category != "" and category != "دسته بندی" and image != None):
			Product.objects.create(name=name, price=price, category=category, image=image, likes=0, status="p")
			return HttpResponseRedirect("/")

	return render(request, "offer.html")

def cart(request):
	global dict_of_cart_products
	if request.method == "POST" and "delete-product-button" in request.POST:
		product_name = request.POST.get("product-name")
		product = Product.objects.get(name=product_name)
		Cart.objects.filter(name=product).delete()

		for name in dict_of_cart_products.copy():
			if (name == product_name):
				del dict_of_cart_products[name]

	context = {
	"Carts": Cart.objects.filter(status="p").order_by("-publish"),
	}
	return render(request, "cart.html", context)

def products(request):
	global dict_of_cart_products
	if request.method == "POST" and "like-product-button" in request.POST:
		product_name = request.POST.get("product-name")
		product = Product.objects.get(name=product_name)
		product.likes = int(product.likes) + 1
		product.save()

		product_price = product.price
		for name, price in dict_of_cart_products.items():
			if (name == product_name and price == product_price):
				Cart.objects.filter(name=name).delete()
				Cart.objects.create(name=product_name, price=product.price, category=product.category, likes=product.likes, image=product.image, status="p")

	elif request.method == "POST" and "add-product-button" in request.POST:
		main_product = request.POST.get("product-name")
		product = Product.objects.get(name=main_product)
		product_name = product.name
		product_price = product.price
		product_category = product.category
		product_likes = product.likes
		product_image = product.image

		dict_of_cart_products.update({product_name : product_price})
		for name, price in dict_of_cart_products.items():
			if (name == product_name and price == product_price):
				Cart.objects.filter(name=name).delete()
				Cart.objects.create(name=product_name, price=product_price, category=product_category, likes=product_likes, image=product_image, status="p")

	context = {
		"Products": Product.objects.filter(status="p").order_by("-publish"),
	}
	return render(request, "products.html", context)
