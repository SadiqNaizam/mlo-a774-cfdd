import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OfferBanner from '@/components/OfferBanner';
import PackageCard from '@/components/PackageCard';
import { Separator } from '@/components/ui/separator';

const specialPackages = [
  {
    slug: 'kerala-backwaters-monsoon',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop',
    destination: 'Kerala Backwaters',
    price: 24999,
    description: 'A tranquil journey through the serene backwaters of Alleppey.',
    highlights: ['Luxury Houseboat Stay', 'Authentic Kerala Cuisine', 'Guided Village Tour'],
  },
  {
    slug: 'rajasthan-royal-winter',
    imageUrl: 'https://images.unsplash.com/photo-1599661046227-14e7a70a2c52?q=80&w=1974&auto=format&fit=crop',
    destination: 'Royal Rajasthan Tour',
    price: 35500,
    description: 'Experience the vibrant culture and majestic forts of Rajasthan.',
    highlights: ['Heritage Hotel Stays', 'Jodhpur & Jaipur Sightseeing', 'Desert Safari'],
  },
  {
    slug: 'himalayan-adventure-leh',
    imageUrl: 'https://images.unsplash.com/photo-1610692359469-2a742858348f?q=80&w=2070&auto=format&fit=crop',
    destination: 'Himalayan Adventure',
    price: 42000,
    description: 'An exhilarating bike tour through the breathtaking landscapes of Leh-Ladakh.',
    highlights: ['Manali-Leh Highway Ride', 'Pangong Lake Visit', 'Nubra Valley Exploration'],
  },
];


const OffersPage = () => {
  console.log('OffersPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          
          {/* Special Banners Section */}
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 tracking-tight">
              Exclusive Limited-Time Offers
            </h1>
            <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
              Unlock incredible savings with our handpicked deals. Your next adventure is just a click away!
            </p>
            <div className="mt-8 space-y-6">
              <OfferBanner
                title="Monsoon Getaway Special"
                description="Explore the lush green landscapes of the Western Ghats and Kerala with a 20% discount."
                promoCode="MONSOON20"
                ctaText="Explore Packages"
                ctaLink="/search-results?season=monsoon"
                gradient="bg-gradient-to-tr from-green-900 via-teal-800 to-blue-900"
              />
              <OfferBanner
                title="Festive Season Deals"
                description="Celebrate the festive spirit across India. Book your Diwali or Christmas vacation now for exclusive perks."
                ctaText="View Festive Deals"
                ctaLink="/search-results?season=festive"
                gradient="bg-gradient-to-tr from-orange-800 via-red-900 to-yellow-800"
                className="border-amber-400/30 hover:shadow-amber-500/40"
              />
            </div>
          </section>

          <Separator className="my-12" />

          {/* Curated Packages Section */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Curated Holiday Packages
            </h2>
            <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
              Each package is crafted to give you an unforgettable experience. Hover over a card to see highlights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {specialPackages.map((pkg) => (
                <PackageCard
                  key={pkg.slug}
                  slug={pkg.slug}
                  imageUrl={pkg.imageUrl}
                  destination={pkg.destination}
                  price={pkg.price}
                  description={pkg.description}
                  highlights={pkg.highlights}
                />
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OffersPage;