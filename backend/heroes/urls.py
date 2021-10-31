from django.urls.conf import path
from . import views

urlpatterns = [
    path('heroes/', views.HeroesListAPIView.as_view()),
    path('heroes/last/', views.HeroesLastListAPIView.as_view()),
    path('heroes/create/', views.HeroCreateAPIView.as_view()),
    path('hero/<int:pk>/', views.HeroRetrieveAPIView.as_view()),
]
