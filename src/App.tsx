import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup";
import { PageRoutes } from "./constants";
import { FaHome, FaSearch } from "react-icons/fa";
import Home from "./pages/Home";
import Sidebar from "./components/sidebar";
import Search from "./pages/Search";
export const APP_MENU: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    icon: <FaHome />,
    route: PageRoutes.Home,
  }, 
  {
    id:2,
    label: "Search",
    icon: <FaSearch />,
    route: PageRoutes.Search,
  }
];

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Sidebar>

        <Routes>
          <Route path={PageRoutes.SignUp} element={<SignUp />} />
          <Route path={PageRoutes.Home} element={<Home />} />
          <Route path={PageRoutes.Search} element={<Search />} />

        </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
