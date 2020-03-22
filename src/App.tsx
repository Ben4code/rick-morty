import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Favs from './components/Favourites'
import './app.css'



function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route component={Home} exact path="/"/>
          <Route component={Favs} exact path="/favs"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
