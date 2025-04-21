import { Button } from '@/components/ui/button';

const pricingPackages = [
  {
    tier: "Essential",
    price: "$149",
    popular: false,
    features: [
      "Bi-weekly lawn mowing",
      "Edging and trimming",
      "Seasonal fertilization",
      "Basic weed control"
    ]
  },
  {
    tier: "Premium",
    price: "$249",
    popular: true,
    features: [
      "Weekly lawn mowing",
      "Edging and trimming",
      "Seasonal fertilization",
      "Comprehensive weed control",
      "Seasonal flower planting",
      "Shrub pruning"
    ]
  },
  {
    tier: "Deluxe",
    price: "$399",
    popular: false,
    features: [
      "Weekly lawn mowing",
      "Edging and trimming",
      "Premium fertilization program",
      "Complete weed management",
      "Seasonal flower planting",
      "Tree and shrub care",
      "Irrigation system maintenance"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Packages</h2>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We offer a variety of service packages to meet your landscaping needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`
                bg-light rounded-lg shadow-md overflow-hidden 
                ${pkg.popular 
                  ? 'transform scale-105 border-2 border-primary' 
                  : 'transition-transform hover:scale-105'}
              `}
            >
              <div className={`
                ${pkg.popular 
                  ? 'bg-primary p-6 text-center text-white' 
                  : 'bg-primary bg-opacity-10 p-6 text-center'}
              `}>
                <h3 className={`
                  text-xl font-montserrat font-semibold
                  ${pkg.popular ? '' : 'text-primary'}
                `}>
                  {pkg.tier}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className={pkg.popular ? 'text-white text-opacity-90' : 'text-gray-600'}>/month</span>
                </div>
                {pkg.popular && (
                  <div className="mt-2 bg-accent text-white text-sm py-1 px-3 rounded-full inline-block">
                    Most Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <a href="#contact" className="inline-block w-full">
                    <Button className="w-full bg-primary hover:bg-primary/80 text-white font-montserrat font-medium shadow-lg">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-gray-600">
          <p>Need a custom package? Contact us for a personalized quote tailored to your specific needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
