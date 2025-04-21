const services = [
  {
    title: "Lawn Maintenance",
    description: "Professional mowing, edging, fertilization, and weed control to keep your lawn healthy and beautiful.",
    imageUrl: "https://images.unsplash.com/photo-1558910377-a646f932f3af?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Garden Design",
    description: "Custom garden planning and installation with plants suited to the Southern California climate.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Hardscaping",
    description: "Patios, walkways, retaining walls, and other structural elements to enhance your outdoor living space.",
    imageUrl: "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Irrigation Systems",
    description: "Water-efficient irrigation design, installation, and repair to keep your landscape hydrated.",
    imageUrl: "https://images.unsplash.com/photo-1527800190432-180824caf682?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Tree & Shrub Care",
    description: "Pruning, trimming, and maintenance to ensure the health and beauty of your trees and shrubs.",
    imageUrl: "https://images.unsplash.com/photo-1622289953499-256e29f78c98?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Outdoor Lighting",
    description: "Enhance the beauty and security of your property with custom lighting solutions.",
    imageUrl: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We offer comprehensive landscaping solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-primary font-medium flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
