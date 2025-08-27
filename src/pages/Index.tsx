import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { AuthManagement } from '@/components/dashboard/sections/AuthManagement';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'auth':
        return <AuthManagement />;
      case 'categories':
        return <div className="text-center py-8 text-muted-foreground">Categories management coming soon...</div>;
      case 'food-items':
        return <div className="text-center py-8 text-muted-foreground">Food items management coming soon...</div>;
      case 'orders':
        return <div className="text-center py-8 text-muted-foreground">Orders management coming soon...</div>;
      case 'offers':
        return <div className="text-center py-8 text-muted-foreground">Offers management coming soon...</div>;
      case 'favorites':
        return <div className="text-center py-8 text-muted-foreground">Favorites management coming soon...</div>;
      case 'cart':
        return <div className="text-center py-8 text-muted-foreground">Cart management coming soon...</div>;
      case 'options':
        return <div className="text-center py-8 text-muted-foreground">Options management coming soon...</div>;
      case 'branches':
        return <div className="text-center py-8 text-muted-foreground">Branches management coming soon...</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <DashboardLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderSection()}
    </DashboardLayout>
  );
};

export default Index;
