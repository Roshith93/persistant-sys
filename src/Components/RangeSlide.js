import React, { useContext } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { Form } from "react-bootstrap";

import { MainContext } from "../Context/MainContext";

const RangeSlide = () => {
  const { opacity, setOpacity } = useContext(MainContext);

  return (
    <>
      <Form.Label style={{ margin: "2px" }}>opacity</Form.Label>
      <RangeSlider
        min={0}
        max={1}
        step={0.1}
        tooltip="on"
        value={opacity}
        onChange={(changeEvent) => setOpacity(changeEvent.target.value)}
      />
    </>
  );
};
export default RangeSlide;
