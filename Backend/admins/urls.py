from django.urls import path
from .views import AdminLoginView,AdminDataView,AdminUploadView,ImageListView



urlpatterns = [
    path('admin_login', AdminLoginView.as_view(), name='admin_login'),
    path('admin_panel', AdminDataView.as_view(), name='admin_panel'),
    path('upload/', AdminUploadView.as_view(), name='admin_upload'),
    path('delete/<int:pk>/', AdminUploadView.as_view(), name='delete_upload'), 
    path('image_list/', ImageListView.as_view(), name='image_list'),
]


