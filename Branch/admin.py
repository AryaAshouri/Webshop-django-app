from django.contrib import admin
from .models import *

class CategorieAdmin(admin.ModelAdmin):
	list_display = ("name", "publish", "status")
	list_filter = ("publish", "status")
	search_fields = ("name",)
	ordering = ("publish", "status")
admin.site.register(Categorie, CategorieAdmin)

class ProductAdmin(admin.ModelAdmin):
	list_display = ("name", "publish", "status")
	list_filter = ("publish", "status")
	search_fields = ("name",)
	ordering = ("publish", "status")
admin.site.register(Product, ProductAdmin)
