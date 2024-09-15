import React, { Suspense, useEffect } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { overrideThemeVariables } from "ui-neumorphism";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "./assets/css/media-query.css";
import "ui-neumorphism/dist/index.css";
import "./assets/css/style.css";
import {
  ApplicationMain,
  NewsBlog,
  About,
  Contact,
  Error404,
  CookiePolicy,
  HelpSupport,
  Privacy,
  Faq,
  BlogDetails,
  Tools,
  HelpCenter,
  ClothHomePage,
  ApphHomePage,
  ArtHomePage,
  BookHomePage,
  OnDemandHomePage,
  HandmadeHomePage,
} from "./client/pages/index";
import {
  UserDashboardSidebar,
  VendorDashboardSidebar,
  AdvertisorDashboardSidebar,
  AdminDashboardSidebar,
} from "./admin/index";
import SignUp from "./authentication/signup/SignUp";
import SignIn from "./authentication/signin/SignIn";
import { toast, ToastContainer } from "react-toastify";
const App = () => {
  useEffect(() => {
    if (navigator.onLine === false) {
      toast.error("You'r Disconnected to the internate");
    }
  }, []);
  // useEffect(() => {
  //   overrideThemeVariables({
  //     "--light-bg": "#E9B7B9",
  //     "--light-bg-dark-shadow": "#ba9294",
  //     "--light-bg-light-shadow": "#ffdcde",
  //     "--dark-bg": "#292E35",
  //     "--dark-bg-dark-shadow": "#21252a",
  //     "--dark-bg-light-shadow": "#313740",
  //     "--primary": "#8672FB",
  //     "--primary-dark": "#4526f9",
  //     "--primary-light": "#c7befd",
  //   });
  // }, []);
  return (
    <div>
      <ToastContainer />
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <BrowserRouter>
          <Routes>
            <Route path="/news_blog/:slug" element={<BlogDetails />} />
            <Route path="/cookie_policy" element={<CookiePolicy />} />
            <Route path="/help_support" element={<HelpSupport />} />
            <Route path="/privacy_policy" element={<Privacy />} />
            <Route path="/help_center" element={<HelpCenter />} />
            <Route path="/news_blog" element={<NewsBlog />} />
            <Route path="/" element={<ApplicationMain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* CLOTH STORE ROUTE START HERE */}
            <Route path="/cloth_store">
              <Route path="" element={<ClothHomePage />} />
            </Route>
            {/* APP STORE ROUTE */}
            <Route path="/app_store">
              <Route path="" element={<ApphHomePage />} />
            </Route>
            {/* ART STORE ROUTE */}
            <Route path="/art_store">
              <Route path="" element={<ArtHomePage />} />
            </Route>
            {/* BOOK STORE ROUTE */}
            <Route path="/book_store">
              <Route path="" element={<BookHomePage />} />
            </Route>
            {/* ONE DEMAND STORE ROUTE */}
            <Route path="/one_demand_store">
              <Route path="" element={<OnDemandHomePage />} />
            </Route>
            {/* ONE DEMAND STORE ROUTE */}
            <Route path="/hand_made_store">
              <Route path="" element={<HandmadeHomePage />} />
            </Route>
            {/* USER DASHBOARD PAGE ROUTE START HERE */}
            <Route path="/my_dashboard" element={<UserDashboardSidebar />} />
            {/* VENDORS DASHBOARD PAGE ROUTE START HERE */}
            <Route
              path="/vendor_dashboard"
              element={<VendorDashboardSidebar />}
            />
            {/* ADVERTISOR DASHBOARD PAGE ROUTE START HERE */}
            <Route
              path="/advertisor_dashboard"
              element={<AdvertisorDashboardSidebar />}
            />
            {/* ADMIIN DASHBOARD PAGE ROUTE START HERE */}
            <Route
              path="/admin_dashboard"
              element={<AdminDashboardSidebar />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
