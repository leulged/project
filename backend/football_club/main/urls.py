from django.urls import path, include
from .views import PlayerListCreate, PlayerDetail, NewsListCreate, NewsDetail, FixtureList, RegisterView, CustomTokenObtainPairView
from .views import CategoryListCreate, ProductListCreate, ProductDetail, OrderListCreate, OrderDetail, OrderItemCreate


urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='my-token'),
    path('players/', PlayerListCreate.as_view(), name='player-list-create'),
    path('players/<int:pk>/', PlayerDetail.as_view(), name='player-detail'),
    path('news/', NewsListCreate.as_view(), name='news-list-create'),
    path('news/<int:pk>/', NewsDetail.as_view(), name='news-detail'),
    path('fixture/', FixtureList.as_view(), name='fixture-list'),
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', CustomTokenObtainPairView.as_view(), name="login"),
    path('categories/', CategoryListCreate.as_view(), name='category-list-create'),
    path('products/', ProductListCreate.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('orders/', OrderListCreate.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderDetail.as_view(), name='order-detail'),
    path('order-items/', OrderItemCreate.as_view(), name='order-item-create'),
]
