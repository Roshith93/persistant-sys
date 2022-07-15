import { useState, useEffect } from "react";
import axios from "axios";

export const FetchData = (url) => {
  const [data, setData] = useState(url);
  const fetchData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data];
};
