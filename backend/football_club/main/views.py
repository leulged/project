from django.shortcuts import render
from rest_framework import generics
from .models import Player, News, Fixture
from .models import Product, Order, OrderItem, Category
from .serializers import ProductSerializer, OrderItemSerializer
from .serializers import PlayerSerializer, NewsSerializer, FixtureSerializer, UserSerializer, CustomTokenObtainPairSerializer
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer, CategorySerialzer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction





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

class CategoryListCreate(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerialzer
# Product Views
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Order Views
class OrderListCreate(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemCreate(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        try:
            order = Order.objects.get(id=request.data['order'])
            product = Product.objects.get(id=request.data['product'])
            quantity = int(request.data['quantity'])

            if quantity <= 0:
                return Response({'error': 'Quantity must be a positive integer'}, status=status.HTTP_400_BAD_REQUEST)

            if product.stock < quantity:
                return Response({'error': 'Not enough stock available'}, status=status.HTTP_400_BAD_REQUEST)

            price = product.price * quantity

            product.stock -= quantity
            product.save()

            order_item = OrderItem.objects.create(order=order, product=product, quantity=quantity, price=price)
            serializer = self.get_serializer(order_item)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except (Order.DoesNotExist, Product.DoesNotExist):
            return Response({'error': 'Order or Product does not exist'}, status=status.HTTP_404_NOT_FOUND)

        except KeyError:
            return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)

        except ValueError:
            return Response({'error': 'Invalid value for quantity'}, status=status.HTTP_400_BAD_REQUEST)