import { Dashboard } from "@/components/custom-elements/Dashboard";
import { SidebarMain } from "@/components/example/sidebar-main";


function Community() {
  return (
    <>
      <SidebarMain />
      <div className="pl-4 md:ml-20 h-screen flex flex-col lg:flex-row lg:gap-8">
        <Dashboard />
      </div>
    </>
  );
}

export default Community;

