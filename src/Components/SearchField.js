import { useContext } from "react";
import { Form } from "react-bootstrap";

import { MainContext } from "../Context/MainContext";

const SearchField = () => {
  const { setSearchKeyword, searchKeyword } = useContext(MainContext);

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchKeyword}
        />
      </Form.Group>
    </>
  );
};

export default SearchField;
