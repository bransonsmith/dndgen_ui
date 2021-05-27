import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const Home = lazy(() => import('./pages/Home'));
const RollTables = lazy(() => import('./pages/RollTables'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {

  let navExpanded = true;
  return (
    <div className="app">
      <Nav/>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/rolltables">
              <RollTables/>
            </Route>
            <Route path="**">
              <PageNotFound/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
