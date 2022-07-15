import { useState, useEffect, useContext } from "react";

import { Card } from "react-bootstrap";
import { MainContext } from "../Context/MainContext";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const { opacity } = useContext(MainContext);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  return (
    <>
      <Card.Img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ""}
        className={`image ${customClass}`}
        variant="top"
        height="200px"
        style={{ opacity }}
      />
    </>
  );
};
export default ProgressiveImg;
