import { SidebarMain } from "@/components/example/sidebar-main";
import FirstBlock from "./components/FirstBlock";

function Profile() {

  return (
    <>
      <SidebarMain />
      <div className="ml-20 h-screen">
        <FirstBlock />
      </div>
    </>
  );
}

export default Profile;
