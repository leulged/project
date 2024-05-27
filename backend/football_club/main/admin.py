from django.contrib import admin
from .models import Player, News, Fixture

# Register your models here.
admin.site.register(Player)
admin.site.register(News)
admin.site.register(Fixture)
