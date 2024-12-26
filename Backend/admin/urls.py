from django.urls import path
from . import views

urlpatterns = [
    path('/admin_login', views.AdminLoginView, name='admin_login'),
    # path('api/admin-data/', AdminDataView.as_view(), name='admin-data'),
]
