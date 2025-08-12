import { NavMain } from '@/components/employee/sidebar/NavMain'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'
import type { InavbarItems } from "@/types/employee"

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & { sidebarData: InavbarItems[] };

export function AppSidebar({ sidebarData, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <img
              src="/svgs/logo.svg"
              alt="Dinio Logo"
              className="h-8 w-auto my-4 ml-2 logo-img"
              draggable="false"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain sidebarData={sidebarData} />
      </SidebarContent>
    </Sidebar>
  )
};