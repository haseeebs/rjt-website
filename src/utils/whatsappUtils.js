export const getWhatsappUrl = () => {
    const phone = "919179664894"; // Replace with your WhatsApp number
    const message = "Hi, I would like to know more about Umrah packages."; // Default message
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
