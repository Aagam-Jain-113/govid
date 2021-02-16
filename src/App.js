import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/Search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
