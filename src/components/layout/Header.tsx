import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Map, Menu, User } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  const navLinks = [
    { name: 'Packages', href: '/search-results' },
    { name: 'Hotels', href: '/search-results' },
    { name: 'Offers', href: '/offers' },
    { name: 'Trip Cost Estimator', href: '/trip-cost-estimator' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  const MobileNav = () => (
    <nav className="grid gap-6 text-lg font-medium">
      <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
        <Map className="h-6 w-6" />
        <span className="sr-only">BharatExplorer</span>
      </Link>
      {navLinks.map((link) => (
        <NavLink key={link.name} to={link.href} className={navLinkClasses}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Map className="h-6 w-6 text-primary" />
          <span className="font-bold">BharatExplorer</span>
        </Link>
        {navLinks.map((link) => (
          <NavLink key={link.name} to={link.href} className={navLinkClasses}>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <MobileNav />
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;