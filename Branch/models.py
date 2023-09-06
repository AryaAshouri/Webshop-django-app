from django.db import models
from django.db import models
from django.utils import timezone

class Categorie(models.Model):
	status =  (
		("d", "Draft"),
		("p", "Publish")
	)
	name = models.CharField(max_length = 20, null = True)
	description = models.CharField(max_length = 90, null = True)
	image = models.ImageField(null=True, upload_to = "Images")
	publish = models.DateTimeField(default = timezone.now)
	created = models.DateTimeField(auto_now_add = True)
	created = models.DateTimeField(auto_now = True)
	status = models.CharField(max_length = 1, choices = status)
	def __str__(self):
		return self.name

class Product(models.Model):
	status =  (
		("d", "Draft"),
		("p", "Publish")
	)
	name = models.CharField(max_length = 20, null = True)
	price = models.CharField(max_length = 90, null = True)
	category = models.CharField(max_length = 50, null = True)
	sale = models.CharField(max_length = 50, null = True)
	likes = models.CharField(max_length = 10, null = True)
	image = models.ImageField(null=True, upload_to = "Images")
	publish = models.DateTimeField(default = timezone.now)
	created = models.DateTimeField(auto_now_add = True)
	created = models.DateTimeField(auto_now = True)
	status = models.CharField(max_length = 1, choices = status)
	def __str__(self):
		return self.name