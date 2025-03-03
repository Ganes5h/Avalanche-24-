import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import PaymentDetails from "./components/PaymentDetails";
import EventDetails from "./components/Eventdetails";
import DashboardLayout from "./components/DashBoard_Layout/index";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route exact path="/dashboard-layout" element={<DashboardLayout />}>
            <Route
              index
              path="analytics"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route path="paymentdetails" element={<PaymentDetails />} />
            <Route path="eventdetails" element={<EventDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
