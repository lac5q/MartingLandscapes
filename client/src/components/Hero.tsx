import { Button } from '@/components/ui/button';
import luxuryLandscapeImage from '@/assets/luxury-landscape.png';

const Hero = () => {
  return (
    <section id="home" className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: `url(${luxuryLandscapeImage})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center text-white">
          <span className="text-secondary font-montserrat uppercase tracking-wider font-bold">Honest & Reliable</span>
          <h1 className="text-4xl sm:text-5xl font-montserrat font-bold mt-2 leading-tight">San Diego's Finest Landscaping</h1>
          <p className="mt-4 text-lg sm:text-xl opacity-90">Martin Gardening provides straightforward landscaping services at fair prices in Rancho Bernardo and Poway, California.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#testimonials">
              <Button className="bg-primary hover:bg-primary/80 text-white font-montserrat font-medium px-6 py-3 shadow-lg">
                Read Our Reviews
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="bg-white hover:bg-gray-100 text-primary border-primary font-montserrat font-medium px-6 py-3 shadow-lg">
                Get a Free Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
