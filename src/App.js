import React, { Component } from 'react'
import './App.css';
//import Route & Switch 
import {Route, Switch} from 'react-router-dom'
//import here all the other files 
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer'

class App extends Component {
  render() {
    return (
      <div>
        
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={ListBeers} />
        <Route exact path='/beers/:beerId' component={SingleBeer} />
        <Route path='/random-beer' component={RandomBeer} />
        <Route path='/new-beer' component={NewBeer} />
        </Switch>   

      </div>
    )
  }
}

export default App

