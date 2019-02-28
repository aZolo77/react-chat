// react libs
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// custom components
import WelcomePage from '../welcome-page/WelcomePage';
import ChatPage from '../chat-page/ChatPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePage} />
      <Route path="/chat" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
