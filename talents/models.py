from django.db import models


class EmploymentStatus(models.Model):
    name = models.CharField(max_length=16, null=False, blank=False, verbose_name='名称')
    color = models.CharField(max_length=8, null=False, blank=False, verbose_name='カラーコード')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'employment_status'


class Talent(models.Model):
    name = models.CharField(max_length=16, null=False, blank=False, verbose_name='氏名')
    kana = models.CharField(max_length=16, null=False, blank=False, verbose_name='かな')
    position = models.CharField(max_length=8, null=True, blank=True, verbose_name='役職')
    department = models.CharField(max_length=16, null=False, blank=False, verbose_name='部署')
    mail = models.CharField(max_length=256, null=False, blank=False, verbose_name='メールアドレス')
    slack = models.CharField(max_length=256, null=False, blank=False, verbose_name='Slack URL')
    photo = models.ImageField(upload_to='photos/', verbose_name='写真')
    status = models.ForeignKey(EmploymentStatus, null=True, blank=True, related_name='talents', on_delete=models.SET_NULL, verbose_name='雇用形態')
    
    def __unicode__(self):
        return self.name
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'talent'


class Floor(models.Model):
    name = models.CharField(max_length=16, null=False, blank=False, verbose_name='フロア名')
    map = models.ImageField(upload_to='floors/', verbose_name='フロアマップ')
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'floor'
   
    
class Seat(models.Model):
    name = models.CharField(max_length=8, null=False, blank=False, verbose_name='シート名')
    floor = models.ForeignKey(Floor, null=False, related_name='seats', on_delete=models.CASCADE, verbose_name='フロア')
    talent = models.ForeignKey(Talent, null=True, blank=True, related_name='seats', on_delete=models.SET_NULL, verbose_name='タレント')
    x = models.IntegerField(null=False, verbose_name='X座標')
    y = models.IntegerField(null=False, verbose_name='Y座標')

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'seat'
