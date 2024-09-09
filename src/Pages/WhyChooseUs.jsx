import { Calendar, MapPin, Users } from 'lucide-react'

const WhyChooseUs = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Calendar className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Flexible Dates</h3>
                        <p className="text-gray-600">Choose from multiple departure dates</p>
                    </div>
                    <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Prime Locations</h3>
                        <p className="text-gray-600">Hotels near Haram</p>
                    </div>
                    <div className="text-center">
                        <Users className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                        <p className="text-gray-600">Professional religious scholars</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs