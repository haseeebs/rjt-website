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

const makkahHotels = [
    { category: "Economy", name: "Hotel Al Safwah", distance: "700m", walkingTime: "8-10 mins", hasShuttle: true, transport: "Free Shuttle Bus (5 min journey)" },
    { category: "Standard", name: "Hotel Al Ghufran", distance: "500m", walkingTime: "6-7 mins", hasShuttle: true, transport: "Free Shuttle Bus (5 min journey)" },
    { category: "Premium", name: "Le Meridien", distance: "300m", walkingTime: "4-5 mins", hasShuttle: false },
    { category: "Luxury", name: "Swissotel Al Maqam", distance: "100m", walkingTime: "2-3 mins", hasShuttle: false },
    { category: "Elite 5★", name: "Anjum Hotel", distance: "50m", walkingTime: "1-2 mins", hasShuttle: false },
];

const madinahHotels = [
    { category: "Economy", name: "Al Eiman Royal", distance: "300m", walkingTime: "4-5 mins", hasShuttle: true, transport: "Free Shuttle Bus" },
    { category: "Standard", name: "Al Safwah Royal Orchid", distance: "200m", walkingTime: "3-4 mins", hasShuttle: true, transport: "Free Shuttle Bus" },
    { category: "Premium", name: "Le Meridien Medina", distance: "150m", walkingTime: "2-3 mins", hasShuttle: false },
    { category: "Luxury", name: "Pullman Zamzam", distance: "100m", walkingTime: "1-2 mins", hasShuttle: false },
    { category: "Elite 5★", name: "Anwar Al Madinah Mövenpick", distance: "50m", walkingTime: "1 min", hasShuttle: false },
];

const packagePricing = {
    15: [
        { type: "Quad Sharing", economy: "₹85,000", standard: "₹95,000", premium: "₹1,15,000", luxury: "₹1,35,000", elite: "₹1,65,000" },
        { type: "Triple Sharing", economy: "₹95,000", standard: "₹1,05,000", premium: "₹1,25,000", luxury: "₹1,45,000", elite: "₹1,75,000" },
        { type: "Double Sharing", economy: "₹1,05,000", standard: "₹1,15,000", premium: "₹1,35,000", luxury: "₹1,55,000", elite: "₹1,85,000" },
    ],
    20: [
        { type: "Quad Sharing", economy: "₹95,000", standard: "₹1,05,000", premium: "₹1,25,000", luxury: "₹1,45,000", elite: "₹1,75,000" },
        { type: "Triple Sharing", economy: "₹1,05,000", standard: "₹1,15,000", premium: "₹1,35,000", luxury: "₹1,55,000", elite: "₹1,85,000" },
        { type: "Double Sharing", economy: "₹1,15,000", standard: "₹1,25,000", premium: "₹1,45,000", luxury: "₹1,65,000", elite: "₹1,95,000" },
    ],
    25: [
        { type: "Quad Sharing", economy: "₹1,15,000", standard: "₹1,25,000", premium: "₹1,45,000", luxury: "₹1,65,000", elite: "₹1,95,000" },
        { type: "Triple Sharing", economy: "₹1,25,000", standard: "₹1,35,000", premium: "₹1,55,000", luxury: "₹1,75,000", elite: "₹2,05,000" },
        { type: "Double Sharing", economy: "₹1,35,000", standard: "₹1,45,000", premium: "₹1,65,000", luxury: "₹1,85,000", elite: "₹2,15,000" },
    ],
};

const packageIncludes = [
    "Return Flights with 30kg Baggage",
    "Umrah Visa Processing",
    "Airport Transfers in KSA",
    "Hotel Accommodation",
    "Daily Breakfast & Dinner Buffet",
    "Licensed Umrah Guide Services",
    "Ziyarat Tours in Both Cities",
    "24/7 Ground Support Team",
    "Prayer Mat & Guide Book",
    "Local SIM Card with Data",
    "All Taxes Included",
    "No Hidden Charges"
];

export { packages, makkahHotels, madinahHotels, packagePricing, packageIncludes};