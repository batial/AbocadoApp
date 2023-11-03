import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

const home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window.fetch("/api/avo").then((res) =>
      res.json().then(({ data, length }) => {
        setProductList(data);
      })
    );
  },[]);

  return (
    <div>
      <NavBar />
      <h1>Hola mundo</h1>
      <div>
        {productList.map((product) => (
          <div>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default home;
