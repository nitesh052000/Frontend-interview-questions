import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [product, setProduct] = useState([]);

  console.log("prooo", product);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");

        const data = await res.json();

        setProduct(data?.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1>Product Listing</h1>
      {product.map((prod) => (
        <div key={prod?.id} className="product-card">
          <Link to={`/products/${prod?.id}`}>
            <img src={prod?.thumbnail} alt={prod.title} />
            <h3>{prod.title}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductListing;
