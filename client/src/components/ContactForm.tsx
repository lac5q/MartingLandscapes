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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  service: z.string().optional(),
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
      service: '',
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
        description: data.message,
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
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Ready to transform your outdoor space? Get in touch for a free consultation and estimate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="lawn-maintenance">Lawn Maintenance</SelectItem>
                            <SelectItem value="garden-design">Garden Design</SelectItem>
                            <SelectItem value="hardscaping">Hardscaping</SelectItem>
                            <SelectItem value="irrigation">Irrigation Systems</SelectItem>
                            <SelectItem value="tree-care">Tree & Shrub Care</SelectItem>
                            <SelectItem value="lighting">Outdoor Lighting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/80 text-white font-montserrat font-medium shadow-lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div>
            <div className="bg-light rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-montserrat font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Our Address</h4>
                    <p className="text-gray-600 mt-1">123 Landscaping Way<br/>Rancho Bernardo, CA 92128</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <i className="fas fa-phone-alt text-primary"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Phone</h4>
                    <p className="text-gray-600 mt-1">(858) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Email</h4>
                    <p className="text-gray-600 mt-1">info@martingardening.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-medium">Business Hours</h4>
                    <p className="text-gray-600 mt-1">Monday - Friday: 7:00 AM - 5:00 PM<br/>Saturday: 8:00 AM - 2:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-montserrat font-medium mb-4">Service Areas</h4>
                <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <div className="text-center">
                      <i className="fas fa-map-marked-alt text-4xl text-primary"></i>
                      <p className="mt-2 text-gray-600">Interactive Map of Service Areas:<br/>Rancho Bernardo, Poway and surrounding areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
