import { Row, Col } from "react-bootstrap";
import { SearchField } from "../Components";

const Nav = () => {
  return (
    <Row className="justify-content-md-center">
      <Col lg="6">
        <SearchField />
      </Col>
    </Row>
  );
};

export default Nav;
