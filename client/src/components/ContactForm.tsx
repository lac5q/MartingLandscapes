import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  // Define form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  
  // API mutation for form submission
  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent. We'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  // Form submission handler
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-800">Get Your Free Quote</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We'll give you an honest, no-obligation quote for your landscaping needs.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Your Name*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Smith" 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Email Address*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            type="email" 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Phone Number*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(123) 456-7890" 
                            type="tel" 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Tell us about your yard</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What services are you looking for?" 
                            {...field} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/80 text-white font-montserrat font-medium shadow-lg py-6"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Get Your Free Quote"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="bg-primary text-white p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Our Address</h4>
                    <p className="mt-1 opacity-90">123 Landscaping Way<br/>Rancho Bernardo, CA 92128</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Phone</h4>
                    <p className="mt-1 opacity-90">(858) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Email</h4>
                    <p className="mt-1 opacity-90">info@martingardening.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <i className="fas fa-clock"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Business Hours</h4>
                    <p className="mt-1 opacity-90">Monday - Friday: 7:00 AM - 5:00 PM<br/>Saturday: 8:00 AM - 2:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="font-medium">Serving Rancho Bernardo, Poway and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>We typically respond to quote requests within 24 hours.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
