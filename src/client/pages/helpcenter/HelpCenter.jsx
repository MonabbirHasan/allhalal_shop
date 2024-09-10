import React, { lazy } from "react";
import { Container } from "react-bootstrap";
import "./helpcenter.css";
import { Card } from "ui-neumorphism";
import {
  AccountBoxSharp,
  BackHand,
  ChatSharp,
  GifBox,
  HelpCenterSharp,
  HelpSharp,
  LocalShippingOutlined,
  Lock,
  Payments,
  ProductionQuantityLimitsSharp,
  Sell,
  Support,
  SupportAgent,
  Wallet,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));

const HelpCenter = () => {
  const data = [
    {
      icons:
        "https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-12-business-intelligence-vectorslab-glyph-vectorslab.png",
      title: "Account Management",
      route: "",
    },
    {
      icons: "https://img.icons8.com/ios/50/trust--v1.png",
      title: "Trust & Safety",
      route: "",
    },
    {
      icons: "https://img.icons8.com/ios/50/shopping-cart-loaded--v1.png",
      title: "Buying",
      route: "",
    },
    {
      icons:
        "https://img.icons8.com/external-outline-lafs/64/external-payments-iiot-outline-iconset-outline-lafs.png",
      title: "Payments & Withdrawals",
      route: "",
    },
    {
      icons:
        "https://img.icons8.com/external-outline-design-circle/66/external-Order-Management-e-commerce-outline-design-circle.png",
      title: "Order Management",
      route: "",
    },
    {
      icons:
        "https://img.icons8.com/external-others-iconmarket/64/external-selling-cyber-monday-others-iconmarket-3.png",
      title: "Selling",
      route: "",
    },
    {
      icons: "https://img.icons8.com/ios/50/post-ads.png",
      title: "Advertising",
      route: "",
    },
    {
      icons: "https://img.icons8.com/ios/50/technical-support.png",
      title: "Vendor & Advertiser Support",
      route: "",
    },
    {
      icons: "https://img.icons8.com/dotty/80/scales.png",
      title: "Legal & Compliance",
      route: "",
    },
    {
      icons:
        "https://img.icons8.com/external-good-lines-kalash/32/external-technical-untact-economy-good-lines-kalash.png",
      title: "Technical Support",
      route: "",
    },
  ];
  return (
    <>
      <Header />
      <div className="helpcenter">
        <Container>
          <div className="helpcenter_wrapper">
            <div className="helpcenter_grid">
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <SupportAgent fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  help and support
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <ChatSharp fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  chat with us
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <LocalShippingOutlined fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  shipping and delivery
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/external-box-logistics-delivery-icongeek26-outline-icongeek26.png"
                    alt="external-box-logistics-delivery-icongeek26-outline-icongeek26"
                  />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Orders
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <Payments fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Payments
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <AccountBoxSharp fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Accounts
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <BackHand fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Refund & return
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <Wallet fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Withdraw
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <Sell fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Selling on Fiverr
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/external-others-pike-picture/50/external-Order-Management-procurement-others-pike-picture-2.png"
                    alt="external-Order-Management-procurement-others-pike-picture-2"
                  />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Order management
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios/50/product--v1.png"
                    alt="product--v1"
                  />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Products
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <Lock fontSize="large" />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Trust and safety
                </Typography>
              </Card>
              <Card className="global_card_border">
                <Typography textAlign="center">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-regulations-law-and-justice-kmg-design-detailed-outline-kmg-design.png"
                    alt="external-regulations-law-and-justice-kmg-design-detailed-outline-kmg-design"
                  />
                </Typography>
                <Typography
                  textAlign="center"
                  textTransform="capitalize"
                  fontWeight="500"
                >
                  Regulations & guidelines
                </Typography>
              </Card>
              {data.map((items, index) => (
                <Card key={index} className="global_card_border">
                  <Typography textAlign="center">
                    <img
                      width="40"
                      height="40"
                      src={items.icons}
                      alt="skype-for-business"
                    />
                  </Typography>
                  <Typography
                    textAlign="center"
                    textTransform="capitalize"
                    fontWeight="500"
                  >
                    {items.title}
                  </Typography>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HelpCenter;
