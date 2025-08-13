import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import type { InavbarItems } from "@/types/employee"
import { useLocation } from 'react-router-dom';

interface NavMainProps {
  sidebarData: InavbarItems[];
}

export function NavMain({ sidebarData }: NavMainProps) {
  const location = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {sidebarData.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`cursor-pointer  ${item.isAvailable ? "hover:bg-muted" : "bg-muted/20 cursor-not-allowed hover:bg-muted/20 text-muted-foreground hover:text-muted-foreground line-through"}`}
                  isActive={isActive}
                  onClick={() => item.isAvailable && item.onClick()}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
};