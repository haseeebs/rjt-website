const FeatureGrid = ({ features }) => {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="border-green-100">
            <div className="p-6">
                <div className="flex items-center gap-4">
                    {icon}
                    <div>
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureGrid;  