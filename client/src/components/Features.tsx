const features = [
  {
    icon: "fas fa-check-circle",
    title: "Professional Service",
    description: "Our experienced team delivers exceptional quality with attention to detail."
  },
  {
    icon: "fas fa-leaf",
    title: "Sustainable Practices",
    description: "We use eco-friendly methods and materials to protect the environment."
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Competitive Pricing",
    description: "Quality landscaping services at fair and transparent rates."
  }
];

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-light p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105"
            >
              <div className="inline-block p-4 rounded-full bg-primary bg-opacity-10 mb-4">
                <i className={`${feature.icon} text-primary text-3xl`}></i>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
