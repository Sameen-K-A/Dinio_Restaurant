import { SidebarTrigger } from '@/components/ui/sidebar'
import { MobileSheet } from './MobileSheet'
import Logo from '/svgs/logo.svg'
import type { InavbarItems } from '@/types/employee';
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton';

interface HeaderProps {
  sidebarData: InavbarItems[];
};

export function Header({ sidebarData }: HeaderProps) {
  return (
    <header className="flex h-[var(--header-height)] shrink-0 mb-8 sm:mb-5 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]">
      <div className="hidden md:flex w-full items-center justify-between">
        <SidebarTrigger />
        <ThemeToggleButton />
      </div>
      <div className="flex md:hidden w-full items-center justify-between">
        <img src={Logo} alt="Logo" className="h-6 logo-img" />
        <div className="flex items-center gap-1">
          <ThemeToggleButton />
          <MobileSheet sidebarData={sidebarData} />
        </div>
      </div>
    </header>
  )
};