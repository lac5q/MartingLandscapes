const testimonials = [
  {
    quote: "Martin is the most honest landscaper I've ever worked with. He told me upfront exactly what I needed and didn't try to upsell me on unnecessary services. Refreshing!",
    author: "Sarah M.",
    location: "Rancho Bernardo",
    initials: "SM",
    rating: 5
  },
  {
    quote: "We've been using Martin Gardening for our lawn care for over 5 years. They're always on time, charge fair prices, and do exactly what they promise. No surprises.",
    author: "James D.",
    location: "Poway",
    initials: "JD",
    rating: 5
  },
  {
    quote: "After being overcharged by other landscapers, Martin was like a breath of fresh air. Honest pricing, quality work, and they even pointed out areas where I could save money.",
    author: "Laura T.",
    location: "Rancho Bernardo",
    initials: "LT",
    rating: 5
  },
  {
    quote: "I appreciate how straightforward Martin is. He gave me a clear estimate, explained exactly what they would do, and then did exactly that. No hidden fees or surprises.",
    author: "Michael R.",
    location: "Poway",
    initials: "MR",
    rating: 5
  },
  {
    quote: "Martin helped me create a beautiful garden within my budget. He was honest about what plants would thrive in my yard and didn't try to sell me expensive options that wouldn't last.",
    author: "Jennifer K.",
    location: "Rancho Bernardo",
    initials: "JK",
    rating: 5
  },
  {
    quote: "Trustworthy, reliable, and fair. Martin told me when certain work wasn't necessary yet, potentially saving me hundreds of dollars. That's the kind of honest business I want to support.",
    author: "David W.",
    location: "Poway",
    initials: "DW",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-800">Our Customers Love Our Honest Approach</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We believe in straightforward, honest landscaping services. Here's what our customers have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="italic text-gray-600 mb-6 font-medium">"{testimonial.quote}"</p>
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
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-primary hover:bg-primary/80 text-white font-montserrat font-medium px-6 py-3 rounded-md shadow-lg">
            Experience Our Honest Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
