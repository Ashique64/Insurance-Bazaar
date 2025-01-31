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
from sentmail.models import Car

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

            car = Car.objects.create(
                makename=new_car_data.get("Make Name"),
                modelname=new_car_data.get("Model Name"),
                trimname=new_car_data.get("Trim Name"),
            )

            return Response({"message": "Car data added successfully.", "car": {"id": car.id, "Make Name": car.makename, "Model Name": car.modelname, "Trim Name": car.trimname}}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RecentlyAddedCarsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        try:

            recent_cars = Car.objects.all().order_by('-id')

            car_list = [{"id": car.id, "Make Name": car.makename,
                         "Model Name": car.modelname, "Trim Name": car.trimname} for car in recent_cars]

            return Response(car_list[:10], status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class EditCarDataView(APIView):
    permission_classes = [IsAdminUser]

    def put(self, request, car_id):
        try:
            updated_car_data = request.data
            try:   
                car = Car.objects.get(id=car_id)

                car.makename = updated_car_data.get("Make Name", car.makename)
                car.modelname = updated_car_data.get(
                    "Model Name", car.modelname)
                car.trimname = updated_car_data.get("Trim Name", car.trimname)
                car.save()

                return Response({"message": "Car data updated successfully.", "car": {"id": car.id, "Make Name": car.makename, "Model Name": car.modelname, "Trim Name": car.trimname}}, status=status.HTTP_200_OK)

            except Car.DoesNotExist:
                return Response({"error": "Car with specified ID not found."}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
