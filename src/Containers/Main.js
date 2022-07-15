import { Col } from "react-bootstrap";
import { ImageLists } from "../Components";

const Main = () => {
  return (
    <>
      <Col sm="9" style={{ display: "flex", flexWrap: "wrap" }}>
        <ImageLists />
      </Col>
    </>
  );
};

export default Main;
