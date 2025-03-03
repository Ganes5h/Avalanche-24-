import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import Competitions from "./pages/Competitions";
import Developers from "./pages/Developers";
import PageNotFound404 from "./pages/PageNotFound404";
import PaymentComponent from "./components/PaymentComponent";
import RegistrationForm from "./components/RegistrationForm";

import Newnavbar from "./components/Newnavbar";

import EventPage from "./pages/EventDetailsPage";

import Profile from "./pages/ProfileSec";

import VerfyPage from "./pages/VerifyPage";

import ProtectedRoute from "./pages/ProtectedRoute";

import LoadingWrapper from "./LoadingWrapper";
import MoveToTop from "./MoveToTop";
import RuleBook from "./pages/RuleBook";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable certain key shortcuts
    const handleKeyDown = (event) => {
      // Block F12
      if (event.key === "F12") {
        event.preventDefault();
      }

      // Block Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+U (View Source)
      if (
        (event.ctrlKey &&
          event.shiftKey &&
          (event.key === "I" || event.key === "J")) ||
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <Router>
        <Newnavbar />
        <MoveToTop />
        <Routes>
          <Route path="/" element={<LoadingWrapper />}>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="*" element={<PageNotFound404 />} />
            <Route exact path="/register-login" element={<AuthForm />}></Route>
            <Route
              exact
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              exact
              path="/competitions"
              element={<Competitions />}
            ></Route>
            <Route exact path="/contact" element={<Developers />}></Route>
            <Route exact path="/rulebook" element={<RuleBook />}></Route>
            <Route exact path="/event/:eventId" element={<EventPage />}></Route>
            <Route exact path="/payment" element={<PaymentComponent />}></Route>
            <Route
              exact
              path="/verify-account/:token"
              element={<VerfyPage />}
            />
            <Route
              exact
              path="/register/:eventId"
              element={
                <ProtectedRoute>
                  <RegistrationForm />
                </ProtectedRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
