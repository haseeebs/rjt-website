const packages = [
    {
        type: "Budget",
        price: "65,000",
        makkahHotel: "Al Safwah Royale Orchid",
        makkahDistance: "800m",
        madinahHotel: "Le Meridien Madinah",
        madinahDistance: "200m",
        sharedRoomPrices: {
            quad: "65,000",
            triple: "67,500",
            double: "70,000"
        },
        inclusions: [
            "Economy Flights (India to Saudi Arabia)",
            "Standard Transport (Airport to Hotel)",
            "Basic Meals (Breakfast included)",
            "Visa Processing",
            "Indian Guide"
        ],
        exclusions: [
            "Premium Transport",
            "Zamzam Water",
            "Travel Insurance",
            "Extra Baggage"
        ]
    },
    {
        type: "Deluxe",
        price: "75,000",
        makkahHotel: "Hilton Suites Makkah",
        makkahDistance: "400m",
        madinahHotel: "Crowne Plaza Madinah",
        madinahDistance: "150m",
        sharedRoomPrices: {
            quad: "75,000",
            triple: "77,500",
            double: "80,000"
        },
        inclusions: [
            "Economy Flights",
            "Premium Transport",
            "Buffet Meals (Breakfast and Dinner)",
            "Visa Processing",
            "Experienced Guide",
            "Ziyarat Tours"
        ],
        exclusions: [
            "Travel Insurance",
            "Excess Baggage",
            "Personal expenses during stay"
        ]
    },
    {
        type: "5-Star",
        price: "1,15,000",
        makkahHotel: "Fairmont Makkah Clock Royal Tower",
        makkahDistance: "50m",
        madinahHotel: "The Oberoi Madinah",
        madinahDistance: "100m",
        sharedRoomPrices: {
            quad: "1,15,000",
            triple: "1,17,500",
            double: "1,20,000"
        },
        inclusions: [
            "Premium Flights",
            "VIP Transport",
            "Luxury Dining (All Meals Included)",
            "Visa Processing",
            "Expert Guide",
            "Comprehensive Ziyarat Tours",
            "Travel Insurance",
            "Personalized Assistance",
            "Special Souvenir Package"
        ],
        exclusions: [
            "Personal shopping",
            "Optional luxury services",
            "Additional Ziyarat Tours",
            "Special requests for private transport"
        ]
    }
];

export default packages;