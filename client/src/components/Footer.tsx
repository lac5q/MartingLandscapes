const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-2">
                <i className="fas fa-leaf text-primary"></i>
              </div>
              <span className="font-montserrat font-bold text-xl">Martin Gardening</span>
            </div>
            <p className="text-white text-opacity-80 mb-6">
              Honest landscaping services at fair prices for Rancho Bernardo and Poway residents.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-primary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-primary transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:text-primary transition">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Home</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Services</a></li>
              <li><a href="#testimonials" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Reviews</a></li>
              <li><a href="#contact" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Contact</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center md:justify-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span className="text-white text-opacity-80">123 Landscaping Way<br/>Rancho Bernardo, CA 92128</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone-alt mr-3"></i>
                <span className="text-white text-opacity-80">(858) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-envelope mr-3"></i>
                <span className="text-white text-opacity-80">info@martingardening.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-70 text-sm">&copy; {new Date().getFullYear()} Martin Gardening Services. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-white text-opacity-70 text-sm">
                Proudly serving San Diego County with honest, reliable service since 2010
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
