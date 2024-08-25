import { Dashboard } from "@/components/custom-elements/Dashboard";
import { SidebarMain } from "@/components/example/sidebar-main";

function Community() {
  return (
    <>
      <SidebarMain />
      <div className="relative sm:pl-20">
        <h1 className="text-white">
            <Dashboard />
        </h1>
      </div>
    </>
  );
}

export default Community;
