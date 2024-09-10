const hotels = [
    // Adding details from makkahHotels
    { id: 1, city: "Makkah", name: "Hotel Al Safwah", distance: "700m", category: "Economy", walkingTime: "8-10 mins", hasShuttle: true, transport: "Free Shuttle Bus (5 min journey)" },
    { id: 2, city: "Makkah", name: "Hotel Al Ghufran", distance: "500m", category: "Deluxe", walkingTime: "6-7 mins", hasShuttle: true, transport: "Free Shuttle Bus (5 min journey)" },
    { id: 3, city: "Makkah", name: "Le Meridien", distance: "300m", category: "5-Star", walkingTime: "4-5 mins", hasShuttle: false },
    { id: 4, city: "Makkah", name: "Swissotel Al Maqam", distance: "100m", category: "Luxury", walkingTime: "2-3 mins", hasShuttle: false },
    { id: 5, city: "Makkah", name: "Anjum Hotel", distance: "50m", category: "Elite 5★", walkingTime: "1-2 mins", hasShuttle: false },

    // Adding details from madinahHotels
    { id: 6, city: "Madinah", name: "Al Eiman Royal", distance: "300m", category: "Economy", walkingTime: "4-5 mins", hasShuttle: true, transport: "Free Shuttle Bus (5 min journey)" },
    { id: 7, city: "Madinah", name: "Al Safwah Royal Orchid", distance: "200m", category: "Deluxe", walkingTime: "3-4 mins", hasShuttle: true, transport: "Free Shuttle Bus (5 min journey)" },
    { id: 8, city: "Madinah", name: "Le Meridien Medina", distance: "150m", category: "5-Star", walkingTime: "2-3 mins", hasShuttle: false },
    { id: 9, city: "Madinah", name: "Pullman Zamzam", distance: "100m", category: "Luxury", walkingTime: "1-2 mins", hasShuttle: false },
    { id: 10, city: "Madinah", name: "Anwar Al Madinah Mövenpick", distance: "50m", category: "Elite 5★", walkingTime: "1 min", hasShuttle: false }
];


const packages = [
    {
        id: 1,
        type: "Budget",
        makkahHotelId: 3,
        madinahHotelId: 4,
        durations: {
            15: {
                basePrice: 65000,
                sharedRoomPrices: { quad: 65000, triple: 67500, double: 70000 }
            },
            20: {
                basePrice: 75000,
                sharedRoomPrices: { quad: 75000, triple: 77500, double: 80000 }
            },
            25: {
                basePrice: 85000,
                sharedRoomPrices: { quad: 85000, triple: 87500, double: 90000 }
            }
        },
        extraInclusions: [], // Budget mein kuch extra nahi hai
        exclusions: [6, 7, 8, 9]
    },
    {
        id: 2,
        type: "Deluxe",
        makkahHotelId: 2,
        madinahHotelId: 5,
        durations: {
            15: {
                basePrice: 75000,
                sharedRoomPrices: { quad: 75000, triple: 77500, double: 80000 }
            },
            20: {
                basePrice: 85000,
                sharedRoomPrices: { quad: 85000, triple: 87500, double: 90000 }
            },
            25: {
                basePrice: 95000,
                sharedRoomPrices: { quad: 95000, triple: 97500, double: 100000 }
            }
        },
        extraInclusions: [6, 10], // Deluxe mein Ziyarat Tours aur Luxury Dining
        exclusions: [8, 9, 11]
    },
    {
        id: 3,
        type: "5-Star",
        makkahHotelId: 3,
        madinahHotelId: 6,
        durations: {
            15: {
                basePrice: 115000,
                sharedRoomPrices: { quad: 115000, triple: 117500, double: 120000 }
            },
            20: {
                basePrice: 135000,
                sharedRoomPrices: { quad: 135000, triple: 137500, double: 140000 }
            },
            25: {
                basePrice: 155000,
                sharedRoomPrices: { quad: 155000, triple: 157500, double: 160000 }
            }
        },
        extraInclusions: [6, 12, 13, 14], // 5-Star mein additional Comprehensive Ziyarat, Souvenir aur Personalized Assistance
        exclusions: [8, 9, 15]
    }
];

const commonInclusions = [
    { id: 1, description: "Economy Flights" },
    { id: 2, description: "Visa Processing" },
    { id: 3, description: "Standard Transport" },
    { id: 4, description: "Basic Meals" },
    { id: 5, description: "Indian Guide" }
];

const inclusions = [
    { id: 1, description: "Economy Flights" },
    { id: 2, description: "Visa Processing" },
    { id: 3, description: "Standard Transport" },
    { id: 4, description: "Basic Meals" },
    { id: 5, description: "Indian Guide" },
    { id: 6, description: "Ziyarat Tours" },
    { id: 7, description: "Premium Transport" },
    { id: 8, description: "Zamzam Water" },
    { id: 9, description: "Travel Insurance" },
    { id: 10, description: "Luxury Dining" },
    { id: 11, description: "Personal expenses during stay" },
    { id: 12, description: "Comprehensive Ziyarat Tours" },
    { id: 13, description: "Special Souvenir Package" },
    { id: 14, description: "Personalized Assistance" },
    { id: 15, description: "Optional luxury services" }
];

export { hotels, packages, inclusions };