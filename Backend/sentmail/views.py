from django.http import JsonResponse
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_exempt
import json
from django.conf import settings

def send_email(data, subject, fields):
    try:
        # Generate the email table
        rows = "".join(f"""
        <tr>
            <td>{field}</td>
            <td>{data.get(key, '')}</td>
        </tr>
        """ for field, key in fields.items())

        # Email content
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

        # Send email
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [settings.EMAIL_HOST_USER]
        email = EmailMessage(subject, message, from_email, recipient_list)
        email.content_subtype = "html"
        email.send()

        return JsonResponse({"message": "Form submitted successfully and email sent!"}, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@csrf_exempt
def car_send_email(request):
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
    return JsonResponse({"error": "Invalid request method."}, status=400)

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
