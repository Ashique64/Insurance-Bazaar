from django.contrib.auth import authenticate
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import SliderImage
from .serializers import SliderImageSerializer, AdminLoginSerializer
from rest_framework.views import APIView
import json
from django.conf import settings
import os
from datetime import datetime
import uuid

# Create your views here.

class AdminLoginView(GenericAPIView):
    serializer_class = AdminLoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data["username"]
        password = serializer.validated_data["password"]
        user = authenticate(username=username, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            })
        return Response({"error": "Invalid credentials"}, status=HTTP_400_BAD_REQUEST)


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
            new_car_data["id"] = str(uuid.uuid4())
            new_car_data["added_at"] = datetime.now().isoformat()

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

            return Response({"message": "Car data added successfully.", "car": new_car_data}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RecentlyAddedCarsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        try:
            json_file_path = os.path.join(
                settings.REACT_PUBLIC_DIR, "carAPI.json")

            if os.path.exists(json_file_path):
                with open(json_file_path, "r") as file:
                    data = json.load(file)

                    recent_cars = sorted(
                        [car for car in data if "id" in car],
                        key=lambda x: x.get("added_at", ""),
                        reverse=True
                    )

                return Response(recent_cars, status=status.HTTP_200_OK)
            else:
                return Response([], status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class EditCarDataView(APIView):
    permission_classes = [IsAdminUser]

    def put(self, request, car_id):
        try:
            updated_car_data = request.data
            json_file_path = os.path.join(settings.REACT_PUBLIC_DIR, "carAPI.json")

            if os.path.exists(json_file_path):
                with open(json_file_path, "r") as file:
                    data = json.load(file)

                car_found = False
                for car in data:
                    if car.get("id") == car_id:
                        car.update(updated_car_data)
                        car_found = True
                        break

                if not car_found:
                    return Response({"error": "Car with specified ID not found."}, status=status.HTTP_404_NOT_FOUND)

                with open(json_file_path, "w") as file:
                    json.dump(data, file, indent=4)

                return Response({"message": "Car data updated successfully.", "car": updated_car_data}, status=status.HTTP_200_OK)

            return Response({"error": "Data file not found."}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
