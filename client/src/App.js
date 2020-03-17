import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
import LandingPage from "./pages/LandingPage"
import AdminPage from "./pages/AdminPage"
import Footer from './components/Footer'


class App extends Component {

  constructor() {
    super()
    this.state = {
      user: "",
      quotes: []
    }
  }

  componentDidMount() {
    this.loadStates();

  }

  loadStates = () => {

    // API.gatherQuotes()
    //   .then(res => {
    //     this.setState({
    //       quotes: res.data
    //     })
    //   }).catch(err => {
    //     console.log("error getting quotes")
    //   })

  }





  render() {
    return (
      <Router>
        <div className="main">

          <Switch>
            <Route exact path="/">              
              <LandingPage
              />
            </Route>
            <Route exact path="/xbyMGrZ4XIFuk2GiPHta">
              <AdminPage
              />
            </Route>
          </Switch>
        
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
