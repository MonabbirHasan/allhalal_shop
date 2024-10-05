import React from "react";
import "./user_dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../../../components/feature_card/FeatureCard";
import { Box } from "@mui/material";
const SectionTitle = ({ title }) => {
  return (
    <Box sx={{ paddingLeft: 2 }}>
      <span style={{ textTransform: "capitalize", color: "#232" }}>
        {title}
      </span>
    </Box>
  );
};
const UserDashboard = ({ handleOpenWallet }) => {
  return (
    <div className="user_dashboard">
      <Container>
        <div className="user_dashboard_wrapper">
          <section className="user_features_section">
            {/* FINANCIAL */}
            <SectionTitle title="Financial" />
            <Row lg={5}>
              <Col>
                <FeatureCard
                  card_title="Total Withdraw"
                  card_number={`$${20}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  buttons={[
                    {
                      onClick: () => handleOpenWallet(),
                      btn_title: "wallet",
                      btn_to: "wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="fund added"
                  card_number={`$${100}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "add fund",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  chart_color="purple"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="total balance"
                  card_number={`$${1000}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "check",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="Total Earnings"
                  card_number={`$${1000}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "withdraw",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="monthly income"
                  card_number={`$${1000}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "withdraw",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                />
              </Col>
            </Row>
            {/* MARKETPALCE */}
            <SectionTitle title="Marketplace" />
            <Row lg={4}>
              <Col>
                <FeatureCard
                  card_title="total order"
                  card_number={`${20}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "see order",
                      btn_to: "store/orders",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "green",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="today order"
                  card_number={`${20}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={false}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="favorit product"
                  card_number={`${30}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "order now",
                      btn_to: "store/orders",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "black",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="cart product"
                  card_number={`${30}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "check cart",
                      btn_to: "store/orders",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "black",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
            </Row>
            {/* EARNINGS */}
            <SectionTitle title="Earnings" />
            <Row lg={5}>
              <Col>
                <FeatureCard
                  card_title="Total Coins"
                  card_number={400}
                  has_button={false}
                  buttons={[
                    {
                      btn_title: "Eearn Coins",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="Today Coins"
                  card_number={400}
                  has_button={false}
                  buttons={[
                    {
                      btn_title: "Eearn Coins",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="dodgerblue"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="Today Earning"
                  card_number={`$${20}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={false}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="spin earning"
                  card_number={`$${100}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={false}
                  chart_color="purple"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="Ads Earning"
                  card_number={`$${1000}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={false}
                  chart_color="dodgerblue"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "wallet",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="reffer earning"
                  card_number={`$${1000}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={false}
                  chart_color="dodgerblue"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "wallet",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="Install app earning"
                  card_number={`$${1000}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={false}
                  chart_color="dodgerblue"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "wallet",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="social earning"
                  card_number={`$${1000}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={false}
                  chart_color="dodgerblue"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "wallet",
                      btn_to: "/wallet",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                />
              </Col>
            </Row>
            {/* CONNECTIFY */}
            <SectionTitle title="Connectify" />
            <Row lg={5}>
              <Col>
                <FeatureCard
                  card_title="total post"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "check post",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="today post"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "upload new",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="total story"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "share story",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="total comment"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "read comment",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="total followers"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "make follower",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="total following"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "follow new",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="total friend"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "make new friend",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="post you liked"
                  card_number={400}
                  has_button={true}
                  buttons={[
                    {
                      btn_title: "make new friend",
                      btn_to: "/earn_coins",
                      btn_variant: "outlined",
                      btn_size: "small",
                      btn_bgcolor: "#232",
                      btn_textcolor: "white",
                      btn_txt_style: "capitalize",
                    },
                  ]}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="green"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
            </Row>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default UserDashboard;
