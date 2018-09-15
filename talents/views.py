from django.shortcuts import render
from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet

from talents.models import Talent


class TalentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talent
        fields = (
            'id',
            'name',
            'kana',
            'position',
            'department',
            'mail',
            'slack',
            'seat_x',
            'seat_y',
            'classification'
        )


class TalentViewSet(ModelViewSet):
    serializer_class = TalentSerializer
    queryset = Talent.objects
