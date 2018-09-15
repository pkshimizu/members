from rest_framework import routers

from talents.views import TalentViewSet

router = routers.SimpleRouter()
router.register(r'^talents', TalentViewSet, 'talents')

urlpatterns = router.urls
