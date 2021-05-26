import './App.css';
// import RollTable from './components/RollTable';
// import Home from './components/Home';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const RollTable = lazy(() => import('./components/RollTable'));

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/rolltables">
            <RollTable/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
