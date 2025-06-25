import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Plane, Hotel, Car, ArrowRight } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter'; // Assuming this component exists

const TripCostEstimatorTool: React.FC = () => {
  console.log('TripCostEstimatorTool loaded');

  // State for user selections
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [includeHotel, setIncludeHotel] = useState<boolean>(true);
  const [includeCabs, setIncludeCabs] = useState<boolean>(false);
  const [tripDuration, setTripDuration] = useState<number>(7);
  const [hotelCategory, setHotelCategory] = useState<string>('3-star');
  
  // State for the calculated cost
  const [totalCost, setTotalCost] = useState<number>(0);

  // Prices (can be fetched from an API in a real app)
  const BASE_COSTS = {
    flight: 250, // Per person estimate
    cabPerDay: 30,
    hotelPerDay: {
      '3-star': 75,
      '4-star': 150,
      '5-star': 300,
    },
  };

  // Recalculate cost whenever a dependency changes
  useEffect(() => {
    let cost = 0;
    if (includeFlights) {
      cost += BASE_COSTS.flight;
    }
    if (includeCabs) {
      cost += tripDuration * BASE_COSTS.cabPerDay;
    }
    if (includeHotel) {
      const dailyHotelCost = BASE_COSTS.hotelPerDay[hotelCategory as keyof typeof BASE_COSTS.hotelPerDay] || 0;
      cost += tripDuration * dailyHotelCost;
    }
    setTotalCost(cost);
  }, [includeFlights, includeHotel, includeCabs, tripDuration, hotelCategory]);

  const searchParams = new URLSearchParams();
  searchParams.set('duration', tripDuration.toString());
  if (includeHotel) searchParams.set('hotelCategory', hotelCategory);
  if (includeFlights) searchParams.set('mode', 'flight');

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Trip Cost Estimator</CardTitle>
        <CardDescription>Adjust the options below to get a real-time travel budget estimate.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side: Controls */}
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <Label htmlFor="flights-switch" className="flex items-center gap-3 text-lg">
                <Plane className="h-6 w-6 text-blue-500" />
                <span>Flights</span>
              </Label>
              <Switch id="flights-switch" checked={includeFlights} onCheckedChange={setIncludeFlights} />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <Label htmlFor="hotel-switch" className="flex items-center gap-3 text-lg">
                <Hotel className="h-6 w-6 text-purple-500" />
                <span>Hotel Stay</span>
              </Label>
              <Switch id="hotel-switch" checked={includeHotel} onCheckedChange={setIncludeHotel} />
            </div>

            {includeHotel && (
              <div className="pl-6 space-y-2">
                <Label htmlFor="hotel-category">Hotel Category</Label>
                <Select value={hotelCategory} onValueChange={setHotelCategory}>
                  <SelectTrigger id="hotel-category">
                    <SelectValue placeholder="Select star rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-star">★★★ (Standard)</SelectItem>
                    <SelectItem value="4-star">★★★★ (Premium)</SelectItem>
                    <SelectItem value="5-star">★★★★★ (Luxury)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <Label htmlFor="cabs-switch" className="flex items-center gap-3 text-lg">
                <Car className="h-6 w-6 text-orange-500" />
                <span>Local Cabs</span>
              </Label>
              <Switch id="cabs-switch" checked={includeCabs} onCheckedChange={setIncludeCabs} />
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="trip-duration" className="text-lg">Trip Duration</Label>
                <span className="font-bold text-lg text-primary">{tripDuration} Days</span>
              </div>
              <Slider
                id="trip-duration"
                min={1}
                max={30}
                step={1}
                value={[tripDuration]}
                onValueChange={(value) => setTripDuration(value[0])}
              />
            </div>
          </div>

          {/* Right Side: Cost Display */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-lg font-medium text-gray-500">ESTIMATED COST</h3>
            <div className="my-4">
              <span className="text-5xl md:text-6xl font-extrabold text-primary">
                $<AnimatedCounter value={totalCost} />
              </span>
            </div>
            <p className="text-xs text-gray-400">
              *This is an approximate cost per person and does not constitute a final quote.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-900/50 p-6 flex justify-end">
        <Button size="lg" asChild>
          <Link to={`/search-results?${searchParams.toString()}`}>
            See Packages for this Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCostEstimatorTool;