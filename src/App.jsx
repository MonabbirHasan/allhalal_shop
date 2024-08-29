import React, { Suspense, useEffect } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { overrideThemeVariables } from "ui-neumorphism";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
} from "./client/pages/index";
import {
  UserDashboardSidebar,
  VendorDashboardSidebar,
  AdvertisorDashboardSidebar,
  AdminDashboardSidebar,
} from "./admin/index";
import SignUp from "./authentication/signup/SignUp";
import { ToastContainer } from "react-toastify";
import SignIn from "./authentication/signin/SignIn";
const App = () => {
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
            <Route path="/cookie_policy" element={<CookiePolicy />} />
            <Route path="/help_support" element={<HelpSupport />} />
            <Route path="/privacy_policy" element={<Privacy />} />
            <Route path="/news_blog" element={<NewsBlog />} />
            <Route path="/news_blog/:slug" element={<BlogDetails />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/" element={<ApplicationMain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
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
