import { useState } from 'react';

// Service area data
const serviceAreas = [
  {
    name: "Rancho Bernardo",
    description: "Luxury landscaping services for high-end residential properties",
    imageUrl: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Luxury landscaped yard
  },
  {
    name: "Poway",
    description: "Premium landscaping and garden maintenance services",
    imageUrl: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Luxury landscaped yard
  }
];

const ServiceMap = () => {
  const [activeArea, setActiveArea] = useState<number | null>(null);

  const toggleArea = (index: number) => {
    setActiveArea(activeArea === index ? null : index);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-montserrat font-semibold mb-4 text-center">Our Service Areas</h3>
      
      {/* Static Map Image */}
      <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden relative mb-6">
        <img 
          src="https://maps.googleapis.com/maps/api/staticmap?center=32.9825,-117.0564&zoom=12&size=800x400&maptype=roadmap&markers=color:green%7Clabel:R%7C33.0125,-117.0747&markers=color:green%7Clabel:P%7C32.9628,-117.0359&key=DEMO_KEY_ONLY&style=feature:administrative%7Celement:geometry%7Cvisibility:simplified&style=feature:poi%7Cvisibility:simplified&style=feature:road%7Celement:labels%7Cvisibility:simplified"
          alt="Map showing service areas in Rancho Bernardo and Poway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-lg">
            <i className="fas fa-map-marker-alt text-primary text-4xl mb-4"></i>
            <h4 className="text-xl font-montserrat font-semibold mb-2">Serving Southern California's Finest Communities</h4>
            <p>We provide honest, reliable landscaping services throughout Rancho Bernardo, Poway, and surrounding areas.</p>
          </div>
        </div>
      </div>
      
      {/* Interactive Area Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceAreas.map((area, index) => (
          <div 
            key={index}
            className={`
              rounded-lg overflow-hidden shadow-md cursor-pointer
              transition-all duration-300
              ${activeArea === index ? 'ring-4 ring-primary' : 'hover:shadow-lg'}
            `}
            onClick={() => toggleArea(index)}
          >
            <div className="relative h-48">
              <img 
                src={area.imageUrl}
                alt={`${area.name} landscaping`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h5 className="text-xl font-montserrat font-bold">{area.name}</h5>
                  {activeArea === index && (
                    <p className="mt-2 text-sm">{area.description}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="flex justify-between items-center">
                <span className="font-montserrat font-medium">{area.name}</span>
                <span className="text-primary">
                  <i className={`fas ${activeArea === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </span>
              </div>
              
              {activeArea === index && (
                <div className="mt-4 text-gray-600">
                  <p>{area.description}</p>
                  <div className="mt-3 text-primary font-medium">
                    <a href="#contact" className="flex items-center">
                      Get a quote <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Not in these areas? Contact us to see if we service your location.
        </p>
      </div>
    </div>
  );
};

export default ServiceMap;