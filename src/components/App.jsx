import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Home from './Home';
import KegList from './KegList';
import Error404 from './Error'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact parth='/' component={Home} />
        <Route component={Error404} />
        <Route path='/keglist' component={KegList} />
      </Switch>
    </div>
  );
}

export default App;