import React from "react";
import { Badge, Container, Table } from "react-bootstrap";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
} from "ui-neumorphism";
import "./wallet.css";
import { FormControl, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";
const Wallet = () => {
  return (
    <div className="user_wallet_page">
      <Container>
        <div className="user_wallet_wrapper">
          {/* WALLET HEADER */}
          <div className="user_wallet_header">
            <Card
              style={{ padding: 2 }}
              rounded={true}
              bordered={true}
              elevation={1}
            >
              <CardContent>
                <Stack>
                  <div className="curent_balance">
                    <h4
                      style={{
                        textTransform: "capitalize",
                        color: "#232",
                        fontSize: 20,
                      }}
                    >
                      your current balance
                    </h4>
                    <h1
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        color: "#232",
                        fontSize: 25,
                        textAlign: "center",
                      }}
                    >
                      ৳432
                    </h1>
                  </div>
                  <Divider style={{ padding: "5px 0" }} />
                  <div className="curent_coins">
                    <h4
                      style={{
                        textTransform: "capitalize",
                        color: "#232",
                        fontSize: 20,
                      }}
                    >
                      your current coins
                    </h4>
                    <h1
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        color: "#232",
                        fontSize: 25,
                        textAlign: "center",
                      }}
                    >
                      <img
                        width="35"
                        height="35"
                        src="https://img.icons8.com/fluency/48/stack-of-coins.png"
                        alt="stack-of-coins"
                      />
                      5000
                    </h1>
                  </div>
                </Stack>
                {/* CARD ACUTION */}
                <Stack spacing={1}>
                  <Button
                    style={{ width: "100%" }}
                    depressed={true}
                    bordered={true}
                    rounded={true}
                  >
                    withdraw
                  </Button>
                  <Button
                    style={{ width: "100%" }}
                    depressed={true}
                    bordered={true}
                    rounded={true}
                  >
                    add fund
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </div>
          {/* TRANSACTION TABLE */}
          <div className="user_wallet_table">
            <Card
              style={{ padding: 2 }}
              elevation={1}
              rounded={true}
              bordered={true}
            >
              <CardHeader>
                <FormControl>
                  <Card inset={true}>
                    <select
                      style={{
                        background: "transparent",
                        border: "none",
                        padding: 10,
                        outline: "none",
                        border: "1px solid white",
                        borderRadius: 6,
                      }}
                    >
                      <option value="">How are you</option>
                      <option value="">How are you</option>
                      <option value="">How are you</option>
                      <option value="">How are you</option>
                      <option value="">How are you</option>
                    </select>
                  </Card>
                </FormControl>
                <FormControl sx={{ ml: 1 }}>
                  <IconButton active={true} rounded={true}>
                    <Search />
                  </IconButton>
                </FormControl>
              </CardHeader>
              <CardContent>
                <Table style={{ marginTop: 10 }} hover striped bordered>
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>email</th>
                      <th>phone</th>
                      <th>method</th>
                      <th>amount</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 20 }).map((items, index) => (
                      <tr key={index}>
                        <td>monabbirhasan</td>
                        <td>hasan@gmail.com</td>
                        <td>+8801245632</td>
                        <td>bkash</td>
                        <td>৳200.00</td>
                        <td>
                          <Badge bg="success">complete</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Wallet;
