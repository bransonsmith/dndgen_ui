import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RollTablePage = lazy(() => import('./pages/RollTablePage/RollTablePage'));
const PageNotFoundPage = lazy(() => import('./pages/PageNotFoundPage/PageNotFoundPage'));

function App() {

  return (
    <div className="app">
      <Nav/>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/rolltables">
              <RollTablePage/>
            </Route>
            <Route path="**">
              <PageNotFoundPage/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
