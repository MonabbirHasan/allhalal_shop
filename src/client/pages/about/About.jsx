import React, { lazy } from "react";
import "./about.css";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Header = lazy(() => import("../../components/common/header/Header"));
import founder from "../../../assets/img/founder.jpg";
import { Facebook, LinkedIn, Mail, Shop2, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Card } from "ui-neumorphism";
const About = () => {
  return (
    <div>
      <Header />
      <div className="about_page">
        <Container>
          <div className="about_wrapper">
            {/* FOUNDER PROFILE START HERE */}
            <div className="founder_profile">
              <div className="founder_profile_wrapper">
                <Card inset={true} elevation={5} rounded={false} style={{padding:10}}>
                  <LazyLoadImage src={founder} />
                </Card>
              </div>
            </div>
            {/* ABOUT CONTENT START HERE */}
            <div className="about_content">
              <h1>About</h1>
              <p>
                Welcome to our one-stop online marketplace, where we strive to
                meet all your shopping needs while adhering to Islamic values
                and principles. Our platform is designed to cater to a wide
                range of interests and necessities, offering a diverse selection
                of products and services, including:
              </p>
              <ul>
                <li>
                  <mark>Islamic Book Shop</mark>: Discover a vast collection of
                  Islamic literature, including Quranic texts, Hadiths,
                  religious guides, and educational materials for all ages.
                </li>
                <li>
                  <mark>Islamic Clothing Shop</mark>: Find modest and stylish
                  clothing options that reflect Islamic values. Customize your
                  outfits with our print-on-demand service, allowing you to
                  create unique designs on various fabrics.
                </li>
                <li>
                  <mark>Doctor Consultation</mark>: Access online doctor
                  consultations with qualified healthcare professionals,
                  providing medical advice and prescriptions from the comfort of
                  your home.
                </li>
                <li>
                  <mark>Halal Perfume Shop</mark>: Explore a variety of
                  halal-certified perfumes, crafted with natural and permissible
                  ingredients.
                </li>
                <li>
                  <mark>Islamic Medicine Shop</mark>: Purchase traditional
                  Islamic medicines and remedies, including herbal supplements
                  and health products.
                </li>
                <li>
                  <mark>Print-on-Demand Service</mark>: Design your own clothing
                  and accessories with personalized prints, perfect for gifts or
                  unique wardrobe additions.
                </li>
                <li>
                  <mark>Social Network for Muslims</mark>: Connect with fellow
                  Muslims worldwide, share your thoughts, post updates, and
                  engage in meaningful discussions.
                </li>
                <li>
                  <mark>App Store</mark>: Browse and download a selection of
                  apps designed to enhance your Islamic lifestyle, including
                  educational tools, prayer time reminders, and more.
                </li>
                <li>
                  <mark>Grocery Shop</mark>: Shop for halal-certified groceries,
                  fresh produce, and pantry staples, ensuring your kitchen is
                  stocked with permissible and high-quality food items.
                </li>
                <li>
                  <mark>Electronic Shop</mark>: Purchase the latest electronic
                  gadgets and devices, from smartphones and laptops to home
                  appliances and accessories.
                </li>
                <li>
                  <mark>And More</mark>: Our platform is continuously expanding
                  to include new categories and services to better serve our
                  diverse customer base.
                </li>
              </ul>
            </div>
            <div className="about_mission">
              <h5>Our Mission</h5>
              <p>
                Our platform was founded by Monabbir Hasan, a dedicated
                full-stack developer with a passion for creating technology
                solutions that make a positive impact on people's lives.
                Monabbir Hasan's expertise in web development and his commitment
                to Islamic values have been the driving forces behind the
                creation of this unique online marketplace.
              </p>
              <p>
                Monabbir Hasan's vision is to build a community-centric platform
                that not only offers a wide range of products and services but
                also fosters a sense of belonging and connection among its
                users. With a deep understanding of the needs and preferences of
                the Muslim community, Monabbir Hasan has meticulously crafted
                this platform to ensure it provides value, convenience, and an
                exceptional user experience.
              </p>
            </div>
            <div className="about_our_values">
              <h5>Our Values</h5>
              <ul>
                <li>
                  <mark>Integrity</mark>: We are committed to maintaining the
                  highest standards of honesty and transparency in all our
                  dealings.
                </li>
                <li>
                  <mark>Quality</mark>: We strive to offer high-quality products
                  and services that meet the expectations and needs of our
                  customers.
                </li>
                <li>
                  <mark>Community</mark>: We believe in the power of community
                  and aim to create a platform that connects and supports
                  Muslims around the world.
                </li>
                <li>
                  <mark>Innovation</mark>: We continuously seek to innovate and
                  improve our platform to provide a seamless and enjoyable
                  shopping experience.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
