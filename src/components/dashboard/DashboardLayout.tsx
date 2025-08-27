import { useState } from 'react';
import { 
  ChefHat, 
  Users, 
  Package, 
  Tag, 
  ShoppingCart, 
  Heart, 
  Settings, 
  MapPin,
  Gift,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const navigation = [
  { name: 'Dashboard', href: '#dashboard', icon: ChefHat, current: true },
  { name: 'Auth Management', href: '#auth', icon: Users, current: false },
  { name: 'Categories', href: '#categories', icon: Tag, current: false },
  { name: 'Food Items', href: '#food-items', icon: Package, current: false },
  { name: 'Orders', href: '#orders', icon: ShoppingCart, current: false },
  { name: 'Offers', href: '#offers', icon: Gift, current: false },
  { name: 'Favorites', href: '#favorites', icon: Heart, current: false },
  { name: 'Cart', href: '#cart', icon: ShoppingCart, current: false },
  { name: 'Options', href: '#options', icon: Settings, current: false },
  { name: 'Branches', href: '#branches', icon: MapPin, current: false },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-card shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-foreground">Food Delivery</h2>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    onSectionChange(item.href.substring(1));
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-warm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-72 lg:overflow-y-auto lg:bg-card lg:shadow-card">
        <div className="flex h-16 shrink-0 items-center gap-2 px-6 border-b bg-gradient-to-r from-primary to-secondary">
          <ChefHat className="h-8 w-8 text-primary-foreground" />
          <h1 className="text-xl font-bold text-primary-foreground">Food Delivery</h1>
        </div>
        <nav className="p-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => onSectionChange(item.href.substring(1))}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-warm transform scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted hover:transform hover:scale-102'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top navigation */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-card/80 backdrop-blur-sm px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <h2 className="text-lg font-semibold text-foreground capitalize">
                {activeSection.replace('-', ' ')} Management
              </h2>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}