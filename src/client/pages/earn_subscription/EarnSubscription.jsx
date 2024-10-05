import React, { lazy, useEffect, useState } from "react";
import "./earn_subscription.css";
import { Container } from "react-bootstrap";
import {
  Button,
  Card,
  CardAction,
  CardContent,
   Divider,
} from "ui-neumorphism";
import { CheckCircle, Star } from "@mui/icons-material";
import ApiClient from "../../../utils/apiClient/ApiClient";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
const EarnSubscription = () => {
  const [AllPlans, setAllPlans] = useState([]);
  const ClintApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  //////////////////////////////////////
  // FETCH ALL EARNING SUBSCRIPTION
  //////////////////////////////////////
  const fetch_earn_subscription = async () => {
    try {
      const response = await ClintApi.read(
        `api/earning/subscription`,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status === 200) {
        setAllPlans(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch_earn_subscription();
  }, []);
  return (
    <>
      <Header />
      <div className="earn_subscription">
        <Container>
          <div className="earn_subscription_wrapper">
            <div className="earn_subscription_header">
              <h3 className="earn_subscription_header_title">
                choose your plan
              </h3>
              <p className="earn_subscription_header_title_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt ipsum dignissimos eos ut quidem quaerat nostrum
                accusamus eum maiores?
              </p>
            </div>
            <Divider />
            <div className="earn_subscription_grid">
              {AllPlans.map((items, index) => (
                <Card key={index} className="earn_sub_card">
                  <CardContent>
                    <h3 className="earn_sub_card_title">
                      {items.earn_sub_name}
                    </h3>
                    <div style={{ textTransform: "capitalize" }}>
                      <span className="earn_sub_card_price">
                        ৳{items.earn_sub_price}
                      </span>
                      <sub>/month</sub>
                    </div>
                    <ul className="earn_sub_card_list">
                      <li>
                        <CheckCircle htmlColor="#232" fontSize="small" />{" "}
                        {items.earn_sub_ads_limit} ads click par day
                      </li>
                      <li>
                        <CheckCircle htmlColor="#232" fontSize="small" /> upto{" "}
                        {items.earn_sub_spin_limit}{" "}
                        spin a day
                      </li>
                      <li>
                        <CheckCircle htmlColor="#232" fontSize="small" />{" "}
                        {items.earn_sub_task_limit}{" "}
                        daily task
                      </li>
                    </ul>
                  </CardContent>
                  <CardAction>
                    <Button
                      style={{ width: "100%", margin: 2 }}
                      bordered={true}
                      depressed={true}
                    >
                      active plan
                    </Button>
                  </CardAction>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EarnSubscription;
