from django.contrib import admin
from .models import Player, News, Fixture
from .models import Product, Order, OrderItem, Category, BookedFixture


# Register your models here.
admin.site.register(Player)
admin.site.register(News)
admin.site.register(Fixture)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Category)
admin.site.register(BookedFixture)
