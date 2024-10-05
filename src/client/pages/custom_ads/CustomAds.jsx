import React, { lazy } from "react";
import "./custom_ads.css";
import { Container } from "react-bootstrap";
import CustomAdsCard from "../../components/custom_ads_card/CustomAdsCard";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
import { Card, CardContent } from "ui-neumorphism";
const CustomAds = () => {
  return (
    <>
      <Header />
      <div className="custom_ads">
        <Container>
          <div className="custom_ads_wrapper">
            {/* ADS INFO HEADER */}
            <Card bordered={true} rounded={false}>
              <CardContent>
                <h4 className="custom_ad_title">
                  you have purchased standard subscription plan. you can click
                  only 20 ads daily
                </h4>
              </CardContent>
            </Card>
            {/* CUSTOM ADS CARD SECTION */}
            <div className="custom_ads_grid">
              {Array.from({ length: 20 }).map((items) => {
                return <CustomAdsCard />;
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CustomAds;
