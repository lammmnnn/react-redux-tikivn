import React from 'react';
import {HeaderComp} from "./components/HeaderComp";
import {MainComp} from "./components/MainComp";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {navigatePage, selectCurrentPage} from "./features/counter/counterSlice";
import {CartPageComp} from "./components/CartPageComp";

function App() {
    let mainComp;
    const toPage = useAppSelector(selectCurrentPage);

    switch (toPage) {
        case "main": {
            mainComp = <MainComp/>;
            break;
        }
        case "cart": {
            mainComp = <CartPageComp/>;
            break;
        }
    }
  return (
    <div className="App">
      <div className='home-page'>
        <HeaderComp />
          {mainComp}
      </div>
    </div>
  );
}

export default App;
