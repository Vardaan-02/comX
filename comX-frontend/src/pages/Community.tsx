import { Dashboard } from "@/components/custom-elements/Dashboard";
import { SidebarMain } from "@/components/example/sidebar-main";
import { Outlet } from "react-router-dom";


function Community() {
  return (
    <>
      <SidebarMain />
      <Outlet />
    </>
  );
}

export default Community;

