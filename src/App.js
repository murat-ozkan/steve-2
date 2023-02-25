import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Steve");
  const [number, setNumber] = useState(30);
  const [friends, setFriends] = useState(["Resul", "Canan"]);
  const [adres, setAdres] = useState({ title: "Istanbul", zip: 34225 });
  const { title, zip, ilce } = adres;
  const [count, setCount] = useState(0);
  const [text, setText] = useState("aaaa");
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
      if (count % 2 == 0) {
        setText(`${count - 1} tek sayıdır.`);
      } else {
        setText(`${count - 1} çift sayıdır.`);
      }
    }
  };
  const inc = () => {
    if (count < 100) {
      setCount(count + 1);
      if (count % 2 == 0) {
        setText(`${count + 1} tek sayıdır.`);
      } else {
        setText(`${count + 1} çift sayıdır.`);
      }
    }
  };
  return (
    <div className="App">
      <h1>UseState Hook</h1>
      <h3>Merhaba. Ben {name}.</h3>
      <h3>{number} yaşındayım.</h3>
      <button onClick={() => setName("Leo")}>Change Name</button>
      <button onClick={() => setNumber(26)}>Change Number</button>
      <hr />
      {friends.map((item) => {
        return <div>{item}</div>;
      })}
      <button
        onClick={() => setFriends(["Tuğba", ...friends, "Murat", "Ahmet"])}
      >
        Add New Friend
      </button>
      <hr />
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
      <h1>{count}</h1>
      <h3>{text}</h3>
      {/* <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button> */}
      <button onClick={dec}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default App;
