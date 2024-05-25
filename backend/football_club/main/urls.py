from django.urls import path
from .views import PlayerListCreate, PlayerDetail, NewsListCreate, NewsDetail

urlpatterns = [
    path('players/', PlayerListCreate.as_view(), name='player-list-create'),
    path('players/<int:pk>/', PlayerDetail.as_view(), name='player-detail'),
    path('news/', NewsListCreate.as_view(), name='news-list-create'),
    path('news/<int:pk>/', NewsDetail.as_view(), name='news-detail'),
]
