
import React, { useState } from "react";
import Cart from "./components/Home/Cart";
//import Home from "./components/Home/Home";

const App = () => {
  // const [value, setvalue] = useState("hello world");
  // const item = () => {
  //   setvalue("hyy i'm here");
  // };

  return (
    <div>
      {/* <Home store={value} item={item} /> */}
      <Cart />
    </div>
  );
};

export default App;
