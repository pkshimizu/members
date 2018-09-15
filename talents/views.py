from django.http import HttpResponse
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


def download_photo(request, talent_id):
    talent = Talent.objects.get(id=talent_id)
    return HttpResponse(talent.photo.file.read(), content_type='image/jpeg')
