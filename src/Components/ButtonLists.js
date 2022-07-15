import { useContext } from "react";

import { ListGroup, Button } from "react-bootstrap";

import { MainContext } from "../Context/MainContext";
import { buttonItems } from "../helpers";

const ButtonLists = () => {
  const { category, setCategory, setSearchKeyword } = useContext(MainContext);
  const handleCategory = (val) => {
    setCategory(val);
    setSearchKeyword("");
  };
  return (
    <>
      <ListGroup>
        {buttonItems.map((el) => {
          return (
            <Button
              variant={category === el.value ? "primary" : "default"}
              style={{ margin: "5px" }}
              key={el.value}
              onClick={() => handleCategory(el.value)}
            >
              {el.label}
            </Button>
          );
        })}
      </ListGroup>
    </>
  );
};

export default ButtonLists;
