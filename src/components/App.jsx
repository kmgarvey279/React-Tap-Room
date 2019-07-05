import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Home from './Home';
import KegList from './KegList';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact parth='/' component={Home} />
        <Route path='/keglist' component={KegList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;