const packages = [
    {
        type: "Budget",
        makkahHotel: "Al Safwah Royale Orchid",
        makkahDistance: "800m",
        madinahHotel: "Le Meridien Madinah",
        madinahDistance: "200m",
        durations: {
            15: {
                basePrice: "65,000",
                sharedRoomPrices: {
                    quad: "65,000",
                    triple: "67,500",
                    double: "70,000"
                }
            },
            20: {
                basePrice: "75,000",
                sharedRoomPrices: {
                    quad: "75,000",
                    triple: "77,500",
                    double: "80,000"
                }
            },
            25: {
                basePrice: "85,000",
                sharedRoomPrices: {
                    quad: "85,000",
                    triple: "87,500",
                    double: "90,000"
                }
            }
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
        makkahHotel: "Hilton Suites Makkah",
        makkahDistance: "400m",
        madinahHotel: "Crowne Plaza Madinah",
        madinahDistance: "150m",
        durations: {
            15: {
                basePrice: "75,000",
                sharedRoomPrices: {
                    quad: "75,000",
                    triple: "77,500",
                    double: "80,000"
                }
            },
            20: {
                basePrice: "85,000",
                sharedRoomPrices: {
                    quad: "85,000",
                    triple: "87,500",
                    double: "90,000"
                }
            },
            25: {
                basePrice: "95,000",
                sharedRoomPrices: {
                    quad: "95,000",
                    triple: "97,500",
                    double: "100,000"
                }
            }
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
        makkahHotel: "Fairmont Makkah Clock Royal Tower",
        makkahDistance: "50m",
        madinahHotel: "The Oberoi Madinah",
        madinahDistance: "100m",
        durations: {
            15: {
                basePrice: "1,15,000",
                sharedRoomPrices: {
                    quad: "1,15,000",
                    triple: "1,17,500",
                    double: "1,20,000"
                }
            },
            20: {
                basePrice: "1,35,000",
                sharedRoomPrices: {
                    quad: "1,35,000",
                    triple: "1,37,500",
                    double: "1,40,000"
                }
            },
            25: {
                basePrice: "1,55,000",
                sharedRoomPrices: {
                    quad: "1,55,000",
                    triple: "1,57,500",
                    double: "1,60,000"
                }
            }
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