import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productDetails, setProductDetail] = useState();

  console.log("data", productDetails);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [id]);

  return (
    <div>
      <h2>Product detail page</h2>
      {productDetails ? (
        <div>
          <img src={productDetails?.thumbnail} alt="product" />
          <h3>{productDetails?.title}</h3>
          <h3>${productDetails?.price}</h3>
          <p>{productDetails?.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetail;
