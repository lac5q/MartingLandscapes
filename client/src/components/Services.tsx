import gardenCareImage from '@/assets/garden-care.png';

const services = [
  {
    title: "Lawn Maintenance",
    description: "Simple, reliable lawn care with no hidden fees. We mow, edge, and clean up, leaving your yard looking its best.",
    icon: "fas fa-cut",
    image: "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Luxury lawn in Southern California
  },
  {
    title: "Garden Care",
    description: "Honest garden maintenance that focuses on what your plants actually need, not unnecessary services.",
    icon: "fas fa-seedling",
    image: gardenCareImage // Custom rose garden image
  },
  {
    title: "Planting & Mulching",
    description: "We'll recommend plants that thrive in our climate and won't try to sell you varieties that need constant replacing.",
    icon: "fas fa-leaf",
    image: "https://images.unsplash.com/photo-1579522655346-2a410905cb65?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Luxury planters in Southern California
  },
  {
    title: "Pruning & Trimming",
    description: "Careful trimming of trees and shrubs when they need it, not on an arbitrary schedule designed to bill you more.",
    icon: "fas fa-tree",
    image: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Well-maintained shrubs in luxury yard
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-800">Simple Services, Fair Prices</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We keep things simple. Here's what we offer, with straightforward pricing and no hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
            >
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-light rounded-lg p-6 max-w-3xl mx-auto shadow-md">
            <h3 className="text-xl font-montserrat font-semibold mb-4">Our Honest Pricing Promise</h3>
            <p className="text-gray-600">
              We believe in complete transparency. You'll always know exactly what you're paying for, and we'll never add surprise charges or upsell you on services you don't need. We provide free, detailed estimates before any work begins.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-primary font-bold text-xl">100%</div>
                  <div className="text-sm text-gray-500">Satisfaction Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-xl">15+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-xl">500+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
