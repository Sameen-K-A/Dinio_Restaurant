import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton';
import { ROUTE } from '@/routes/router';
import { IconDashboard, IconListDetails, IconUser } from '@tabler/icons-react';
import { MobileSheet } from './MobileSheet';
import type { InavbarItems } from '@/types/employee';

export default function EmployeeNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarData: InavbarItems[] = [
    {
      title: 'Dashboard',
      url: ROUTE.EMPLOYEE.DASHBOARD,
      icon: IconDashboard,
      onClick: () => navigate(ROUTE.EMPLOYEE.DASHBOARD),
    },
    {
      title: 'Orders',
      url: ROUTE.EMPLOYEE.ORDERS,
      icon: IconListDetails,
      onClick: () => navigate(ROUTE.EMPLOYEE.ORDERS),
    },
    {
      title: 'Profile',
      url: ROUTE.EMPLOYEE.PROFILE,
      icon: IconUser,
      onClick: () => navigate(ROUTE.EMPLOYEE.PROFILE),
    },
  ];

  return (
    <nav className="sticky top-0 md:top-5 z-10 w-full max-w-6xl mx-auto bg-background md:bg-muted rounded-none md:rounded-full border-b md:border flex items-center justify-between px-4 md:px-8 h-16">
      <img src="/svgs/logo.svg" alt="Logo" className="h-6 logo-img" />

      <div className="hidden md:flex gap-1 items-center">
        {sidebarData.map((item) => (
          <Button
            key={item.title}
            variant={location.pathname === item.url ? 'secondary' : 'ghost'}
            className={`gap-1 rounded-full cursor-pointer ${location.pathname === item.url ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/70 transition-colors' : 'bg-muted-foreground/10 hover:bg-muted-foreground/20 transition-colors'}`}
            onClick={() => navigate(item.url)}
          >
            {item.icon && <item.icon size={18} />}
            <span>{item.title}</span>
          </Button>
        ))}
        <ThemeToggleButton />
      </div>
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggleButton />
        <MobileSheet sidebarData={sidebarData} />
      </div>
    </nav>
  );
}