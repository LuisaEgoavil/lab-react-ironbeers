import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class RandomBeer extends Component {

    state = {
        beer: {}
    }

    componentDidMount(){
        //endpoint /random !
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                this.setState({
                    beer: response.data
                })
            })
            .catch(() => {
                    console.log('fetching failed!')
            })
    }

//--------------------------------------------------------------
   


    render() {
        const {beer,image_url,name,first_brewed, tagline , description, contributed_by} = this.state

        return (
            <div>
             <header>
                <Link to='/'>Home</Link>
            </header> 

               <h4>Random</h4>
                <img width="60px" alt="img" src={beer.image_url}/>
                <h4>{beer.name}</h4>
                <p>{beer.attenuation_level}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeer