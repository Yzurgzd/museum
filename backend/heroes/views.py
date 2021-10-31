from rest_framework import generics, permissions
from .serializer import HeroesListSerializer, HeroDetailSerializer, CreateHeroSerializer
from .models import Hero
from .pagination import StandardResultsSetPagination
from rest_framework.filters import SearchFilter


class HeroesListAPIView(generics.ListAPIView):
    queryset = Hero.objects.filter(verified=True)
    serializer_class = HeroesListSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [SearchFilter, ]
    search_fields = ('last_name', 'first_name')


class HeroesLastListAPIView(generics.ListAPIView):
    queryset = Hero.objects.filter(verified=True).order_by('-date_added')[:6]
    serializer_class = HeroesListSerializer
    pagination_class = None


class HeroRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Hero.objects.filter(verified=True)
    serializer_class = HeroDetailSerializer
    lookup_field = 'pk'


class HeroCreateAPIView(generics.CreateAPIView):
    queryset = Hero.objects.all()
    serializer_class = CreateHeroSerializer
    permission_classes = (permissions.AllowAny,)
