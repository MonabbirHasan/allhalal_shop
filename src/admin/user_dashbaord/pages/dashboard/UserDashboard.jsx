import React from "react";
import "./user_dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../../../components/feature_card/FeatureCard";
import { StackedLineChartSharp } from "@mui/icons-material";
const UserDashboard = () => {
  return (
    <div className="user_dashboard">
      <Container>
        <div className="user_dashboard_wrapper">
          <section className="user_features_section">
            <Row lg={4}>
              <Col>
                <FeatureCard
                  card_title="reffer earning"
                  card_number={`$${324}`}
                  has_button={false}
                  card_width={"100%"}
                  card_height={"140px"}
                  chart_color="red"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                />
              </Col>
              <Col>
                <FeatureCard
                  card_title="reffer users"
                  card_number={`$${324}`}
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
                  card_title="total spent"
                  card_number={`$${324}`}
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
                  card_title="total balance"
                  card_number={`$${324}`}
                  card_width={"100%"}
                  card_height={"140px"}
                  has_button={true}
                  chart_color="dodgerblue"
                  chart_size="medium"
                  card_date={new Date().toLocaleDateString()}
                  buttons={[
                    {
                      btn_title: "Add Fund",
                      btn_to: "/add_funds",
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
          </section>
        </div>
      </Container>
    </div>
  );
};

export default UserDashboard;
