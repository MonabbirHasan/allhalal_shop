import React, { lazy, useContext, useState } from "react";
import "./earning.css";
import { AuthContext } from "../../../context/AuthContext";
import ApiClient from "../../../utils/apiClient/ApiClient";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "ui-neumorphism";
import { Wheel } from "react-custom-roulette";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { Box } from "@mui/material";
// import wheel_spin from "/"
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
const data = [
  { option: "10 Coins" },
  { option: "20 Coins" },
  { option: "30 Coins" },
  { option: "40 Coins" },
  { option: "50 Coins" },
  { option: "60 Coins" },
  { option: "70 Coins" },
  { option: "80 Coins" },
  { option: "90 Coins" },
  { option: "100 Coins" },
];
const Earning = () => {
  const navigation = useNavigate();
  const { AuthUser } = useContext(AuthContext);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState(null);
  /////////////////////////////////
  // INITIALIZE CLIENT API ROOT
  /////////////////////////////////
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  const audio = new Audio("/audio/wheel_spin.mp3");
  audio.volume = 1;
  const handleSpinClick = () => {
    audio.play();
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    let coins = data[prizeNumber].option.replace(/\D/g, "");
    setSelectedPrize(data[prizeNumber].option);
    update_user_coin(AuthUser.data.user.user_id, coins);
    console.log(coins);
    audio.pause();
  };
  //////////////////////////
  // UPDATE USER COINS
  /////////////////////////
  const update_user_coin = async (userid, coin) => {
    try {
      const data = {
        user_coin: coin,
        user_coin_user_id: userid,
        user_coin_status: "active",
      };
      const response = await ClientApi.create(
        `api/earning/user_coin`,
        data,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status === 201) {
        toast.success(`${coin} coin added to your account`);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <Header />
      <div className="earning-page">
        <Container>
          <div className="earning_page_wrapper">
            {/* SPIN WHEEL SECTION */}
            <section className="lucky_sping">
              <Box sx={{ textAlign: "center" }}>
                {selectedPrize && (
                  <div>
                    <h3>Congratulations! You won: {selectedPrize}</h3>
                  </div>
                )}
                <Card
                  inset={true}
                  className="my-2"
                  style={{
                    borderRadius: "100%",
                    border: "1px solid white",
                  }}
                >
                  <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    fontFamily="Helvetica"
                    fontSize={14}
                    textDistance={70}
                    startingOptionIndex={0}
                    onStopSpinning={handleStopSpinning}
                    backgroundColors={[
                      "green",
                      "orange",
                      "tomato",
                      "indigo",
                      "dodgerblue",
                    ]}
                    textColors={["white"]}
                    outerBorderWidth={1} // Remove outer border
                    innerBorderWidth={1} // Remove inner border
                    radiusLineWidth={1} // Remove radius lines
                    outerBorderColor="white"
                    innerBorderColor="green"
                    radiusLineColor=""
                    perpendicularText={true}
                  />
                </Card>
              </Box>
            </section>
            {/* EARN OPTION CARD SECTION */}
            <section
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,170px)",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>reffer and earn</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/external-konkapp-outline-color-konkapp/64/external-referral-marketing-and-growth-konkapp-outline-color-konkapp.png"
                  alt="external-referral-marketing-and-growth-konkapp-outline-color-konkapp"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    size="small"
                    depressed={true}
                    rounded={true}
                    bordered={true}
                  >
                    reffer friend
                  </Button>
                </p>
              </Card>
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>install app</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/fluency/48/download.png"
                  alt="download"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    depressed={true}
                    rounded={true}
                    bordered={true}
                    size="small"
                    onClick={() => navigation("/app_store")}
                  >
                    install app
                  </Button>
                </p>
              </Card>
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>click & earn</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/fluency/48/post-ads.png"
                  alt="post-ads"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    size="small"
                    depressed={true}
                    rounded={true}
                    bordered={true}
                  >
                    start earning
                  </Button>
                </p>
              </Card>
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>reword video</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/flat-round/50/play.png"
                  alt="play"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    size="small"
                    depressed={true}
                    rounded={true}
                    bordered={true}
                    onClick={() => navigation("reward-ads")}
                  >
                    watch video
                  </Button>
                </p>
              </Card>
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>exchange coin</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/pulsar-gradient/48/exchange-krone.png"
                  alt="exchange-krone"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    size="small"
                    depressed={true}
                    rounded={true}
                    bordered={true}
                  >
                    exchange coin
                  </Button>
                </p>
              </Card>
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>solve quize</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/color-glass/48/quiz.png"
                  alt="quiz"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    size="small"
                    depressed={true}
                    rounded={true}
                    bordered={true}
                  >
                    start quize
                  </Button>
                </p>
              </Card>
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>daily task</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/color/48/checklist.png"
                  alt="checklist"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    onClick={() => navigation("custom-ads")}
                    size="small"
                    depressed={true}
                    rounded={true}
                    bordered={true}
                  >
                    complete task
                  </Button>
                </p>
              </Card>
              <Card
                style={{ padding: 10, textAlign: "center" }}
                bordered={true}
              >
                <p style={{ textTransform: "capitalize" }}>subscription</p>
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/keek/100/subscription.png"
                  alt="subscription"
                />
                <p style={{ margin: 0, padding: 0, marginTop: 5 }}>
                  <Button
                    onClick={() => navigation("subscription")}
                    size="small"
                    depressed={true}
                    rounded={true}
                    bordered={true}
                  >
                    buy plan
                  </Button>
                </p>
              </Card>
            </section>
            <Button
              depressed={true}
              bordered={true}
              disabled={mustSpin}
              onClick={handleSpinClick}
              style={{
                width: "50%",
                position: "relative",
                left: "25%",
                top: 20,
                fontWeight: "bold",
              }}
              rounded={true}
            >
              {mustSpin ? "Spinning..." : "Spin"}
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Earning;
