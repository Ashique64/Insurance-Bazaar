from django.contrib.auth import authenticate
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import SliderImage
from .serializers import SliderImageSerializer
from rest_framework.views import APIView

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