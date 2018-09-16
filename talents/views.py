from django.http import HttpResponse
from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet

from talents.models import Talent, Floor, Seat, EmploymentStatus


class EmploymentStatus(serializers.ModelSerializer):
    class Meta:
        model = EmploymentStatus
        fields = (
            'id',
            'name',
            'color'
        )


class TalentSerializer(serializers.ModelSerializer):
    status = EmploymentStatus()

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
            'status'
        )


class TalentViewSet(ModelViewSet):
    serializer_class = TalentSerializer
    queryset = Talent.objects


class SeatSerializer(serializers.ModelSerializer):
    talent = TalentSerializer(many=False)

    class Meta:
        model = Seat
        fields = (
            'id',
            'name',
            'talent',
            'x',
            'y'
        )


class FloorSerializer(serializers.ModelSerializer):
    seats = SeatSerializer(many=True)

    class Meta:
        model = Floor
        fields = (
            'id',
            'name',
            'seats',
        )


class FloorViewSet(ModelViewSet):
    serializer_class = FloorSerializer
    queryset = Floor.objects


def download_photo(request, talent_id):
    talent = Talent.objects.get(id=talent_id)
    return HttpResponse(talent.photo.file.read(), content_type='image/jpeg')


def download_floor_map(request, floor_id):
    floor = Floor.objects.get(id=floor_id)
    return HttpResponse(floor.map.file.read(), content_type='image/jpeg')
