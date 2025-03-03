// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// const NavBar = () => {
//     const location = useLocation();
//     const buttons = [
//         { label: 'RULEBOOK', url: '/rulebook' },
//         { label: 'COMPETITIONS', url: '/competitions' },
//         { label: 'HOME', url: '/' },
//         { label: 'DEVELOPERS', url: '/developers' },
//         { label: 'PROFILE', url: '/login' },
//     ];

//     const currentPath = location.pathname;
//     const activeIndex = buttons.findIndex((button) => button.url === currentPath);

//     const [activeButton, setActiveButton] = useState(activeIndex !== -1 ? activeIndex : 0);

//     const handleButtonClick = (index, url) => {
//         setActiveButton(index); // Update the active button index
//         window.location.href = url; // Navigate to the URL
//     };

//     return (
//         <div className="navbar">
//             <div className="arc">
//                 {buttons.map((button, index) => (
//                     <a
//                         key={index}
//                         href={button.url}
//                         className={`nav-button ${index === activeButton ? 'active' : ''}`}
//                         onClick={(event) => {
//                             event.preventDefault(); // Prevent immediate navigation
//                             handleButtonClick(index, button.url);
//                         }}
//                     >
//                         <span className="button-text">{button.label}</span>
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NavBar;|

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import "./Navbar.css";

const NavBar = () => {
  const location = useLocation();
  const buttons = [
    { label: "RULEBOOK", url: "/rulebook" },
    { label: "COMPETITIONS", url: "/competitions" },
    { label: "HOME", url: "/" },
    { label: "DEVELOPERS", url: "/developers" },
    { label: "PROFILE", url: "/login" },
  ];

  const currentPath = location.pathname;
  const activeIndex = buttons.findIndex((button) => button.url === currentPath);
  const [activeButton, setActiveButton] = useState(
    activeIndex !== -1 ? activeIndex : 0
  );

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = (index, url) => {
    setActiveButton(index);
    window.location.href = url;
    setDrawerOpen(false);
  };

  return (
    <nav className="navbar">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setDrawerOpen(true)}
        className="menu-button"
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#333", color: "#a1dfff", width: "70%" },
        }}
      >
        <List>
          {buttons.map((button, index) => (
            <ListItem
              button
              key={index}
              selected={index === activeButton}
              onClick={() => handleButtonClick(index, button.url)}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      color: index === activeButton ? "#ff0" : "#a1dfff",
                      fontFamily: "SilkScreen",
                    }}
                  >
                    {button.label}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className="arc">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.url}
            className={`nav-button ${index === activeButton ? "active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              handleButtonClick(index, button.url);
            }}
          >
            <span className="button-text">{button.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
