import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "../constants";
import { Sidebar, Menu, MenuItem, sidebarClasses, MenuItemStyles } from "react-pro-sidebar";
import { FaHome } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
interface SidebarProps {
  children: React.ReactNode;
}

const menuItemStyles: MenuItemStyles = {
  root: {
    marginTop: "5px",
    fontSize: '18px',
    fontWeight: 400,
  },
  icon: {
    color:"#59d0ff",
  },
  button: {
    '&:hover': {
      backgroundColor: '#00458b',
      color: '#b6c8d9',
    },
  },
};

const SideBar: React.FC<SidebarProps> = ({ children }: SidebarProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div
        style={{
          width: isSidebarCollapsed ? "80px" : "250px",
          transition: "width 0.3s",
        }}
        onMouseEnter={() => setIsSidebarCollapsed(false)}
        onMouseLeave={() => setIsSidebarCollapsed(true)}
      >
        <Sidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#0b2948",
              color: "#8ba1b7",
              height: "100vh",
            },
          }}
          collapsed={isSidebarCollapsed}
          collapsedWidth="80px"
          transitionDuration={300}
        >
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              icon={<FaHome/>}
              component={<Link to={PageRoutes.Home} />}
            >
              Home
            </MenuItem>
            <MenuItem
              icon={<GiExitDoor/>}
              component={<Link to={PageRoutes.SignUp} />}
            >
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default SideBar;
