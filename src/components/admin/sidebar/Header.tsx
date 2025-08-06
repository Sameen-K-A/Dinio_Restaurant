import { SidebarTrigger } from '@/components/ui/sidebar'
import { MobileSheet } from './MobileSheet'
import Logo from '/svgs/logo.svg'
import type { IsidebarItems } from '@/types/admin';

interface HeaderProps {
  sidebarData: IsidebarItems[];
};

export function Header({ sidebarData }: HeaderProps) {
  return (
    <header className="flex h-[var(--header-height)] shrink-0 mb-8 sm:mb-5 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]">
      <div className="hidden md:block w-full items-center">
        <SidebarTrigger />
      </div>
      <div className="flex md:hidden w-full items-center justify-between">
        <img src={Logo} alt="Logo" className="h-6" />
        <MobileSheet sidebarData={sidebarData} />
      </div>
    </header>
  )
};