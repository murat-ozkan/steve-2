import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Steve"); //! Text
  const [number, setNumber] = useState(30); //! Number
  const [friends, setFriends] = useState(["Resul", "Canan"]); //! Array
  const [adres, setAdres] = useState({ title: "Istanbul", zip: 34225 }); //! Object

  const { title, zip, ilce } = adres;

  const [count, setCount] = useState(0);
  const [text, setText] = useState("0 is an even number.");

  const inc = () => {
    if (count < 100) {
      setCount(count + 1);
      if (count % 2 == 0) {
        setText(`${count + 1} is an odd number.`);
      } else {
        setText(`${count + 1} is an even number.`);
      }
    }
  };
  const reset = () => {
    setCount(0);
    setText("0 is an even number.");
  };

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
      if (count % 2 == 0) {
        setText(`${count - 1} is an odd number.`);
      } else {
        setText(`${count - 1} is an even number.`);
      }
    }
  };

  return (
    <div className="App">
      <h1>UseState Hook</h1>
      <hr />
      <div className="text-number">
        <h3>Hello. It is {name}.</h3>
        <h3>I am {number} years old.</h3>
        <button onClick={() => setName("Leo")}>Change The Name</button>
        <button onClick={() => setNumber(26)}>Change The Number</button>
        <hr />
      </div>
      <div className="array">
        {friends.map((item) => {
          return <div>{item}</div>;
        })}
        <button
          onClick={() => setFriends(["Tuğba", ...friends, "Murat", "Ahmet"])}
        >
          Add New Friend
        </button>
        <hr />
      </div>
      <div className="object">
        <div>
          {/* {adres.title} {adres.zip} */}
          {title} {zip} {ilce}
        </div>
        <button
          onClick={() =>
            setAdres({ ...adres, title: "Ankara", zip: 9600, ilce: "Keçiören" })
          }
        >
          Change The Adress
        </button>
        <hr />
      </div>
      <div className="counter">
        <h1>{count}</h1>
        <h3>{text}</h3>
        {/* <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button> */}
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}

export default App;
