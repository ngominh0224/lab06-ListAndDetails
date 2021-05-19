import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import DetailsContainer from '../../containers/DetailsContainer';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HeyArnoldContainer} />
          <Route
            path="/characters/:id"
            exact
            render={(routerProps) => <DetailsContainer {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
