from django.contrib.auth import authenticate
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import SliderImage
from .serializers import SliderImageSerializer
from rest_framework.views import APIView
import json
from django.conf import settings
import os

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


class AdminUploadView(APIView):
    permission_classes = [IsAdminUser]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        serializer = SliderImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        images = SliderImage.objects.all()
        serializer = SliderImageSerializer(images, many=True)
        return Response(serializer.data)

    def delete(self, request, pk=None):
        try:
            image = SliderImage.objects.get(pk=pk)
            image.delete()
            return Response({"message": "Image deleted successfully."}, status=status.HTTP_200_OK)
        except SliderImage.DoesNotExist:
            return Response({"error": "Image not found."}, status=status.HTTP_404_NOT_FOUND)


class ImageListView(APIView):
    def get(self, request):
        images = SliderImage.objects.all()
        serializer = SliderImageSerializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AddCarDataView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        try:
            new_car_data = request.data
            json_file_path = os.path.join(
                settings.REACT_PUBLIC_DIR, "carAPI.json")

            if os.path.exists(json_file_path):
                with open(json_file_path, "r") as file:
                    data = json.load(file)
            else:
                data = []

            data.append(new_car_data)

            with open(json_file_path, "w") as file:
                json.dump(data, file, indent=4)

            return Response({"message": "Car data added successfully."}, status=status.HTTP_201_CREATED)

        except json.JSONDecodeError:
            return Response({"error": "Invalid JSON data."}, status=status.HTTP_400_BAD_REQUEST)

        except FileNotFoundError:
            return Response({"error": "JSON file not found."}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
