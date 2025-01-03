from django.urls import path
from . import views

urlpatterns = [
    path('car/send-email/', views.car_send_email, name='car_send_email'),
    path('bike/send-email/', views.bike_send_email, name='bike_send_email'),
    path('life/send-email/', views.life_send_email, name='life_send_email'),
    path('business/send-email/', views.business_send_email, name='business_send_email'),
    path('pet/send-email/', views.pet_send_email, name='pet_send_email'),
    path('health/send-email/', views.health_send_email, name='health_send_email'),
    path('home/send-email/', views.home_send_email, name='home_send_email'),
    path('travel/send-email/', views.travel_send_email, name='travel_send_email'),
]
