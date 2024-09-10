const hotels = [
    { id: 1, city: "Makkah", name: "Al Safwah Royale Orchid", distance: "800m", category: "Economy" },
    { id: 2, city: "Makkah", name: "Hilton Suites Makkah", distance: "400m", category: "Deluxe" },
    { id: 3, city: "Makkah", name: "Fairmont Makkah Clock Royal Tower", distance: "50m", category: "5-Star" },
    { id: 4, city: "Madinah", name: "Le Meridien Madinah", distance: "200m", category: "Economy" },
    { id: 5, city: "Madinah", name: "Crowne Plaza Madinah", distance: "150m", category: "Deluxe" },
    { id: 6, city: "Madinah", name: "The Oberoi Madinah", distance: "100m", category: "5-Star" }
];

const packages = [
    {
        id: 1,
        type: "Budget",
        makkahHotelId: 1,
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
        inclusions: [1, 2, 3, 4, 5],
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
        inclusions: [1, 2, 3, 5, 6, 10],
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
        inclusions: [1, 2, 3, 5, 6, 12, 13, 14],
        exclusions: [8, 9, 15]
    }
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