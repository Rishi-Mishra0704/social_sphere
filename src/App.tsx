import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup";
import { PageRoutes } from "./constants";
import { FaHome } from "react-icons/fa";
import Home from "./pages/Home";
export const APP_MENU: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    icon: <FaHome />,
    route: PageRoutes.Home,
  }
];

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path={PageRoutes.SignUp} element={<SignUp />} />
          <Route path={PageRoutes.Home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
