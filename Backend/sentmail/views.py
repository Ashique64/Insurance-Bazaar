from django.http import JsonResponse
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_exempt
import json
from django.conf import settings

@csrf_exempt
def car_send_email(request):
    if request.method == "POST":
        try:            
            data = json.loads(request.body)
            carDetails = data.get("carDetails", "")
            modelYear = data.get("modelYear", "")
            full_name = data.get("fullName", "")
            nationality = data.get("nationality", "")
            birth_date = f"{data.get('day', '')} {data.get('month', '')}, {data.get('year', '')}"
            email = data.get("email", "")
            phone = data.get("phone", "")
            emirateRegistered = data.get("emirateRegistered", "")
            uaeLicenceHeld = data.get("uaeLicenceHeld", "")

            
            subject = "New Car Form Submission"
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
                <h2>New Car Form Submission</h2>
                <table>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Car Details</td>
                        <td>{carDetails}</td>
                    </tr>
                    <tr>
                        <td>Model Year</td>
                        <td>{modelYear}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{full_name}</td>
                    </tr>
                    <tr>
                        <td>Nationality</td>
                        <td>{nationality}</td>
                    </tr>
                    <tr>
                        <td>Birth Date</td>
                        <td>{birth_date}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td>Emirate Registered</td>
                        <td>{emirateRegistered}</td>
                    </tr>
                    <tr>
                        <td>UAE Licence Held</td>
                        <td>{uaeLicenceHeld}</td>
                    </tr>
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
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method."}, status=400)




@csrf_exempt
def bike_send_email(request):
    if request.method == "POST":
        try:            
            data = json.loads(request.body)
            bikeDetails = data.get("bikeDetails", "")
            modelYear = data.get("modelYear", "")
            full_name = data.get("fullName", "")
            nationality = data.get("nationality", "")
            birth_date = f"{data.get('day', '')} {data.get('month', '')}, {data.get('year', '')}"
            email = data.get("email", "")
            phone = data.get("phone", "")
            emirateRegistered = data.get("emirateRegistered", "")
            uaeLicenceHeld = data.get("uaeLicenceHeld", "")

            
            subject = "New Bike Form Submission"
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
                <h2>New Bike Form Submission</h2>
                <table>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>Car Details</td>
                        <td>{bikeDetails}</td>
                    </tr>
                    <tr>
                        <td>Model Year</td>
                        <td>{modelYear}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{full_name}</td>
                    </tr>
                    <tr>
                        <td>Nationality</td>
                        <td>{nationality}</td>
                    </tr>
                    <tr>
                        <td>Birth Date</td>
                        <td>{birth_date}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td>Emirate Registered</td>
                        <td>{emirateRegistered}</td>
                    </tr>
                    <tr>
                        <td>UAE Licence Held</td>
                        <td>{uaeLicenceHeld}</td>
                    </tr>
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
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method."}, status=400)