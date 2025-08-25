import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [receipies, setReceipes] = useState([]);
  const [input, seTinput] = useState("");
  const [show, setShow] = useState(false);

  console.log(receipies);
  console.log("input", input);

  const fetchRecep = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const data = await res.json();
      setReceipes(data.recipes);
    } catch (err) {
      console.log("error", err);
      return err;
    }
  };

  useEffect(() => {
    fetchRecep();
  }, [input]);

  return (
    <>
      <div>
        <h1>Auto complete search bar</h1>

        <input
          value={input}
          onChange={(e) => seTinput(e.target.value)}
          placeholder="search for receipies"
          type="text"
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
      </div>

      {show && (
        <div className="result-container">
          {receipies.map((r) => (
            <span className="result">{r.name}</span>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
