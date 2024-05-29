from django.shortcuts import render
from rest_framework import generics
from .models import Player, News, Fixture
from .serializers import PlayerSerializer, NewsSerializer, FixtureSerializer, UserSerializer, CustomTokenObtainPairSerializer
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class PlayerListCreate(generics.ListAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PlayerDetail(generics.RetrieveAPIView):
    queryset =Player.objects.all()
    serializer_class = PlayerSerializer

class NewsListCreate(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class FixtureList(generics.ListAPIView):
    queryset = Fixture.objects.all()
    serializer_class = FixtureSerializer
