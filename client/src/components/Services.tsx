const services = [
  {
    title: "Lawn Maintenance",
    description: "Simple, reliable lawn care with no hidden fees. We mow, edge, and clean up, leaving your yard looking its best.",
    icon: "fas fa-cut"
  },
  {
    title: "Garden Care",
    description: "Honest garden maintenance that focuses on what your plants actually need, not unnecessary services.",
    icon: "fas fa-seedling"
  },
  {
    title: "Planting & Mulching",
    description: "We'll recommend plants that thrive in our climate and won't try to sell you varieties that need constant replacing.",
    icon: "fas fa-leaf"
  },
  {
    title: "Pruning & Trimming",
    description: "Careful trimming of trees and shrubs when they need it, not on an arbitrary schedule designed to bill you more.",
    icon: "fas fa-tree"
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
              className="bg-gray-50 rounded-lg p-8 flex items-start"
            >
              <div className="mr-6 pt-1">
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary text-2xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-light rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-montserrat font-semibold mb-4">Our Honest Pricing Promise</h3>
            <p className="text-gray-600">
              We believe in complete transparency. You'll always know exactly what you're paying for, and we'll never add surprise charges or upsell you on services you don't need. We provide free, detailed estimates before any work begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
