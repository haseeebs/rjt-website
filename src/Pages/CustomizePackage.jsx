import React, { useState, useEffect } from 'react';

const UmrahBookingForm = () => {
  const [packageType] = useState('customized');
  const [hotelCategory, setHotelCategory] = useState('');
  const [travelMode, setTravelMode] = useState('');
  const [flightType, setFlightType] = useState('');
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  });
  const [roomSharing, setRoomSharing] = useState('');
  const [inclusions, setInclusions] = useState([]);
  const [totalPrice, setTotalPrice] = useState(75000);
  const [formError, setFormError] = useState('');

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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

    setTotalPrice(price);
  };

  useEffect(() => {
    calculatePrice();
  }, [hotelCategory, roomSharing, flightType]);

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
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-lime-500 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Customize Your Umrah Package</h1>
            <p className="text-emerald-50 mt-2">Create your perfect spiritual journey with our customizable packages</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Package Type */}
                <div className="space-y-2">
                  <label htmlFor="packageType" className="block text-sm font-medium text-gray-700">
                    Package Type
                  </label>
                  <input
                    id="packageType"
                    value="Customize Package"
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 py-2 px-3"
                  />
                </div>

                {/* Hotel Selection */}
                <div className="space-y-2">
                  <label htmlFor="hotelCategory" className="block text-sm font-medium text-gray-700">
                    Hotel Category
                  </label>
                  <select
                    id="hotelCategory"
                    value={hotelCategory}
                    onChange={(e) => setHotelCategory(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
                  >
                    <option value="">Select hotel category</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                {/* Travel Mode */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Travel Mode
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="flight"
                        name="travelMode"
                        value="flight"
                        checked={travelMode === 'flight'}
                        onChange={() => setTravelMode('flight')}
                        className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-500"
                      />
                      <label htmlFor="flight" className="ml-2 block text-sm text-gray-900">
                        Flight
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="self"
                        name="travelMode"
                        value="self"
                        checked={travelMode === 'self'}
                        onChange={() => setTravelMode('self')}
                        className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-500"
                      />
                      <label htmlFor="self" className="ml-2 block text-sm text-gray-900">
                        Self-Arranged
                      </label>
                    </div>
                  </div>

                  {travelMode === 'flight' && (
                    <div className="space-y-2 mt-2">
                      <label htmlFor="flightType" className="block text-sm font-medium text-gray-700">
                        Flight Type
                      </label>
                      <select
                        id="flightType"
                        value={flightType}
                        onChange={(e) => setFlightType(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
                      >
                        <option value="">Select flight type</option>
                        <option value="direct">Direct Flight</option>
                        <option value="connecting">Connecting Flight</option>
                      </select>
                    </div>
                  )}

                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Travel Dates
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="date"
                        value={date.from.toISOString().split('T')[0]}
                        onChange={(e) => setDate({
                          ...date,
                          from: new Date(e.target.value)
                        })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
                      />
                      <input
                        type="date"
                        value={date.to.toISOString().split('T')[0]}
                        onChange={(e) => setDate({
                          ...date,
                          to: new Date(e.target.value)
                        })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Room Sharing */}
                <div className="space-y-2">
                  <label htmlFor="roomSharing" className="block text-sm font-medium text-gray-700">
                    Room Sharing
                  </label>
                  <select
                    id="roomSharing"
                    value={roomSharing}
                    onChange={(e) => setRoomSharing(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"
                  >
                    <option value="">Select room sharing</option>
                    <option value="5">5 People (Most Economical)</option>
                    <option value="4">4 People</option>
                    <option value="3">3 People</option>
                    <option value="2">2 People</option>
                    <option value="1">Single Room</option>
                  </select>
                </div>

                {/* Inclusions */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Package Inclusions
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'ziyarat', label: 'Ziyarat in Makkah and Madinah' },
                      { id: 'meals', label: 'Daily Meal Plans (Breakfast & Dinner)' },
                      { id: 'guide', label: 'Professional Guide Services' }
                    ].map((inclusion) => (
                      <div key={inclusion.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={inclusion.id}
                          checked={inclusions.includes(inclusion.id)}
                          onChange={() => handleInclusionChange(inclusion.id)}
                          className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                        />
                        <label
                          htmlFor={inclusion.id}
                          className="ml-2 block text-sm text-gray-900"
                        >
                          {inclusion.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Details */}
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
      </div>
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Package Preview</h2>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
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