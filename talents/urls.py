from django.urls import path
from rest_framework import routers

from talents import views
from talents.views import TalentViewSet, FloorViewSet

urlpatterns = [
    path(r'photos/<int:talent_id>', views.download_photo, name='download_photo'),
    path(r'floormaps/<int:floor_id>', views.download_floor_map, name='download_floor_map')
]

router = routers.SimpleRouter()
router.register(r'talents', TalentViewSet, 'talents')
router.register(r'floors', FloorViewSet, 'floors')

urlpatterns += router.urls
