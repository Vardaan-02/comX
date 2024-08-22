import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login.tsx";
import Signup from "./pages/auth/Signup.tsx";
import Community from "./pages/Community.tsx";
import CreateCommunity from "./pages/community/CreateCommunity.tsx";
import SubCommunity from "./pages/community/SubCommunity.tsx";
import { Calendar } from "lucide-react";
import Profile from "./pages/profile/Profile.tsx";
import Conversation from "./pages/community/Conversation.tsx";
import ProfileSettings from "./pages/profile/ProfileSettings.tsx";
import BasicLayoutGame from "./pages/gaming/BasicLayoutGame.tsx";
import GameHome from "./pages/gaming/GameHome.tsx";
import Game1 from "./pages/gaming/Game1.tsx";
import Game2 from "./pages/gaming/Game2.tsx";
import Game3 from "./pages/gaming/Game3.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/community",
    element: <Community />,
    children: [
      { path: "/community/create", element: <CreateCommunity /> },
      { path: "/community/teams", element: <SubCommunity /> },
      { path: "/community/timeline", element: <Calendar /> },
      { path: "/community/member", element: <Conversation /> },
    ],
  },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/settings", element: <ProfileSettings /> },
  {
    path: "/gaming",
    element: <BasicLayoutGame />,
    children: [
      { path: "/gaming/home", element: <GameHome/> },
      { path: "/gaming/game1", element: <Game1/> },
      { path: "/gaming/game2", element: <Game2/> },
      { path: "/gaming/game3", element: <Game3/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
