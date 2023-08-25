from django.contrib import admin
from .models import *

class ProductAdmin(admin.ModelAdmin):
	list_display = ("product", "price", "publish", "status")
	list_filter = ("publish", "status")
	search_fields = ("product", "category")
	prepopulated_fields = {"slug" : ("product",)}
	ordering = ("publish", "status")
admin.site.register(Product, ProductAdmin)
