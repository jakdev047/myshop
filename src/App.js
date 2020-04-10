import React,{ useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './assets/css/style.css';
// components
import Navbar from './components/Navbar/Navbar';

// pages
import Home from './views/Home';
import Checkout from './views/Checkout';
import ProductDetails from './views/ProductDetails';
import Error from './views/Error';

// context
import ThemeContext  from './context/ThemeContext';

const App = () => {
  
  const [keyword,setKeyword] = useState('');
  const [dark,setdark] = useState(false);

  const toggleDark = () => {
    setdark(isDark=>!isDark);
  }

  return (
    <ThemeContext.Provider value={{dark:dark,toggle:toggleDark}}>
      <div className="App">
          <Router>
            <Navbar setKeyword={setKeyword}/>
            <Switch>
              <Route exact path="/" component={()=><Home keyword={keyword}/>}/>
              <Route exact path="/product/:id" component={ProductDetails} />
              <Route exact path="/checkout" component={Checkout} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
