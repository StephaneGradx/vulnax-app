from django.urls import path
from .views import register
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Connexion
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', register),  # Refresh
]
