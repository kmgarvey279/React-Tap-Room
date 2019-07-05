import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Home from './Home';
import KegList from './KegList';
import Error404 from './Error404';
import NewKegForm from './NewKegForm';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/keglist' component={KegList} />
        <Route exact path='/newkegform' component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;