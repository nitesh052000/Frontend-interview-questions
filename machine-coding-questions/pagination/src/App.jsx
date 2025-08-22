import { useEffect, useState } from "react";
import "./App.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

const PAGE_SIZE = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  console.log("cureent", currentPage);

  console.log("product", products);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=60");

      const data = await res.json();
      setProducts(data?.products);
    };
    fetchProduct();
  }, []);

  const totalProducts = products.length;

  const noofPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const handleLeft = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleRight = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="products-container">
        {products.length > 0 &&
          products
            .slice(start, end)
            .map((item) => (
              <ProductCard
                key={item.id}
                image={item.thumbnail}
                title={item.title}
              />
            ))}
      </div>

      <div className="pagination-container">
        <button disabled={currentPage === 0} onClick={() => handleLeft()}>
          ⬅️
        </button>
        {[...Array(noofPages).keys()].map((n) => (
          <button
            onClick={() => handlePageChange(n)}
            className="pagenumber"
            key={n}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noofPages - 1}
          onClick={() => handleRight()}
        >
          ➡️
        </button>
      </div>
    </>
  );
}

export default App;
