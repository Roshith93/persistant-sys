import { Col } from "react-bootstrap";

import { RangeSlide, ButtonLists } from "../Components";

const SideBar = () => {
  return (
    <>
      <Col sm="3">
        <ButtonLists />
        <div style={{ display: "flex" }}>
          <RangeSlide />
        </div>
      </Col>
    </>
  );
};

export default SideBar;
