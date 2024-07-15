import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import classes from './product.module.css'

function Product() {
  const [product, setproduct] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <section className={classes.product_contanier}>
    {
      product?.map((singleProduct) => (
        <ProductList product={singleProduct} key={singleProduct.id} />
      ))
    }
  </section>;
}

export default Product;
