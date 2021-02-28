import React, { Component } from 'react'
import './App.css';
//import Route & Switch 
import {Route, Switch} from 'react-router-dom'
//import here all the other files 
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'
import ListBeersDetails from './components/ListBeersDetails'

class App extends Component {
  render() {
    return (
      <div>
        

        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={ListBeers} />
        <Route exact path='/beers/:beerId' component={ListBeersDetails} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={SingleBeer} />
        </Switch>   

      </div>
    )
  }
}

export default App

