# Generated by Django 2.1.1 on 2018-11-18 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('talents', '0007_talent_business'),
    ]

    operations = [
        migrations.AlterField(
            model_name='talent',
            name='department',
            field=models.CharField(blank=True, max_length=16, null=True, verbose_name='部署'),
        ),
    ]
