import React from "react";

import { Container, Row } from "react-bootstrap";
import { Main, Nav, SideBar } from "./Containers";
import "./styles.css";
import { makeStyles } from "./helpers";

export default function App() {
  const { containerMargin } = makeStyles();
  return (
    <Container style={containerMargin}>
      <Nav />
      <Row>
        <SideBar />
        <Main />
      </Row>
    </Container>
  );
}
