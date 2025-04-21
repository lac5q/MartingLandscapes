import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
        <div className="max-w-2xl text-white">
          <span className="text-secondary font-montserrat uppercase tracking-wider font-bold">Professional & Reliable</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold mt-2 leading-tight">Transform Your Outdoor Space</h1>
          <p className="mt-4 text-lg sm:text-xl opacity-90">Martin Gardening Services provides premium landscaping solutions for residential properties in Rancho Bernardo and Poway, California.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services">
              <Button className="bg-primary hover:bg-primary/80 text-white font-montserrat font-medium px-6 py-6 shadow-lg">
                Our Services
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="bg-white hover:bg-gray-100 text-primary border-primary font-montserrat font-medium px-6 py-6 shadow-lg">
                Get a Free Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24 opacity-60"></div>
    </section>
  );
};

export default Hero;
