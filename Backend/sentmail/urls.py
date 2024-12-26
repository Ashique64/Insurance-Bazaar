from django.urls import path
from . import views

urlpatterns = [
    path('car/send-email/', views.car_send_email, name='car_send_email'),
]
