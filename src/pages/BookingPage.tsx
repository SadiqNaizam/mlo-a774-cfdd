import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { CreditCard, User, Users, Calendar } from 'lucide-react';

// Form validation schema
const bookingFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  numGuests: z.string().min(1, { message: 'Please select the number of guests.' }),
  cardName: z.string().min(2, { message: "Name on card can't be empty." }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'Card number must be 16 digits.' }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Use MM/YY format.' }),
  cvc: z.string().regex(/^\d{3,4}$/, { message: 'CVC must be 3 or 4 digits.' }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookingPage: React.FC = () => {
  console.log('BookingPage loaded');
  const navigate = useNavigate();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      numGuests: '2',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log('Booking submitted:', data);
    toast.success('Booking Confirmed!', {
      description: 'Your trip to Jaipur has been successfully booked.',
    });
    // Redirect to homepage after a short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card>
                  <CardHeader>
                    <CardTitle>Confirm Your Booking</CardTitle>
                    <CardDescription>Enter your details and payment information to complete the booking.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Traveler Information */}
                    <section>
                      <h3 className="text-lg font-semibold mb-4 flex items-center"><User className="mr-2 h-5 w-5" />Traveler Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Rohan Kumar" {...field} />
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="email@example.com" {...field} />
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
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 9876543210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="numGuests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number of Guests</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select number of guests" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1 Guest</SelectItem>
                                  <SelectItem value="2">2 Guests</SelectItem>
                                  <SelectItem value="3">3 Guests</SelectItem>
                                  <SelectItem value="4">4 Guests</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </section>

                    <Separator />

                    {/* Payment Details */}
                    <section>
                      <h3 className="text-lg font-semibold mb-4 flex items-center"><CreditCard className="mr-2 h-5 w-5" />Payment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="cardName"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Name on Card</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Rohan Kumar" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <Input placeholder="0000 0000 0000 0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiry Date</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/YY" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cvc"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVC / CVV</FormLabel>
                              <FormControl>
                                <Input placeholder="123" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </section>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" size="lg" className="w-full">Confirm & Pay Securely</Button>
                  </CardFooter>
                </Card>
              </form>
            </Form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1935&auto=format&fit=crop" alt="The Royal Palace, Jaipur" className="rounded-lg object-cover w-full h-48" />
                <div>
                  <h4 className="font-semibold text-lg">The Royal Palace, Jaipur</h4>
                  <p className="text-sm text-muted-foreground">Jaipur, Rajasthan</p>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center"><Calendar className="mr-2 h-4 w-4" /> Dates</span>
                    <span>Dec 24, 2024 - Dec 28, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center"><Users className="mr-2 h-4 w-4" /> Guests</span>
                    <span>2 Adults</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Room price (4 nights)</span><span>₹20,000</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Taxes & fees</span><span>₹3,600</span></div>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Price</span>
                  <span>₹23,600</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;