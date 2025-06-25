import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, TicketPercent } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OfferBannerProps {
  title: string;
  description: string;
  promoCode?: string;
  ctaText: string;
  ctaLink: string;
  className?: string;
  gradient?: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  title = "Limited Time Offer",
  description = "Get the best deals on your next adventure. Explore top destinations with exclusive discounts.",
  promoCode,
  ctaText = "Explore Deals",
  ctaLink = "/search-results",
  className,
  gradient = 'bg-gradient-to-tr from-gray-900 via-gray-800 to-blue-900',
}) => {
  console.log('OfferBanner loaded');

  return (
    <Card className={cn(
      "relative w-full overflow-hidden rounded-lg border-2 border-blue-400/30 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1",
      gradient,
      className
    )}>
      {/* Decorative element */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
      
      <CardContent className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 text-blue-200/90 max-w-lg">{description}</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {promoCode && (
            <div className="flex items-center gap-2 rounded-lg border-2 border-dashed border-blue-300/70 bg-white/10 px-4 py-2">
              <TicketPercent className="h-5 w-5 text-blue-300" />
              <span className="font-mono text-lg font-semibold tracking-wider text-white">
                {promoCode}
              </span>
            </div>
          )}
          <Button size="lg" className="bg-white text-blue-900 font-bold hover:bg-gray-200" asChild>
            <Link to={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferBanner;