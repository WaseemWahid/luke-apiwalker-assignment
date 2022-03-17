import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HeaderForm from './components/HeaderForm';
import People from './views/Person';
import Planet from './views/Planet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>StarWars API</h1>
        <HeaderForm />

        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planet />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
