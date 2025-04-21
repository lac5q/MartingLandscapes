import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold">Ready to transform your landscape?</h3>
            <p className="mt-2 text-white text-opacity-90">Contact us today for a free consultation and estimate.</p>
          </div>
          <div>
            <a href="#contact">
              <Button className="bg-white text-primary hover:bg-gray-100 font-montserrat font-medium px-6 py-3 shadow-lg">
                Get a Free Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
