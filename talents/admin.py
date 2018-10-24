from django.contrib import admin

# Register your models here.
from django import forms

from talents.models import Talent, Floor, Seat, EmploymentStatus


class TalentForm(forms.ModelForm):
    self_introduction = forms.CharField(widget=forms.Textarea, required=False)

    class Meta:
        model = Talent
        fields = '__all__'


class TalentAdmin(admin.ModelAdmin):
    form = TalentForm


admin.site.register(EmploymentStatus)
admin.site.register(Talent, TalentAdmin)
admin.site.register(Floor)
admin.site.register(Seat)
