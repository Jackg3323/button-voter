import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";

const choices = [
  {
    txt: "Rock",
    bgColor: "red",
  },
  {
    txt: "Paper",
    bgColor: "indigo",
  },
  {
    txt: "Scissors",
    bgColor: "green",
  },
];

const imgUrl = "https://i.imgur.com/yXOvdOSs.jpg";
const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <h1 className="my-8 text-center text-3xl">Hello {name}</h1>

      {/* Conditional Rendering */}
      {name && <Profile name={name} imgUrl={imgUrl} />}
      <Form setName={setName} />
      <Products products={products} />

      {choices.map((choice) => (
        <Button
          key={choice.txt}
          txt={choice.txt}
          bgColor={choice.bgColor}
          clickHandler={() => {
            console.log("click");
          }}
        />
      ))}
    </>
  );
}

export default App;
