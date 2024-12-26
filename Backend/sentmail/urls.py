from django.urls import path
from . import views

urlpatterns = [
    path('car/send-email/', views.car_send_email, name='car_send_email'),
    path('bike/send-email/', views.bike_send_email, name='bike_send_email'),
    path('life/send-email/', views.life_send_email, name='life_send_email'),
    path('business/send-email/', views.business_send_email, name='business_send_email'),
]
