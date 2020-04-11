import React,{ useState,lazy,Suspense} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './assets/css/style.css';

// context
import ThemeContext  from './context/ThemeContext';
import { StateProvider } from './store';

// components
import Navbar from './components/Navbar/Navbar';

// pages
import Error from './views/Error';
const Home = lazy(() => import('./views/Home'));
const Checkout = lazy(() => import('./views/Checkout'));
const ProductDetails = lazy(() => import('./views/ProductDetails'));
const Cart = lazy(() => import('./components/Cart/Cart'));

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
              <Suspense fallback={<div><h2>Loading...</h2></div>}>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/product/:id" component={ProductDetails} />
                  <Route exact path="/checkout" component={Checkout} />
                  <Route path="*" component={Error} />
                </Switch>
                <Cart />
              </Suspense>
            </Router>
        </div>
      </ThemeContext.Provider>
    </StateProvider>
  );
}
export default App;
