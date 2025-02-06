from django.http import JsonResponse
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_exempt
import json
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Car
from .serializers import CarSerializer
from .models import Motorcycle
from .serializers import MotorcycleSerializer


def send_email(data, subject, fields):
    try:
        rows = "".join(f"""
        <tr>
            <td>{field}</td>
            <td>{data.get(key, 'None')}</td>
        </tr>
        """ for field, key in fields.items())

        message = f"""
        <html>
        <head>
            <style>
                table {{
                    font-family: Arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                }}
                th, td {{
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }}
                th {{
                    background-color: #f2f2f2;
                }}
                tr:nth-child(even) {{
                    background-color: #f9f9f9;
                }}
            </style>
        </head>
        <body>
            <h2>{subject}</h2>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                {rows}
            </table>
        </body>
        </html>
        """

        from_email = settings.EMAIL_HOST_USER
        recipient_list = [settings.EMAIL_HOST_USER]
        email = EmailMessage(subject, message, from_email, recipient_list)
        email.content_subtype = "html"
        email.send()

        return JsonResponse({"message": "Form submitted successfully and email sent!"}, status=200)
    except Exception as e:
        print(f"Error while sending email: {e}")
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
def car_send_email(request):
    try:
        if request.method == "POST":
            data = json.loads(request.body)
            fields = {
                "Car Details": "carDetails",
                "Model Year": "modelYear",
                "Name": "fullName",
                "Nationality": "nationality",
                "Birth Date": "birthDate",
                "Email": "email",
                "Phone": "phone",
                "Emirate Registered": "emirateRegistered",
                "UAE Licence Held": "uaeLicenceHeld",
            }
            return send_email(data, "New Car Form Submission", fields)
        
        elif request.method == "OPTIONS":
            return JsonResponse({}, status=200)
        
        else:
            return JsonResponse({"error": "Invalid request method."}, status=405)

    except Exception as e:
        import traceback
        traceback.print_exc()
        return JsonResponse({"error": str(e)}, status=500)


class CarSearchView(APIView):
    def get(self, request, format=None):
        query = request.query_params.get('query', '').lower()
        if query:
            cars = Car.objects.filter(
                makename__icontains=query
            ) | Car.objects.filter(
                modelname__icontains=query
            ) | Car.objects.filter(
                trimname__icontains=query
            )
        else:
            cars = Car.objects.all()

        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)


@csrf_exempt
def bike_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fields = {
            "Bike Details": "bikeDetails",
            "Model Year": "modelYear",
            "Name": "fullName",
            "Nationality": "nationality",
            "Birth Date": "birthDate",
            "Email": "email",
            "Phone": "phone",
            "Emirate Registered": "emirateRegistered",
            "UAE Licence Held": "uaeLicenceHeld",
        }
        return send_email(data, "New Bike Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)


class MotorcycleSearchView(APIView):
    def get(self, request, format=None):
        query = request.query_params.get('query', '').lower()

        if query:
            motorcycles = Motorcycle.objects.filter(
                brand_name__icontains=query
            ) | Motorcycle.objects.filter(
                model_name__icontains=query
            ) | Motorcycle.objects.filter(
                category__icontains=query
            )
        else:
            motorcycles = Motorcycle.objects.all()

        serializer = MotorcycleSerializer(motorcycles, many=True)
        return Response(serializer.data)


@csrf_exempt
def life_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fields = {
            "Type of Insurance": "lifeInsuranceType",
            "Children": "children",
            "Marital Status": "maritalStatus",
            "Purpose of Insurance": "insurancePurpose",
            "Tenure of Cover": "tenure",
        }
        return send_email(data, "New Life Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)


@csrf_exempt
def business_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fields = {
            "First Name": "firstName",
            "Last Name": "lastName",
            "Company Name": "companyName",
            "Phone Number": "phoneNumber",
            "Type of Insurance": "insuranceType",
        }
        return send_email(data, "New Business Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)


@csrf_exempt
def pet_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fields = {
            "First Name": "firstName",
            "Last Name": "lastName",
            "E-mail": 'email',
            "Phone Number": "phoneNumber",
            "Type of Pet": "petType",
            "Age of Pet": "petAge",
            "Breed of Pet": "petBreed",
            "Gender of Pet": "petGender",
            "Neutered": "neutered",
            "Mixed Breed": "mixedBreed",
            "Injury History": "injury",
        }
        return send_email(data, "New Pet Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)


@csrf_exempt
def health_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        category = data.get("category")

        if category == "Individual":
            fields = {
                "Selected Category": "category",
                "Types of Resident": "residentType",
                "Emirate of Visa": "emirateVisa",
                "Your nationality": "nationality",
                "Birth Date": "birthDate",
                "Your Gender": "gender",
            }
        elif category == "Family":
            fields = {
                "Selected Category": "category",
                "First Name": "firstName",
                "Last Name": "lastName",
                "Nationality": "nationality",
                "Emirate of Visa": "emirateVisa",
                "Relation to Sponsor": "relationToSponser",
                "Birth Date": "birthDate",
                "Gender": "gender",
            }
        elif category == "Group of Employees":
            fields = {
                "Selected Category": "category",
                "First Name": "firstName",
                "Last Name": "lastName",
                "Company Name": "companyName",
                "No. of Employees": "employeesNumber",
                "Phone Number": "phoneNumber",
                "E-mail": "email",
            }
        else:
            return JsonResponse({"error": "Invalid category."}, status=400)

        return send_email(data, f"New {category} Health Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)


@csrf_exempt
def home_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fields = {
            "I am": "i_Am",
            "Live in": "liveIn",
            "Contents(AED)": "contentsPrice",
            "Personal(AED)": "personalPrice",
            "Building(AED)": "buildingPrice",
            "First Name": "firstName",
            "Last Name": "lastName",
            "E-mail": 'email',
            "Phone Number": "phoneNumber",
            "Address": "address",
        }

        return send_email(data, "New Home Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)


@csrf_exempt
def travel_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fields = {
            "Your journey take you": "journeyType",
            "Travel Destination": "travelDestination",
            "Departing From": "departingFrom",
            "Name as per passport": "fullName",
            "E-mail": "email",
            "Phone Number": "phoneNumber",
            "Nationality": "nationality",
            "Gender": "gender",

        }

        return send_email(data, "New Travel Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)


@csrf_exempt
def contact_send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fields = {
            "Your Full Name": "fullName",
            "E-mail": "email",
            "Insurance Type": "insuranceType",
            "Message for You": "message",

        }

        return send_email(data, "New Contact Form Submission", fields)
    return JsonResponse({"error": "Invalid request method."}, status=400)
