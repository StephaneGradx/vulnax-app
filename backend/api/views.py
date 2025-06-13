from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def register(request):
    username = request.data['username']
    email = request.data['email']
    password = request.data['password']

    if User.objects.filter(username=username).exists():
        return Response({'message': 'Utilisateur déjà existant'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({'message': 'Inscription réussie'}, status=status.HTTP_201_CREATED)

# Create your views here.
