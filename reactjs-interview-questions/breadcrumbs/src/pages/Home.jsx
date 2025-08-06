import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);

  console.log("product", trendingProduct);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://dummyjson.com/products");

      console.log("res", res);

      const data = await res.json();
      console.log("data", data.products);
      const slicedTrendingPorducts = data.products.slice(0, 6);
      setTrendingProduct(slicedTrendingPorducts);
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <span className="home-span">Trending Products</span>

      <div className="product-grid">
        {trendingProduct?.map((product) => (
          <div key={product?.id} className="product-card">
            <Link to={`/products/${product?.id}`}>
              <img src={product.thumbnail}></img>
              <h3>{product?.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/products">
        <button>view all product</button>
      </Link>
    </div>
  );
};

export default Home;
