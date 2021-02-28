import React, { Component } from 'react'
import './App.css';
//import Route & Switch 
import {Route, Switch, withRouter} from 'react-router-dom'
//import here all the other files 
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer'
import axios from 'axios'

class App extends Component {

  state = {
    beers: []
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data
        })
      })
      .catch(() => {
          console.log('fetching failed')
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //when putting ".value" I'll get "cannot read value of undefined, without it i get "Converting circular structure to JSON" " 
    let name=event.target.name
    let tagline=event.target.tagline
    let description=event.target.description
    let first_brewed=event.target.first_brewed
    let brewed_tips=event.target.brewed_tips
    let attenuation_level=event.target.attenuation_level
    let contributed_by=event.target.contributed_by

  

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name,
        tagline:tagline,
        description:description,
        first_brewed:first_brewed,
        brewed_tips:brewed_tips,
        attenuation_level:attenuation_level,
        contributed_by:contributed_by
    })
      .then((response) => {
        this.setState({
          beers: [response.data, ...this.state.beers]
        }, () => {
          this.props.history.push('/beers')
        })
      })
      .catch((err) => {
        console.log('created failed', err)
      })

  
  }



  //-------------------------------------------------------
  render() {
    return (
      <div>
        
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={ListBeers} />
        <Route exact path='/beers/:beerId' component={SingleBeer} />
        <Route path='/random-beer' component={RandomBeer} />
        <Route path='/new-beer' render={(routeProps) => {
          return <NewBeer onAdd={this.handleSubmit} {...routeProps}/>
        }} />
        </Switch>   

      </div>
    )
  }
}

export default withRouter(App)

