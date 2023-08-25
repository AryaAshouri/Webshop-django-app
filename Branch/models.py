from django.db import models
from django.db import models
from django.utils import timezone

class Product(models.Model):
	status =  (
		("d", "Draft"),
		("p", "Publish")
	)
	product = models.CharField(max_length = 20, unique = True)
	price = models.CharField(max_length = 40)
	category = models.CharField(max_length = 20, null = True)
	description = models.CharField(max_length = 75, null = True)
	slug = models.SlugField(max_length = 20, unique = True)
	profile = models.ImageField(null=True, upload_to = "Images")
	publish = models.DateTimeField(default = timezone.now)
	created = models.DateTimeField(auto_now_add = True)
	created = models.DateTimeField(auto_now = True)
	status = models.CharField(max_length = 1, choices = status)
	def __str__(self):
		return self.product
