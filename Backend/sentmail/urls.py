from django.urls import path
from . import views

urlpatterns = [
    path('car/send-email/', views.car_send_email, name='car_send_email'),
    path('bike/send-email/', views.bike_send_email, name='bike_send_email'),
]
