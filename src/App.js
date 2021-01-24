import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero'; 
import Products from './components/Products';
import {ProductData} from './components/Products/data';
import ToDos from './components/ToDos';

function App() {
  return (
    <Router>
    <GlobalStyle />
    <nav>
      <ul>
        <li>
          <Link to ='/'> Home</Link>
        </li>
        <li>
          <Link to ='/about'> aboutpage</Link>
        </li>
        <li>
          <Link to ='/contact'> contact us</Link>
        </li>
      </ul>
    </nav>
     <Switch>
       <Route path= '/about'>
        <h1>about page</h1>
       </Route>
       <Route path= '/contact'>
         <h1>hello bihan</h1>
       </Route>
       <Route path ='/'>
       <Hero />
     <Products heading= 'Choose your favorite' data=    {ProductData}/>
       </Route>
      </Switch>

    </Router>
  
  )
}

export default App;
