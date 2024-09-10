export const whatsappNumber = "919179664894";
export const message = "Hi, I would like to know more about Umrah packages.";

// Function to generate the WhatsApp URL
export const getWhatsappUrl = () => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};