import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandelar = ()=>{
    setCartIsShown(true)
  };
  const cartHideHandelar = ()=>{
    setCartIsShown(false)
  };


  return (
    <>
      {cartIsShown && <Cart onClose={cartHideHandelar}/>}
      <Header onShowCart={cartShownHandelar}></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
