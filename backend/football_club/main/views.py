from django.shortcuts import render
from rest_framework import generics
from .models import Player, News, Fixture
from .serializers import PlayerSerializer, NewsSerializer, FixtureSerializer

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