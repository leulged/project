from django.shortcuts import render
from rest_framework import generics
from .models import Player, News
from .serializers import PlayerSerializer, NewsSerializer

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