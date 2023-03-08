import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
import { nanoid } from "nanoid";

function App() {
  const [sale, setSale] = useState([
    {
      id: nanoid(),
      name: "BMW",
    },
    {
      id: nanoid(),
      name: "Audi",
    },
    {
      id: nanoid(),
      name: "Suzuki",
    },
  ]);

  const input = useRef()

  const buyCar = (id) => {
    const filterList = sale.filter((item) => item.id !== id);
    const findCar = sale.find((item) => item.id === id);
    setOwned([...owned, findCar]);
    setSale(filterList);
  };

  const sellCar = (id) => {
    const filterList = owned.filter((item) => item.id !== id);
    const findCar = owned.find((item) => item.id === id);
    setSale([...sale, findCar]);
    setOwned(filterList);
  };

  const addCar = (e) => {
    e.preventDefault()
    setSale([...sale, {
      id: nanoid(),
      name: input.current.value
    }])
    console.log(input)
  };

  const [owned, setOwned] = useState([]);
  return (
    <div className="App">
      <h2>Cars for sale</h2>
      <form onSubmit={addCar}>
        <input ref={input} type="text" name="" />
        <button type="submit">Add new brand</button>
      </form>

      <ol>
        {sale?.map((item) => (
          <li>
            <span>{item.name}</span>
            <button onClick={() => buyCar(item.id)}>Buy</button>
          </li>
        ))}
      </ol>

      <h2>Owned Cars</h2>
      <ol>
        {owned?.map((item) => (
          <li>
            <span>{item.name}</span>
            <button onClick={() => sellCar(item.id)}>Sell</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;