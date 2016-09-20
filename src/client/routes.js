import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
//import FlowContainer from './containers/FlowContainer';
import Flow from './components/Flow';

export default (
  <Route path="/" component={App}>
    <Route path="/:step" component={Flow}/>
  </Route>
);
