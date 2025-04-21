const Footer = () => {
  return (
    <footer className="bg-earth text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-2">
                <i className="fas fa-leaf text-primary"></i>
              </div>
              <span className="font-montserrat font-bold text-xl">Martin Gardening</span>
            </div>
            <p className="text-white text-opacity-80 mb-6">Professional landscaping services for residential properties in Rancho Bernardo and Poway, California.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Home</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Services</a></li>
              <li><a href="#gallery" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Gallery</a></li>
              <li><a href="#about" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">About Us</a></li>
              <li><a href="#testimonials" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Testimonials</a></li>
              <li><a href="#contact" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Lawn Maintenance</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Garden Design</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Hardscaping</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Irrigation Systems</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Tree & Shrub Care</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-white hover:text-opacity-100 transition">Outdoor Lighting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-white text-opacity-80">123 Landscaping Way<br/>Rancho Bernardo, CA 92128</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-secondary"></i>
                <span className="text-white text-opacity-80">(858) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-secondary"></i>
                <span className="text-white text-opacity-80">info@martingardening.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-secondary"></i>
                <span className="text-white text-opacity-80">Mon-Fri: 7AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-60 text-sm">&copy; {new Date().getFullYear()} Martin Gardening Services. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition text-sm">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
