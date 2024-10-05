import React, { lazy } from "react";
import "./reward_ads.css";
import { Container } from "react-bootstrap";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
import { Card, CardContent } from "ui-neumorphism";
import RewardAdsCard from "../../components/reward_ads_card/RewardAdsCard";
const RewardAds = () => {
  return (
    <>
      <Header />
      <div className="reward_ads">
        <Container>
          <div className="reward_ads_wrapper">
            <Card>
              <CardContent>
                <h4 className="custom_ad_title">
                  Watch the video and earn rewards!
                </h4>
              </CardContent>
            </Card>
            <div className="reward_ads_grid">
              {Array.from({ length: 20 }).map((items) => {
                return <RewardAdsCard />;
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default RewardAds;
