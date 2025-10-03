import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddRoom from "./componets/common/room/AddRoom";
import ExistingRoom from "./componets/common/room/ExistingRoom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditRoom from "./componets/common/room/EditRoom";
import Home from "./componets/home/Home";
import Footer from "./componets/layout/Footer";
import NavBar from "./componets/layout/NavBar";
import RoomListing from "./componets/common/room/RoomListing";
import Admin from "./componets/admin/Admin";
import CheckOut from "./componets/bookings/CheckOut";
import BookingSuccess from "./componets/bookings/BookingSuccess";
import Bookings from "./componets/bookings/Bookings";
import FindBooking from "./componets/bookings/FindBooking";
import Login from "./componets/auth/Login";
import Registration from "./componets/auth/Registration";
import Profile from "./componets/auth/Profile";
import AuthProvider from "./componets/auth/AuthProvider";
import RequireAuth from "./componets/auth/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-room" element={<ExistingRoom />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route
              path="/book-room/:roomId"
              element={
                <RequireAuth>
                  <CheckOut />
                </RequireAuth>
              }
            />
            <Route path="/browse-all-room" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/existing-bookings" element={<Bookings />} />
            <Route path="/find-booking" element={<FindBooking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<FindBooking />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </AuthProvider>
  );
}

export default App;
