from django.contrib import admin

# Register your models here.
from talents.models import Talent, Floor, Seat

admin.site.register(Talent)
admin.site.register(Floor)
admin.site.register(Seat)
