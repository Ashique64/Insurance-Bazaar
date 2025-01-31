from django.urls import path
from .views import car_send_email, life_send_email, bike_send_email, business_send_email, pet_send_email, health_send_email, home_send_email, travel_send_email, contact_send_email, CarSearchView

urlpatterns = [
    path('car/send-email/', car_send_email, name='car_send_email'),
    path('bike/send-email/', bike_send_email, name='bike_send_email'),
    path('life/send-email/', life_send_email, name='life_send_email'),
    path('business/send-email/', business_send_email, name='business_send_email'),
    path('pet/send-email/', pet_send_email, name='pet_send_email'),
    path('health/send-email/', health_send_email, name='health_send_email'),
    path('home/send-email/', home_send_email, name='home_send_email'),
    path('travel/send-email/', travel_send_email, name='travel_send_email'),
    path('contact/send-email/', contact_send_email, name='contact_send_email'),
    path('car/search/', CarSearchView.as_view(), name='car-search'),
]
