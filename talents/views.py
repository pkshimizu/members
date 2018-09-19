from django.http import HttpResponse
from rest_framework import serializers, status
from rest_framework.decorators import action
from rest_framework.response import Response
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
            'status',
            'self_introduction'
        )


class TalentViewSet(ModelViewSet):
    serializer_class = TalentSerializer
    queryset = Talent.objects

    @action(methods=['patch'], detail=True)
    def self_introduction(self, request, pk=None):
        talent = Talent.objects.get(id=pk)
        message = request.data['message'] if 'message' in request.data else None
        password = request.data['password'] if 'password' in request.data else None
        if talent.password == password:
            talent.self_introduction = message
            talent.save()
            data = TalentSerializer(talent).data
            return Response(data, status=status.HTTP_200_OK)
        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)


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
