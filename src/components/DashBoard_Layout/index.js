import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Typography,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import GroupIcon from "@mui/icons-material/Group";
import { Outlet, Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { List, ListItem, ListItemText, Collapse, Divider } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { motion } from "framer-motion";
// Import any icons you need
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import RemoveModeratorIcon from "@mui/icons-material/RemoveModerator";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PaymentIcon from "@mui/icons-material/Payment"; // assuming you need an icon for Payment Details
import EventIcon from "@mui/icons-material/Event";
// import Logo from "../assets/Logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
export default function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openPlayground, setOpenPlayground] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    dept: "",
    interests: [],
    profilePic: "",
  });

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/"); // Redirect to the home route
  };
  const routes = [
    { path: "analytics", label: "Dashboard", icon: DashboardIcon },
    // {
    //   path: "events",
    //   label: "Events",
    //   icon: AssessmentIcon,
    // },

    // {
    //   path: "events",
    //   label: "Events",
    //   icon: AssessmentIcon,
    //   submenu: [
    //     {
    //       path: "events/create-event",
    //       label: "Create Event",
    //       icon: AddCircleIcon,
    //     },
    //     {
    //       path: "events/view-event",
    //       label: "View Events",
    //       icon: EventNoteIcon,
    //     },
    //   ],
    // },

    {
      path: "paymentdetails",
      label: "Payment Details",
      icon: PaymentIcon,
    },
    {
      path: "eventdetails",
      label: "Event Details",
      icon: EventIcon,
    },

    {
      path: "/",
      label: "Logout",
      icon: LogoutIcon,
      onClick: handleLogout, // Add an onClick handler for the logout
    },

    // { path: "/", label: "Home", icon: HomeIcon },
  ];
  const handlePlaygroundClick = () => {
    setOpenPlayground(!openPlayground);
  };
  const navigate = useNavigate();
  const startPracticing = () => {
    navigate("/dashboard-layout/generate");
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);

  const handleMenuClose = () => {
    setAnchorEl(null);
    navigate("/dashboard-layout/edit-profile");
  };
  const handleBilling = () => {
    setAnchorEl(null);
    navigate("/dashboard-layout/billing-status");
  };

  useEffect(() => {
    navigate("/dashboard-layout/analytics");
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div
      className="min-h-screen flex "
      style={
        {
          // background:
          //   "linear-gradient(59.29deg, #68328F 2.5%, #2D1375 47%, #0F0F0F 99.31%)",
          // color: "white",
        }
      }
    >
      {/* Sidebar */}
      <aside
        className={`w-64 min-h-screen fixed top-0 left-0 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:w-64`}
        style={{
          background: "white",
          // backdropFilter: "blur(8px)",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <div className="p-4 text-center font-bold text-xl">
          <div className="relative flex items-center">
            <motion.h1
              className="text-2xl md:text-3xl font-extrabold tracking-wide"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <a href="/" className="inline-flex items-center">
                {/* <img
                  src={Logo}
                  alt="Comany Logo"
                  className="mx-4"
                  width={30}
                ></img> */}

                <motion.span
                  // className="text-white"
                  initial={{ letterSpacing: "0.1em" }}
                  animate={{ letterSpacing: "normal" }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Avalanche
                </motion.span>
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2"
                  initial={{ backgroundPosition: "200% center" }}
                  animate={{ backgroundPosition: "0% center" }}
                  transition={{ duration: 3, ease: "linear" }}
                >
                  24
                </motion.span>
              </a>
            </motion.h1>
          </div>
        </div>
        <List
          component="nav"
          className="mt-10 flex flex-col items-center text-center"
        >
          {routes.map((route, index) => (
            <React.Fragment key={index}>
              {route.submenu ? (
                <>
                  <ListItem
                    button
                    onClick={handlePlaygroundClick}
                    className="w-full justify-center hover:bg-blue-100 transition-colors text-center items-center"
                  >
                    {route.icon && <route.icon style={{ marginRight: 8 }} />}
                    <ListItemText primary={route.label} />
                    {openPlayground ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openPlayground} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {route.submenu.map((sub, subIndex) => (
                        <ListItem
                          button
                          component={NavLink}
                          to={sub.path}
                          key={subIndex}
                          className="pl-8 mb-2 hover:bg-blue-100 transition-colors"
                          activeClassName="text-dark-blue" // Apply the active class for the dark blue color
                        >
                          {sub.icon && <sub.icon style={{ marginRight: 8 }} />}
                          <ListItemText primary={sub.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem
                  button
                  component={route.path === "/" ? "button" : NavLink} // For logout, treat as a button
                  to={route.path === "/" ? undefined : route.path} // Do not navigate for logout route
                  onClick={route.onClick} // Add the onClick for logout
                  className={({ isActive }) =>
                    `w-full justify-center hover:bg-blue-100 transition-colors ${
                      isActive ? "text-dark-blue" : ""
                    }`
                  } // Active class for dark blue color
                  style={{ marginTop: "20px" }}
                >
                  {route.icon && <route.icon style={{ marginRight: 8 }} />}
                  <ListItemText primary={route.label} />
                </ListItem>
              )}
              <Divider />
            </React.Fragment>
          ))}
        </List>
        {/* <div className="flex items-center justify-center">
          <motion.button
            className="bg-clip text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ml-2 p-3 w-48 font-semibold btn-alt"
            style={{
              borderRadius: "32px",
              fontSize: "16px",
              fontWeight: "550",
              boxShadow: "0 4px 10px 0 rgba(121, 120, 129, 0.5)",
            }}
            initial={{ backgroundPosition: "200% center" }}
            animate={{ backgroundPosition: "0% center" }}
            transition={{ duration: 0.2, ease: "linear" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={startPracticing}
          >
            Practice Interview
          </motion.button>
        </div> */}
      </aside>

      {/* Sidebar Toggle Button for small screens */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-30 bg-clip bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-md text-white shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      {/* Page Content */}
      <div className="flex-1 lg:ml-64">
        {/* Sticky Header */}
        {/* <header
          className="text=white shadow-lg p-1 flex justify-between items-center"
          style={{
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        > */}
        {/* <div className="w-24"> */}
        {/* <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Search Items for your use..."
            /> */}
        {/* </div>
          <div className="flex items-center space-x-4">
            <Typography variant="h6">Welcome,Mane</Typography> */}

        {/* <Badge badgeContent={4} color="error">
              <NotificationsIcon
                style={{
                  //   py: 4,
                  //   fontWeight: "bold",
                  color:
                    "linear-gradient(90deg, rgba(103, 54, 215, 0.9) 0%, rgba(160, 54, 193, 0.9) 50.15%, rgba(233, 53, 166, 0.9) 100.31%)",
                }}
              />
            </Badge> */}
        {/* <IconButton onClick={handleMenuOpen} color="inherit">
              <Avatar
                src={
                  formData.profilePic ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKYK3Z-brarkS6HlNUOYHt1vH03rOs_aebA&s"
                }
                alt="description"
              ></Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Avatar
                  src={
                    formData.profilePic ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKYK3Z-brarkS6HlNUOYHt1vH03rOs_aebA&s"
                  }
                  alt="description"
                ></Avatar>
                Edit Profile
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleBilling}>Billing</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </header> */}
        {/* <div className="">
          <Title title="Dashboard "></Title>
        </div> */}

        {/* Main Content */}
        <div
          className="p-4"
          //   style={{
          //     background:
          //       "linear-gradient(59.29deg, #68328F 2.5%, #2D1375 47%, #0F0F0F 99.31%)",
          //     color: "white",
          //   }}
        >
          <Outlet />
        </div>
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
