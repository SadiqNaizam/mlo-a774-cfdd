import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Twitter, Facebook, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center lg:items-start">
             <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Map className="h-6 w-6 text-primary" />
              <span className="font-bold">BharatExplorer</span>
            </Link>
            <p className="mt-4 max-w-xs text-center text-sm lg:text-left">
              Your seamless gateway to exploring the wonders of India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Company</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link to="#" className="hover:text-primary">About Us</Link>
                <Link to="#" className="hover:text-primary">Contact</Link>
                <Link to="#" className="hover:text-primary">Careers</Link>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Support</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link to="#" className="hover:text-primary">FAQ</Link>
                <Link to="#" className="hover:text-primary">Terms of Service</Link>
                <Link to="#" className="hover:text-primary">Privacy Policy</Link>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Connect</p>
               <div className="mt-4 flex justify-center sm:justify-start space-x-4">
                  <Link to="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                  <Link to="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                  <Link to="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></Link>
               </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm">
            &copy; {currentYear} BharatExplorer. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;