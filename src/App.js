import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";

import { UseFooter } from "./components/footer/use-footer";

import HomePage from "./pages/home/home";
import ContactUs from "./pages/contact/contact";
import AboutUs from "./pages/about/about";
import BookingPage from "./pages/booking/booking";
import DestinationPage from "./pages/destinations/destination";
import Packages from "./pages/package/package";
import PhotoGalleries from "./pages/photoGallery/photoGallery";
import Quote from "./pages/quote/quote";
import ToursPage from "./pages/tours/tour";
import TourDetails from "./pages/tours/tourDetails";

import Cancellation from "./pages/cancellation/cancellation";
import TermsCondition from "./pages/terms/terms";
import PrivacyPolicy from "./pages/privacy/privacy";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tour-details" element={<TourDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/photo-galleries" element={<PhotoGalleries />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/photo-galleries" element={<PhotoGalleries />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <UseFooter />
    </>
  );
}

export default App;
