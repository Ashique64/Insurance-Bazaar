from django.urls import path
from .views import AdminLoginView,AdminDataView

urlpatterns = [
    path('admin_login', AdminLoginView.as_view(), name='admin_login'),
    path('admin_panel', AdminDataView.as_view(), name='admin_panel'),
]
