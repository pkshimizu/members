from django.contrib import admin

# Register your models here.
from talents.models import Talent, Floor, Seat, EmploymentStatus

admin.site.register(EmploymentStatus)
admin.site.register(Talent)
admin.site.register(Floor)
admin.site.register(Seat)
