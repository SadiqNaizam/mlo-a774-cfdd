import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PackageCard from '@/components/PackageCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const samplePackages = [
  {
    slug: 'kerala-backwaters-escape',
    imageUrl: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destination: 'Kerala Backwaters',
    price: 32000,
    description: 'A serene 6-day journey through the tranquil backwaters of Alleppey on a traditional houseboat.',
    highlights: ['Houseboat Stay', 'Traditional Kerala Cuisine', 'Cochin City Tour'],
  },
  {
    slug: 'rajasthan-royal-tour',
    imageUrl: 'https://images.pexels.com/photos/3569950/pexels-photo-3569950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destination: 'Royal Rajasthan',
    price: 45000,
    description: 'Explore the majestic forts and vibrant culture of Jaipur, Jodhpur, and Udaipur over 7 days.',
    highlights: ['Amber Fort Visit', 'Desert Safari', 'Luxury Heritage Hotel'],
  },
  {
    slug: 'himalayan-adventure-leh',
    imageUrl: 'https://images.pexels.com/photos/4172773/pexels-photo-4172773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destination: 'Himalayan Adventure',
    price: 55000,
    description: 'A thrilling 8-day bike tour through the breathtaking landscapes of Leh and Ladakh.',
    highlights: ['Pangong Lake Visit', 'Khardung La Pass', 'Monastery Visits'],
  },
  {
    slug: 'goa-beach-paradise',
    imageUrl: 'https://images.pexels.com/photos/1032646/pexels-photo-1032646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destination: 'Goa Beach Paradise',
    price: 25000,
    description: 'Relax on the sun-kissed beaches of North and South Goa with this 5-day getaway.',
    highlights: ['Beachfront Resort', 'Water Sports Combo', 'Vibrant Nightlife'],
  },
  {
    slug: 'spiritual-varanasi-trip',
    imageUrl: 'https://images.pexels.com/photos/12845348/pexels-photo-12845348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destination: 'Spiritual Varanasi',
    price: 28000,
    description: 'A 4-day spiritual journey to the ancient city of Varanasi to witness the Ganga Aarti.',
    highlights: ['Ganga Aarti Ceremony', 'Sarnath Visit', 'Boat Ride on the Ganges'],
  },
  {
    slug: 'andaman-island-hopping',
    imageUrl: 'https://images.pexels.com/photos/1029135/pexels-photo-1029135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destination: 'Andaman Islands',
    price: 60000,
    description: 'Discover the pristine beaches and coral reefs of the Andaman and Nicobar Islands.',
    highlights: ['Scuba Diving at Havelock', 'Cellular Jail Light & Sound Show', 'Radhanagar Beach'],
  },
];

const SearchResultsPage = () => {
  console.log('SearchResultsPage loaded');
  const [priceRange, setPriceRange] = useState([50000]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4 xl:w-1/5 mb-8 lg:mb-0">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Filter & Sort</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="sort-by" className="text-sm font-semibold">Sort by</Label>
                  <Select>
                    <SelectTrigger id="sort-by">
                      <SelectValue placeholder="Relevance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-semibold mb-3">Trip Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-adventure" />
                      <Label htmlFor="type-adventure" className="font-normal">Adventure</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-relax" />
                      <Label htmlFor="type-relax" className="font-normal">Relaxation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-cultural" />
                      <Label htmlFor="type-cultural" className="font-normal">Cultural</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-spiritual" />
                      <Label htmlFor="type-spiritual" className="font-normal">Spiritual</Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <Label htmlFor="price-range" className="text-sm font-semibold">Max Price</Label>
                   <p className="text-lg font-bold text-blue-600">
                    ₹{priceRange[0].toLocaleString('en-IN')}
                  </p>
                  <Slider
                    id="price-range"
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                </div>
                 <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Search Results */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Showing {samplePackages.length} Incredible Packages
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {samplePackages.map((pkg) => (
                <PackageCard key={pkg.slug} {...pkg} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;