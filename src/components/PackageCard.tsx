import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle } from 'lucide-react';

interface PackageCardProps {
  slug: string;
  imageUrl: string;
  destination: string;
  price: number;
  description: string;
  highlights: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({
  slug,
  imageUrl,
  destination,
  price,
  description,
  highlights,
}) => {
  console.log('PackageCard loaded for:', destination);

  return (
    <Link to={`/booking?package=${slug}`} className="group block" aria-label={`View details for ${destination}`}>
      <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 flex flex-col h-full">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 10}>
            <img
              src={imageUrl}
              alt={`Scenic view of ${destination}`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </CardHeader>

        <CardContent className="p-4 flex flex-col flex-grow">
          <CardTitle className="text-xl font-bold text-gray-800 mb-1">{destination}</CardTitle>
          <CardDescription className="text-sm text-gray-600 mb-4">{description}</CardDescription>
          
          <div className="mt-auto">
            <div className="overflow-hidden transition-all duration-300 ease-in-out h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Package Highlights:</h4>
              <ul className="space-y-1.5">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-xs text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500">Starts from</p>
              <p className="text-lg font-extrabold text-blue-600">
                ₹{price.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PackageCard;