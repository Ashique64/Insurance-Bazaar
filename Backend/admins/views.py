from django.contrib.auth import authenticate
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
import os
from django.conf import settings
from rest_framework.views import APIView
from urllib.parse import unquote
from rest_framework import status

# Create your views here.


class AdminLoginView(GenericAPIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            })
        return Response({"error": "Invalid credentials"}, status=400)


class AdminDataView(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        if request.user.is_superuser:
            return Response({"message": f"Welcome, Admin {request.user.username}!"})
        return Response({"error": "Unauthorized"}, status=403)
    

class AdminUploadView(GenericAPIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]  # To handle file uploads

    def post(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({"error": "Unauthorized"}, status=403)

        file = request.FILES.get("image")
        if not file:
            return Response({"error": "No file uploaded"}, status=400)

        upload_dir = os.path.join(settings.MEDIA_ROOT, "slider_images")
        os.makedirs(upload_dir, exist_ok=True) 

        file_path = os.path.join(upload_dir, file.name)
        with open(file_path, "wb") as f:
            for chunk in file.chunks():
                f.write(chunk)

        return Response({"message": "File uploaded successfully", "file_path": file_path})

    def get(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({"error": "Unauthorized"}, status=403)

        upload_dir = os.path.join(settings.MEDIA_ROOT, "slider_images")
        if not os.path.exists(upload_dir):
            return Response({"images": []})

        files = os.listdir(upload_dir)
        file_urls = [f"/media/slider_images/{file}" for file in files]
        return Response({"images": file_urls})
    
