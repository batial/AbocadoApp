import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

const home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window.fetch("/api/avo").then((res) =>
      res.json().then(({ data, length }) => {
        setProductList(data);
      })
    );
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Hola mundo</h1>
      <div>
        {productList.map((product) => (
          <Link href={`/api/avo/${product.id}`}>
            <div>{product.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default home;
