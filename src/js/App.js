import React, { Component } from 'react'
import { Left, Top, Footer } from './navigation'
import history from './history'
import { Router } from 'react-router'
import PageContent, { Menu } from './routes'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container body">
          <div className="main_container">
              <Left>
                {Menu}
              </Left>
              <Top />
              <PageContent />
              <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
