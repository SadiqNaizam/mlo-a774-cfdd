import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page Components
import MultiModalSearchForm from '@/components/MultiModalSearchForm';
import PackageCard from '@/components/PackageCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';

// Placeholder data for featured packages
const featuredPackages = [
  {
    slug: 'kerala-backwaters-bliss',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop',
    destination: 'Kerala Backwaters',
    price: 25000,
    description: 'Cruise through serene backwaters on a traditional houseboat.',
    highlights: ['Houseboat Stay', 'Local Cuisine', 'Village Tours'],
  },
  {
    slug: 'golden-triangle-tour',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop',
    destination: 'Golden Triangle',
    price: 35000,
    description: 'Explore the iconic cities of Delhi, Agra, and Jaipur.',
    highlights: ['Taj Mahal Visit', 'Amber Fort Tour', 'Rickshaw Ride in Delhi'],
  },
  {
    slug: 'leh-ladakh-adventure',
    imageUrl: 'https://images.unsplash.com/photo-1588219192330-f6e8044b76a3?q=80&w=1974&auto=format&fit=crop',
    destination: 'Leh-Ladakh Adventure',
    price: 45000,
    description: 'Experience the breathtaking landscapes of the Himalayas.',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass'],
  },
];

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center bg-cover bg-center py-20 md:py-32"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative container mx-auto px-4 z-10">
            <MultiModalSearchForm />
          </div>
        </section>

        {/* Featured Packages Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Featured Travel Packages
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover curated experiences across the most beautiful destinations in India.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPackages.map((pkg) => (
                <PackageCard key={pkg.slug} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Offers CTA Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Exclusive Offers & Deals
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find special discounts on hotels, flights, and holiday packages. Don't miss out!
            </p>
            <div className="mt-8">
              <Link to="/offers">
                <Button size="lg" className="text-lg py-7 px-10">
                  View All Offers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;