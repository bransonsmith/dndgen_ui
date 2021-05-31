import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const Home = lazy(() => import('./pages/Home'));
const RollTablePage = lazy(() => import('./pages/RollTablePage/RollTablePage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {

  return (
    <div className="app">
      <Nav/>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/rolltables">
              <RollTablePage/>
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
