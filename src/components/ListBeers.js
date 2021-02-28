import React, { Component } from 'react'
import {Link, Route } from 'react-router-dom'
import axios from 'axios'
import SingleBeer from './SingleBeer'


class ListBeers extends Component {

    //we want to store here
    state = {
        beers: []
    }
//---------------------------------------------------------

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
               
                this.setState({ 
                    beers: response.data,
                    image_url: response.data,
                    tagline: response.data,
                    contributed_by: response.data
                })
            })
            .catch(() => {
                console.log('error while getting the beers')
            })
    }

//---------------------------------------------------------


    render() {

        //destructure here
        const {beers, image_url, tagline, contributed_by} = this.state

        return (
            <div>   
            <header>
                <Link to='/'>Home</Link>
            </header>

                  
                {
                    beers.map((beer,index) => {
                        return <div key={index}>

                            <Link key={beer._id} to={`/beers/${beer._id}`}>
                                <img width="60px" alt="img" src={beer.image_url}/>
                                <h4>{beer.name}</h4>
                            </Link>
                            <p>{beer.tagline}</p>
                            <p>Created by: {beer.contributed_by}</p>
                            
                            <Route exact path="beers/:beerId" component={SingleBeer}/>

                        </div>
                    })
                }         
            </div>
        )
    }
}

export default ListBeers