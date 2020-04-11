import React,{ useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './assets/css/style.css';
// components
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';

// pages
import Home from './views/Home';
import Checkout from './views/Checkout';
import ProductDetails from './views/ProductDetails';
import Error from './views/Error';

// context
import ThemeContext  from './context/ThemeContext';
import { StateProvider } from './store';

const App = () => {
  const [dark,setdark] = useState(false);

  const toggleDark = () => {
    setdark(isDark=>!isDark);
  }

  return (
    <StateProvider>
      <ThemeContext.Provider value={{dark:dark,toggle:toggleDark}}>
        <div className="App">
            <Router>
              <Navbar/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product/:id" component={ProductDetails} />
                <Route exact path="/checkout" component={Checkout} />
                <Route path="*" component={Error} />
              </Switch>
              <Cart />
            </Router>
        </div>
      </ThemeContext.Provider>
    </StateProvider>
  );
}

export default App;
