import React,{useState , useEffect} from "react";

const useFatch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return [data];
};

export default useFatch;
