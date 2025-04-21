import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-montserrat uppercase tracking-wider font-bold">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-800 mt-2">About Martin Gardening Services</h2>
            <div className="w-24 h-1 bg-primary mt-4 mb-6"></div>
            
            <div className="space-y-4 text-gray-600">
              <p>Martin Gardening Services has been providing exceptional landscaping solutions to the Rancho Bernardo and Poway communities for over 15 years.</p>
              <p>Founded by John Martin, our company began with a simple mission: to create beautiful, sustainable outdoor spaces that families can enjoy for years to come.</p>
              <p>Our team consists of certified horticulturists, experienced landscapers, and design professionals who are passionate about transforming ordinary yards into extraordinary landscapes.</p>
              <p>We pride ourselves on using sustainable practices and locally-sourced materials whenever possible, with a focus on water conservation and native plant species that thrive in the Southern California climate.</p>
            </div>
            
            <div className="mt-8">
              <a href="#contact">
                <Button className="bg-primary hover:bg-primary/80 text-white font-montserrat font-medium shadow-lg">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560693225-b8507d6f3aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-lg shadow-xl hidden lg:flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl font-bold">15+</div>
                <div className="mt-2 font-montserrat">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
