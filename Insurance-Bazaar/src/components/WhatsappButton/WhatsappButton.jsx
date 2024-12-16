import React from "react";
import "./WhatsAppButton.scss";

const WhatsAppButton = () => {
    const redirectToWhatsApp = () => {
        const phoneNumber = "918089682533";
        const message = "Hello, I want to know more about your services!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <button className="whatsapp-button" onClick={redirectToWhatsApp}>
            <i className="bx bxl-whatsapp"></i>
        </button>
    );
};

export default WhatsAppButton;
