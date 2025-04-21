const testimonials = [
  {
    quote: "Martin Gardening completely transformed our backyard. Their team was professional, punctual, and went above and beyond our expectations. We couldn't be happier with the results!",
    author: "Sarah M.",
    location: "Rancho Bernardo",
    initials: "SM",
    rating: 5
  },
  {
    quote: "We've been using Martin Gardening for our lawn maintenance for over 5 years. They are consistently reliable and do outstanding work. Our yard has never looked better!",
    author: "James D.",
    location: "Poway",
    initials: "JD",
    rating: 5
  },
  {
    quote: "The team at Martin Gardening designed and installed a beautiful drought-tolerant landscape for our front yard. They were knowledgeable about native plants and created a stunning, low-maintenance yard.",
    author: "Laura T.",
    location: "Rancho Bernardo",
    initials: "LT",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex text-accent mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-montserrat font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
