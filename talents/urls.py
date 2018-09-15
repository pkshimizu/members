from django.urls import path
from rest_framework import routers

from talents import views
from talents.views import TalentViewSet


urlpatterns = [
    path(r'photos/<int:talent_id>', views.download_photo, name='download_photo')
]

router = routers.SimpleRouter()
router.register(r'talents', TalentViewSet, 'talents')

urlpatterns += router.urls
