import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Content from './components/Content/Content.js';
import ContentContextProvider from './contexts/ContentContext.js';

//'router' has to encase entire 'app' component if you're using react-router-dom
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Home}/>

          <Route exact path='/about' component={About}/>

          <Route exact path='/tours' render={props => (
            <Fragment>
              <ContentContextProvider>
                <Content/>
              </ContentContextProvider>
            </Fragment>
          )}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;