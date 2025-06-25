import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Package, Hotel, Plane, Bus, Car, Calendar as CalendarIcon, Users, BedDouble } from 'lucide-react';

const MultiModalSearchForm = () => {
  console.log('MultiModalSearchForm loaded');

  const [hotelCheckIn, setHotelCheckIn] = useState<Date>();
  const [hotelCheckOut, setHotelCheckOut] = useState<Date>();
  const [flightDeparture, setFlightDeparture] = useState<Date>();
  const [flightReturn, setFlightReturn] = useState<Date>();
  const [busDate, setBusDate] = useState<Date>();
  const [cabDate, setCabDate] = useState<Date>();

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Where to next?</CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Book your dream vacation with BharatExplorer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
            <TabsTrigger value="packages" className="py-2"><Package className="w-4 h-4 mr-2" /> Packages</TabsTrigger>
            <TabsTrigger value="hotels" className="py-2"><Hotel className="w-4 h-4 mr-2" /> Hotels</TabsTrigger>
            <TabsTrigger value="flights" className="py-2"><Plane className="w-4 h-4 mr-2" /> Flights</TabsTrigger>
            <TabsTrigger value="buses" className="py-2"><Bus className="w-4 h-4 mr-2" /> Buses</TabsTrigger>
            <TabsTrigger value="cabs" className="py-2"><Car className="w-4 h-4 mr-2" /> Cabs</TabsTrigger>
          </TabsList>
          
          {/* Packages Tab */}
          <TabsContent value="packages" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="pkg-from">From</Label>
                <Input id="pkg-from" placeholder="Starting location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pkg-to">To</Label>
                <Input id="pkg-to" placeholder="Destination" />
              </div>
              <Link to="/search-results" className="w-full">
                <Button className="w-full text-lg py-6 md:py-3">Search Packages</Button>
              </Link>
            </div>
          </TabsContent>

          {/* Hotels Tab */}
          <TabsContent value="hotels" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                <div className="space-y-2 lg:col-span-4">
                    <Label htmlFor="hotel-location">Location</Label>
                    <Input id="hotel-location" placeholder="City, property, or location" />
                </div>
                <div className="space-y-2 lg:col-span-2">
                    <Label>Check-in</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !hotelCheckIn && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {hotelCheckIn ? format(hotelCheckIn, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={hotelCheckIn} onSelect={setHotelCheckIn} initialFocus /></PopoverContent>
                    </Popover>
                </div>
                <div className="space-y-2 lg:col-span-2">
                    <Label>Check-out</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !hotelCheckOut && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {hotelCheckOut ? format(hotelCheckOut, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={hotelCheckOut} onSelect={setHotelCheckOut} initialFocus /></PopoverContent>
                    </Popover>
                </div>
                <div className="space-y-2 lg:col-span-2">
                    <Label htmlFor="hotel-guests">Guests & Rooms</Label>
                    <Input id="hotel-guests" placeholder="2 Guests, 1 Room" />
                </div>
                <Link to="/search-results" className="w-full lg:col-span-2">
                    <Button className="w-full text-lg py-6 md:py-3">Search Hotels</Button>
                </Link>
            </div>
          </TabsContent>

          {/* Flights Tab */}
          <TabsContent value="flights" className="mt-4">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                <div className="space-y-2 lg:col-span-3">
                    <Label htmlFor="flight-from">From</Label>
                    <Input id="flight-from" placeholder="Departure city" />
                </div>
                 <div className="space-y-2 lg:col-span-3">
                    <Label htmlFor="flight-to">To</Label>
                    <Input id="flight-to" placeholder="Arrival city" />
                </div>
                <div className="space-y-2 lg:col-span-2">
                    <Label>Departure</Label>
                     <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !flightDeparture && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {flightDeparture ? format(flightDeparture, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={flightDeparture} onSelect={setFlightDeparture} initialFocus /></PopoverContent>
                    </Popover>
                </div>
                <div className="space-y-2 lg:col-span-2">
                    <Label>Return</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !flightReturn && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {flightReturn ? format(flightReturn, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={flightReturn} onSelect={setFlightReturn} initialFocus /></PopoverContent>
                    </Popover>
                </div>
                 <Link to="/search-results" className="w-full lg:col-span-2">
                    <Button className="w-full text-lg py-6 md:py-3">Search Flights</Button>
                </Link>
            </div>
          </TabsContent>

          {/* Buses Tab */}
          <TabsContent value="buses" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                    <Label htmlFor="bus-from">From</Label>
                    <Input id="bus-from" placeholder="Departure city" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bus-to">To</Label>
                    <Input id="bus-to" placeholder="Arrival city" />
                </div>
                <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !busDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {busDate ? format(busDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={busDate} onSelect={setBusDate} initialFocus /></PopoverContent>
                    </Popover>
                </div>
                 <Link to="/search-results" className="w-full">
                    <Button className="w-full text-lg py-6 md:py-3">Search Buses</Button>
                </Link>
            </div>
          </TabsContent>

          {/* Cabs Tab */}
          <TabsContent value="cabs" className="mt-4">
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                    <Label htmlFor="cab-from">Pickup Location</Label>
                    <Input id="cab-from" placeholder="Enter pickup location" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="cab-to">Drop Location</Label>
                    <Input id="cab-to" placeholder="Enter drop location" />
                </div>
                <div className="space-y-2">
                    <Label>Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !cabDate && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {cabDate ? format(cabDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={cabDate} onSelect={setCabDate} initialFocus /></PopoverContent>
                    </Popover>
                </div>
                 <Link to="/search-results" className="w-full">
                    <Button className="w-full text-lg py-6 md:py-3">Search Cabs</Button>
                </Link>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MultiModalSearchForm;