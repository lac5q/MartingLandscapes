import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1555411093-97c37a89bf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Backyard Transformation",
    location: "Rancho Bernardo"
  },
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Garden Design",
    location: "Poway"
  },
  {
    image: "https://images.unsplash.com/photo-1534139466531-5349559d6b34?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Front Yard Makeover",
    location: "Rancho Bernardo"
  },
  {
    image: "https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Water Feature Installation",
    location: "Poway"
  },
  {
    image: "https://images.unsplash.com/photo-1524390205420-bacdb8ab5845?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Patio Design",
    location: "Rancho Bernardo"
  },
  {
    image: "https://images.unsplash.com/photo-1611062724867-1328326c7949?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Drought-Tolerant Landscape",
    location: "Poway"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            See some of our recent landscaping projects in Rancho Bernardo and Poway.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-md h-64"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <h3 className="font-montserrat font-semibold text-xl">{item.title}</h3>
                  <p className="mt-2">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/80 text-white font-montserrat font-medium shadow-lg">
              View More Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
