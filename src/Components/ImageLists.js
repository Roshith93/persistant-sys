import { useContext } from "react";

import { Card } from "react-bootstrap";
import { FetchData } from "../customHooks/FetchData";
import { MainContext } from "../Context/MainContext";
import ProgressiveImg from "./ProgressiveImg";
import placeholderSrc from "../images/tiny.jpg";

import { BASE_URL2 } from "../helpers/index";

const ImageLists = () => {
  const [data] = FetchData(BASE_URL2);
  const { category, searchKeyword } = useContext(MainContext);
  let imageLists = data[category];
  let filteredData =
    imageLists &&
    imageLists.filter((el) => el.text.toLowerCase().includes(searchKeyword));
  return (
    <>
      {filteredData && filteredData.length ? (
        filteredData.map(({ text, image }) => {
          return (
            <Card style={{ width: "250px", margin: "5px" }} key={text}>
              <ProgressiveImg
                placeholderSrc={placeholderSrc}
                src={image}
                alt={text}
              />

              <Card.Body>
                <Card.Title>{text}</Card.Title>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <h3>No search Found</h3>
      )}
    </>
  );
};

export default ImageLists;
