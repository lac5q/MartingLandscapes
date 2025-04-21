import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <CallToAction />
      <Gallery />
      <About />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
