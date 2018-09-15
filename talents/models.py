from django.db import models


class Talent(models.Model):
    name = models.CharField(max_length=16, null=False, blank=False, verbose_name='氏名')
    kana = models.CharField(max_length=16, null=False, blank=False, verbose_name='かな')
    position = models.CharField(max_length=8, null=True, verbose_name='役職')
    department = models.CharField(max_length=16, null=False, blank=False, verbose_name='部署')
    mail = models.CharField(max_length=256, null=False, blank=False, verbose_name='メールアドレス')
    slack = models.CharField(max_length=256, null=False, blank=False, verbose_name='Slack URL')
    photo = models.ImageField(upload_to='photos/')
    seat_x = models.IntegerField(null=False, verbose_name='座席X座標')
    seat_y = models.IntegerField(null=False, verbose_name='座席Y座標')
    classification = models.CharField(max_length=16, null=False, blank=False, verbose_name='雇用区分')
    
    def __unicode__(self):
        return self.name
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'talent'
