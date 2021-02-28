import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
            <h1>IronBeers</h1>
                <img alt="img" src="assets/beers.png"/><br></br>
                <Link to="/beers">All Beers</Link>
                <br></br>
                <img alt="img" src="assets/random-beer.png"/><br></br>
                <Link to="/random-beer">Random Beer</Link>
                <br></br>
                <img alt="img" src="assets/new-beer.png"/><br></br>
                <Link to="/new-beer">New Beer</Link>
                
            </div>
        )
    }
}

export default Home
