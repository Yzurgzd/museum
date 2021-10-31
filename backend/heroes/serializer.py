from rest_framework import serializers
from .models import Hero


class HeroesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ['id', 'photo', 'last_name', 'first_name', 'middle_name']


class HeroDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ['id', 'photo', 'last_name',
                  'first_name', 'middle_name', 'description']


class CreateHeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ['photo', 'last_name', 'first_name', 'middle_name',
                  'description', 'student', 'kinship', 'email', 'signature']
