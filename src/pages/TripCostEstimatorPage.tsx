import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TripCostEstimatorTool from '@/components/TripCostEstimatorTool';

const TripCostEstimatorPage: React.FC = () => {
  console.log('TripCostEstimatorPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-1 w-full py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* The TripCostEstimatorTool is the main feature of this page. */}
          <TripCostEstimatorTool />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TripCostEstimatorPage;