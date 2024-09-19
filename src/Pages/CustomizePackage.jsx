import { CheckCircleIcon, CircleCheck, Group, Lock, User, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import SelectMenu from '../components/SelectMenu';

const UmrahBookingForm = () => {
  const [packageType] = useState('customized');
  const [hotelCategory, setHotelCategory] = useState('');
  const [travelMode, setTravelMode] = useState('');
  const [flightType, setFlightType] = useState('');
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  });
  const [numberOfDays, setNumberOfDays] = useState(7);

  // Calculate the number of days whenever the dates change
  useEffect(() => {
    const calculateDays = () => {
      const fromDate = new Date(date.from);
      const toDate = new Date(date.to);
      const timeDifference = toDate - fromDate;
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setNumberOfDays(days);
    };

    calculateDays();
  }, [date]);

  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);
  const [roomSharing, setRoomSharing] = useState('');
  const [inclusions, setInclusions] = useState([]);
  const [totalPrice, setTotalPrice] = useState(75000);
  const [formError, setFormError] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // New state for group size and custom input
  const [groupSize, setGroupSize] = useState('');
  const [customGroupSize, setCustomGroupSize] = useState('');


  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Basic Info", "Travel & Stay", "Contact Details"];

  const [contactDetails, setContactDetails] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    specialRequests: ''
  });

  const [contactErrors, setContactErrors] = useState({});

  const validateContactDetails = () => {
    const errors = {};

    // Full Name validation
    if (!contactDetails.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (contactDetails.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters long';
    }

    // Phone Number validation
    const phoneRegex = /^[0-9]{10}$/; // Assumes 10-digit phone number
    if (!contactDetails.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(contactDetails.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactDetails.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(contactDetails.email)) {
      errors.email = 'Please enter a valid email address';
    }

    return errors;
  };

  // Updated calculatePrice function to include group discounts
  const calculatePrice = () => {
    let price = 75000; // Base price

    // Hotel category adjustments
    if (hotelCategory === 'premium') price += 25000;
    if (hotelCategory === 'luxury') price += 50000;

    // Room sharing adjustments
    if (roomSharing === '1') price += 30000;
    if (roomSharing === '2') price += 15000;

    // Flight type adjustments
    if (flightType === 'direct') price += 20000;

    // Group size discounts
    const finalGroupSize = customGroupSize ? parseInt(customGroupSize) :
      (groupSize === 'more-than-15' ? 16 :
        groupSize === 'more-than-10' ? 11 :
          groupSize === 'family' ? 5 :
            groupSize ? parseInt(groupSize) : 1);

    if (finalGroupSize >= 10) {
      // 10% discount for groups of 10 or more
      price = price * 0.9;
    }

    if (finalGroupSize >= 15) {
      // Additional 5% discount for groups of 15 or more
      // Also, one person gets a free package
      price = price * 0.85 - 75000;
    }

    setTotalPrice(Math.round(price));
  };

  useEffect(() => {
    calculatePrice();
  }, [hotelCategory, roomSharing, flightType, groupSize, customGroupSize]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate package details
    if (!hotelCategory || !travelMode || !date || !roomSharing) {
      setFormError('Please fill in all required package details');
      return;
    }

    // Validate contact details
    const contactValidationErrors = validateContactDetails();
    if (Object.keys(contactValidationErrors).length > 0) {
      setContactErrors(contactValidationErrors);
      return;
    }

    // Prepare complete form data
    const formData = {
      packageDetails: {
        packageType,
        hotelCategory,
        travelMode,
        flightType,
        travelDates: {
          from: date.from,
          to: date.to
        },
        roomSharing,
        inclusions,
        totalPrice
      },
      contactDetails: {
        fullName: contactDetails.fullName.trim(),
        phoneNumber: contactDetails.phoneNumber.trim(),
        email: contactDetails.email.trim(),
        specialRequests: contactDetails.specialRequests.trim()
      }
    };

    // Log or send form data
    console.log('Complete Umrah Package Submission:', formData);

    // Reset errors
    setFormError('');
    setContactErrors({});
  };


  const handleInclusionChange = (inclusion) => {
    setInclusions(prev =>
      prev.includes(inclusion)
        ? prev.filter(i => i !== inclusion)
        : [...prev, inclusion]
    );
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl p-6 bg-lime-50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-3xl border border-lime-200 bg-white shadow-lg">
            <div className="bg-lime-500 px-6 py-8 rounded-t-3xl">
              <h1 className="text-3xl font-bold text-white">Customize Your Umrah Package</h1>
              <p className="text-emerald-50 mt-2">Create your perfect spiritual journey with our customizable packages</p>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-lime-100">
              <nav className="flex">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    type="button"
                    className={`w-full px-6 py-4 text-sm font-medium ${activeTab === index
                      ? "border-b-2 border-lime-500 text-lime-600"
                      : "text-gray-500 hover:text-gray-700"
                      }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4">
              {activeTab === 0 && (
                <div className="space-y-6">
                  {/* Package Type */}
                  <div className="space-y-2">
                    <label htmlFor="packageType" className="block text-sm font-semibold text-lime-700">
                      Package Type
                    </label>
                    <div className="relative">
                      <input
                        id="packageType"
                        value="Customize Package"
                        disabled
                        className="mt-1 block w-full rounded-xl border-2 border-lime-200 bg-lime-50/50 py-3 px-4 text-lime-800 cursor-not-allowed shadow-sm"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Lock color='#84cc16' />
                      </div>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-lime-700">
                      Travel Dates
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="date"
                          value={date.from.toISOString().split('T')[0]}
                          onChange={(e) => setDate({ ...date, from: new Date(e.target.value) })}
                          className="w-full rounded-xl border-2 border-lime-200 py-3 px-4 text-lime-800 shadow-sm hover:border-lime-300 focus:border-lime-500 focus:ring focus:ring-lime-200 focus:ring-opacity-50 cursor-pointer [&::-webkit-calendar-picker-indicator]{opacity:0}"
                          ref={fromDateRef}
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="date"
                          value={date.to.toISOString().split('T')[0]}
                          onChange={(e) => setDate({ ...date, to: new Date(e.target.value) })}
                          className="w-full rounded-xl border-2 border-lime-200 py-3 px-4 text-lime-800 shadow-sm hover:border-lime-300 focus:border-lime-500 focus:ring focus:ring-lime-200 focus:ring-opacity-50 cursor-pointer [&::-webkit-calendar-picker-indicator]{opacity:0}"
                          ref={toDateRef}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Group Size Section */}
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-lime-700">
                      Number of Travelers
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "2", label: "2 People", icon: User },
                        { value: "family", label: "Family Group", icon: Users },
                        { value: "more-than-10", label: "10+ People", icon: Group },
                        { value: "more-than-15", label: "15+ People", icon: Group }
                      ].map((option) => (
                        <div
                          key={option.value}
                          onClick={() => {
                            setGroupSize(option.value);
                            setCustomGroupSize("");
                          }}
                          className={`relative rounded-xl p-4 cursor-pointer transition-all duration-300 transform ${groupSize === option.value
                            ? "bg-lime-500 text-white shadow-lg"
                            : "bg-white border-2 border-lime-200 text-lime-800 hover:border-lime-300"
                            }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span
                              className={`text-xl ${groupSize === option.value ? "text-white" : "text-lime-500"
                                }`}
                            >
                              <option.icon />
                            </span>
                            <span className="font-medium">{option.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Custom Group Size Input */}
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Or enter custom group size"
                        value={customGroupSize}
                        onChange={(e) => {
                          setCustomGroupSize(e.target.value);
                          setGroupSize('');
                        }}
                        min="1"
                        className="w-full rounded-xl border-2 border-lime-200 py-3 px-4 text-lime-800 shadow-sm hover:border-lime-300 focus:border-lime-500 focus:ringlime-200 focus:ring-opacity-50"
                      />
                    </div>

                    {/* Group Discount Information */}
                    {(groupSize === 'more-than-10' || groupSize === 'more-than-15' ||
                      (customGroupSize && parseInt(customGroupSize) >= 10)) && (
                        <div className="bg-gradient-to-r from-lime-500 to-lime-400 rounded-xl p-4 shadow-lg">
                          <p className="text-white font-medium flex items-center">
                            <span className="mr-2">🎉</span>
                            {groupSize === 'more-than-15' || (customGroupSize && parseInt(customGroupSize) >= 15)
                              ? 'Amazing! 15% off + One Free Package!'
                              : 'Great! 10% off for your group'}
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-4">
                  {/* Hotel Category */}
                  <SelectMenu
                    id="hotelCategory"
                    label="Hotel Category"
                    value={hotelCategory}
                    onChange={setHotelCategory}
                    options={[
                      { value: "standard", label: "Standard" },
                      { value: "premium", label: "Premium" },
                      { value: "luxury", label: "Luxury" },
                    ]}
                    helperText="Choose your preferred accommodation level"
                  />

                  {/* Room Sharing */}
                  <SelectMenu
                    id="roomSharing"
                    label="Room Sharing Preference"
                    value={roomSharing}
                    onChange={setRoomSharing}
                    options={[
                      { value: "5", label: "5 People (Most Economical)" },
                      { value: "4", label: "4 People" },
                      { value: "3", label: "3 People" },
                      { value: "2", label: "2 People" },
                      { value: "1", label: "Single Room" },
                    ]}
                    helperText="Select the number of people sharing the room"
                  />
                  {/* Travel Mode */}
                  <div className="space-y-4">
                    <label className="text-sm font-semibold leading-6 text-gray-900">
                      Select Travel Mode
                    </label>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div
                        className={`relative flex cursor-pointer rounded-lg border ${travelMode === 'flight'
                          ? 'border-lime-600 ring-2 ring-lime-600'
                          : 'border-gray-300'
                          } bg-white p-4 shadow-sm focus:outline-none`}
                        onClick={() => setTravelMode('flight')}
                      >
                        <input
                          type="radio"
                          id="flight"
                          name="travelMode"
                          value="flight"
                          checked={travelMode === 'flight'}
                          onChange={() => setTravelMode('flight')}
                          className="sr-only"
                        />
                        <span className="flex flex-1">
                          <span className="flex flex-col">
                            <span className="block text-sm font-medium text-gray-900">Flight</span>
                            <span className="mt-1 flex items-center text-sm text-gray-500">
                              We'll arrange your flights
                            </span>
                          </span>
                        </span>
                        {travelMode === 'flight' && (
                          <CircleCheck color='#65a30d' />
                        )}
                      </div>

                      <div
                        className={`relative flex cursor-pointer rounded-lg border ${travelMode === 'self'
                          ? 'border-lime-600 ring-2 ring-lime-600'
                          : 'border-gray-300'
                          } bg-white p-4 shadow-sm focus:outline-none`}
                        onClick={() => setTravelMode('self')}
                      >
                        <input
                          type="radio"
                          id="self"
                          name="travelMode"
                          value="self"
                          checked={travelMode === 'self'}
                          onChange={() => setTravelMode('self')}
                          className="sr-only"
                        />
                        <span className="flex flex-1">
                          <span className="flex flex-col">
                            <span className="block text-sm font-medium text-gray-900">Self-Arranged</span>
                            <span className="mt-1 flex items-center text-sm text-gray-500">
                              Arrange your own transportation
                            </span>
                          </span>
                        </span>
                        {travelMode === 'self' && (
                          <CircleCheck color='#65a30d' />
                        )}
                      </div>
                    </div>

                    {/* Flight Type Select (only shown when flight is selected) */}
                    {travelMode === 'flight' && (
                      <SelectMenu
                        id="flightType"
                        label="Flight Type"
                        value={flightType}
                        onChange={setFlightType}
                        options={[
                          { value: "direct", label: "Direct Flight" },
                          { value: "connecting", label: "Connecting Flight" },
                        ]}
                        helperText="Choose your preferred flight routing"
                      />
                    )}
                  </div>

                  {/* Inclusions */}
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">Package Inclusions</legend>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                      {[
                        { id: 'ziyarat', label: 'Ziyarat in Makkah and Madinah', description: 'Visit all historical sites with expert guidance' },
                        { id: 'meals', label: 'Daily Meal Plans', description: 'Breakfast & Dinner included throughout your stay' },
                        { id: 'guide', label: 'Professional Guide Services', description: '24/7 assistance from experienced guides' }
                      ].map((inclusion) => (
                        <div
                          key={inclusion.id}
                          className="relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none hover:border-lime-600"
                        >
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-center justify-between">
                              <div>
                                <input
                                  type="checkbox"
                                  id={inclusion.id}
                                  checked={inclusions.includes(inclusion.id)}
                                  onChange={() => handleInclusionChange(inclusion.id)}
                                  className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                                />
                                <label htmlFor={inclusion.id} className="ml-3 block text-sm font-medium text-gray-900">
                                  {inclusion.label}
                                </label>
                              </div>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{inclusion.description}</p>
                          </div>
                          {inclusions.includes(inclusion.id) && (
                            <CheckCircleIcon className="h-5 w-5 text-lime-600" aria-hidden="true" />
                          )}
                        </div>
                      ))}
                    </div>
                  </fieldset>

                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Information
                    </label>
                    <div className="space-y-2">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={contactDetails.fullName}
                          onChange={(e) => setContactDetails(prev => ({
                            ...prev,
                            fullName: e.target.value
                          }))}
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 ${contactErrors.fullName ? 'border-red-500' : ''
                            }`}
                        />
                        {contactErrors.fullName && (
                          <p className="text-red-500 text-xs mt-1">
                            {contactErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={contactDetails.phoneNumber}
                          onChange={(e) => setContactDetails(prev => ({
                            ...prev,
                            phoneNumber: e.target.value
                          }))}
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 ${contactErrors.phoneNumber ? 'border-red-500' : ''
                            }`}
                        />
                        {contactErrors.phoneNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {contactErrors.phoneNumber}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={contactDetails.email}
                          onChange={(e) => setContactDetails(prev => ({
                            ...prev,
                            email: e.target.value
                          }))}
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 ${contactErrors.email ? 'border-red-500' : ''
                            }`}
                        />
                        {contactErrors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {contactErrors.email}
                          </p>
                        )}
                      </div>

                      <textarea
                        placeholder="Special Requests (Optional)"
                        value={contactDetails.specialRequests}
                        onChange={(e) => setContactDetails(prev => ({
                          ...prev,
                          specialRequests: e.target.value
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="border-t border-lime-100 p-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-lime-600 hover:bg-lime-50'
                    }`}
                  disabled={activeTab === 0}
                >
                  Previous
                </button>
                {activeTab === tabs.length - 1 ? (
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-lime-500 rounded-md hover:bg-lime-600"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveTab((prev) => Math.min(tabs.length - 1, prev + 1))}
                    className="px-4 py-2 text-sm font-medium text-lime-600 hover:bg-lime-50 rounded-md"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Error Message */}
          {formError && (
            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              {formError}
            </div>
          )}

          {/* Package Summary */}
          <div className="mt-8 space-y-6">
            <div className="bg-lime-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Package Summary</h3>
              <p>Number of Days: {numberOfDays}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-emerald-100 text-sm">Travel Dates</p>
                  <p className="font-semibold">
                    {formatDate(date.from)} - {formatDate(date.to)}
                  </p>
                </div>
                <div>
                  <p className="text-emerald-100 text-sm">Hotel Category</p>
                  <p className="font-semibold capitalize">{hotelCategory || 'Not selected'}</p>
                </div>
                <div>
                  <p className="text-emerald-100 text-sm">Room Sharing</p>
                  <p className="font-semibold">
                    {roomSharing ? `${roomSharing} People` : 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-emerald-100 text-sm">Travel Mode</p>
                  <p className="font-semibold capitalize">
                    {travelMode === 'flight'
                      ? `Flight (${flightType || 'Not selected'})`
                      : travelMode || 'Not selected'}
                  </p>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-lime-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Price Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-lime-400">
                  <span className="text-gray-600">Base Package</span>
                  <span className="font-semibold">₹75,000</span>
                </div>
                {hotelCategory === 'premium' && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Premium Hotel Upgrade</span>
                    <span className="font-semibold text-emerald-600">+₹25,000</span>
                  </div>
                )}
                {hotelCategory === 'luxury' && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Luxury Hotel Upgrade</span>
                    <span className="font-semibold text-emerald-600">+₹50,000</span>
                  </div>
                )}
                {flightType === 'direct' && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Direct Flight Premium</span>
                    <span className="font-semibold text-emerald-600">+₹20,000</span>
                  </div>
                )}
                {roomSharing === '1' && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Single Room Supplement</span>
                    <span className="font-semibold text-emerald-600">+₹30,000</span>
                  </div>
                )}
                {roomSharing === '2' && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Double Room Supplement</span>
                    <span className="font-semibold text-emerald-600">+₹15,000</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-t-2 border-dashed border-lime-500">
                  <span className="font-bold text-lg">Total Package Cost</span>
                  <span className="font-bold text-lg text-emerald-600">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="w-full flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="flex-1 py-2 px-4 border border-lime-500 text-lime-500 rounded-md hover:bg-lime-50 transition duration-300"
              >
                Preview Package
              </button>
              <button
                type="reset"
                className="flex-1 py-2 px-4 border border-red-400 text-red-400 rounded-md hover:bg-red-50 transition duration-300"
                onClick={() => {
                  // Reset all states
                  setHotelCategory('');
                  setTravelMode('');
                  setFlightType('');
                  setDate({
                    from: new Date(),
                    to: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
                  });
                  setRoomSharing('');
                  setInclusions([]);
                  setTotalPrice(75000);
                  setFormError('');
                }}
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="flex-1 py-2 px-4 bg-lime-500 text-white rounded-md hover:bg-lime-600 transition duration-300"
              >
                Proceed to Book
              </button>
            </div>
          </div>
        </form>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Package Preview</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Package Details</h3>
                <p><strong>Hotel Category:</strong> {hotelCategory || 'Not Selected'}</p>
                <p><strong>Travel Mode:</strong> {travelMode || 'Not Selected'}</p>
                {travelMode === 'flight' && (
                  <p><strong>Flight Type:</strong> {flightType || 'Not Selected'}</p>
                )}
                <p>
                  <strong>Travel Dates:</strong> {' '}
                  {date.from && date.to
                    ? `${formatDate(date.from)} - ${formatDate(date.to)}`
                    : 'Not Selected'}
                </p>
                <p><strong>Room Sharing:</strong> {roomSharing ? `${roomSharing} People` : 'Not Selected'}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Inclusions</h3>
                {inclusions.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {inclusions.map((inclusion) => (
                      <li key={inclusion}>
                        {inclusion === 'ziyarat' && 'Ziyarat in Makkah and Madinah'}
                        {inclusion === 'meals' && 'Daily Meal Plans'}
                        {inclusion === 'guide' && 'Professional Guide Services'}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No inclusions selected</p>
                )}
              </div>

              <div className="bg-lime-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Total Price</h3>
                <p className="text-2xl font-bold text-emerald-600">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </p>
              </div>

              <button
                onClick={() => setIsPreviewOpen(false)}
                className="w-full py-2 px-4 bg-lime-500 text-white rounded-md hover:bg-lime-600 transition duration-300"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UmrahBookingForm;