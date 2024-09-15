import { useState } from "react";

const HotelForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Basic Info", "Location & Transport", "Images"];

    const [formData, setFormData] = useState({
        city: "Makkah",
        name: "",
        category: "Economy",
        distance: "",
        walkingTime: "",
        hasShuttle: false,
        transport: "",
        images: [""]
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Hotel name is required";
        if (!formData.distance) newErrors.distance = "Distance is required";
        if (!formData.walkingTime) newErrors.walkingTime = "Walking time is required";
        if (!formData.transport) newErrors.transport = "Transport details are required";
        if (formData.images.length === 0) newErrors.images = "At least one image is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImageChange = (index, value) => {
        const newImages = [...formData.images];
        newImages[index] = value;
        setFormData((prev) => ({
            ...prev,
            images: newImages,
        }));
    };

    const handleAddImage = () => {
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ""],
        }));
    };

    const handleDeleteImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Data:", formData);
            // Call your API service here
            alert("Hotel added successfully!");
        } else {
            alert("Please fill in all required fields");
        }
    };

    return (
        <div className="mx-auto max-w-7xl p-6 bg-lime-50">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="rounded-3xl border border-lime-200 bg-white shadow-lg">
                    <div className="border-b border-lime-100 p-4">
                        <h2 className="text-2xl text-lime-800">Add New Hotel</h2>
                        <p className="text-lime-600">
                            Add a new hotel by filling in the details below
                        </p>
                    </div>

                    <div className="p-4 space-y-6">
                        {/* Tabs */}
                        <div className="grid w-full grid-cols-3 bg-lime-50 p-1 rounded-xl">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    type="button"
                                    className={`rounded-lg py-2 ${activeTab === index ? "bg-lime-500 text-white" : ""
                                        }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        {activeTab === 0 && (
                            <div className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="block text-lime-700">City *</label>
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="rounded-xl p-4 border border-lime-200 focus:ring-lime-500 w-full cursor-pointer"
                                        >
                                            <option value="Makkah">Makkah</option>
                                            <option value="Madinah">Madinah</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-lime-700">Category *</label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="rounded-xl p-4 border border-lime-200 focus:ring-lime-500 w-full cursor-pointer"
                                        >
                                            <option value="Economy">Economy</option>
                                            <option value="Deluxe">Deluxe</option>
                                            <option value="5 Star">5 Star</option>
                                            <option value="Luxury">Luxury</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-lime-700">Hotel Name *</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter hotel name"
                                        className={`rounded-xl p-4 border ${errors.name ? "border-red-500" : "border-lime-200"
                                            } focus:ring-lime-500 w-full`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 1 && (
                            <div className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="block text-lime-700">Distance from Haram *</label>
                                        <input
                                            name="distance"
                                            value={formData.distance}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 700m"
                                            className={`rounded-xl p-4 border ${errors.distance ? "border-red-500" : "border-lime-200"
                                                } focus:ring-lime-500 w-full`}
                                        />
                                        {errors.distance && (
                                            <p className="text-red-500 text-sm mt-1">{errors.distance}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-lime-700">Walking Time *</label>
                                        <input
                                            name="walkingTime"
                                            value={formData.walkingTime}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 8-10 mins"
                                            className={`rounded-xl p-4 border ${errors.walkingTime ? "border-red-500" : "border-lime-200"
                                                } focus:ring-lime-500 w-full`}
                                        />
                                        {errors.walkingTime && (
                                            <p className="text-red-500 text-sm mt-1">{errors.walkingTime}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="hasShuttle"
                                            checked={formData.hasShuttle}
                                            onChange={handleInputChange}
                                            className="rounded border-lime-300 text-lime-500 focus:ring-lime-500 mr-2"
                                        />
                                        <label className="text-lime-700">Has Shuttle Service</label>
                                    </div>

                                    <div>
                                        <label className="block text-lime-700">Transport Details *</label>
                                        <input
                                            name="transport"
                                            value={formData.transport}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Free Shuttle Bus (5 min journey)"
                                            className={`rounded-xl p-4 border ${errors.transport ? "border-red-500" : "border-lime-200"
                                                } focus:ring-lime-500 w-full`}
                                        />
                                        {errors.transport && (
                                            <p className="text-red-500 text-sm mt-1">{errors.transport}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 2 && (
                            <div className="space-y-4">
                                <h3 className="text-lg text-lime-800">Hotel Images</h3>
                                {formData.images.map((image, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            value={image}
                                            onChange={(e) => handleImageChange(index, e.target.value)}
                                            placeholder="Enter image URL"
                                            className="rounded-xl p-4 border border-lime-200 focus:ring-lime-500 flex-1"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteImage(index)}
                                            className="text-red-500 hover:bg-lime-100 px-4 rounded-xl"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddImage}
                                    className="w-full rounded-xl border border-lime-400 text-lime-700 hover:bg-lime-50 py-2"
                                >
                                    Add Image
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Navigation and Submit Buttons */}
                    <div className="border-t border-lime-100 p-4 flex justify-between">
                        <button
                            type="button"
                            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                            className={`px-4 py-2 rounded-xl ${activeTab === 0
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-lime-100 text-lime-700 hover:bg-lime-200"
                                }`}
                            disabled={activeTab === 0}
                        >
                            Previous
                        </button>

                        <div className="flex gap-2">
                            {activeTab < tabs.length - 1 && (
                                <button
                                    type="button"
                                    onClick={() => setActiveTab(activeTab + 1)}
                                    className="px-4 py-2 rounded-xl bg-lime-500 text-white hover:bg-lime-600"
                                >
                                    Next
                                </button>
                            )}
                            {activeTab === tabs.length - 1 && (
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-xl bg-lime-500 text-white hover:bg-lime-600"
                                >
                                    Add Hotel
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HotelForm;