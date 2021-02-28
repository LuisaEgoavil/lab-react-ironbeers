import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class SingleBeer extends Component {
    
    state = {
        beer: {}
    }

    getBeer = () => {
        
        let _id = this.props.match.params.beerId 
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
            .then((response) => {
                let beer = {
                    _id: response.data,
                    image_url: response.data.image_url,
                    name: response.data.name,
                    tagline: response.data.tagline,
                    contributed_by: response.data.contributed_by,
                    description: response.data.description,
                    first_brewed: response.data.first_brewed,
                    attenuation_level: response.data.attenuation_level

                }

                this.setState({
                    beer: beer
                })
            })
    }

//--------------------------------------------------------------
    componentDidMount(){
        this.getBeer()
    }
//--------------------------------------------------------------

    componentDidUpdate(){
        let _id = this.props.match.params.beerId 
        if(this.state.beer._id !== _id) {
            this.getBeer()
        } 
    }
//--------------------------------------------------------------

    render() {

        const {beer: {name, image_url, tagline, contributed_by, description, first_brewed, attenuation_level}} = this.state
        return (
            <div>
            <header>
                <Link to='/'>Home</Link>
            </header>
                <h4>Details</h4>
                <img width="60px" alt="img" src={image_url}/>
                <h4>{name}</h4>
                <p>{attenuation_level}</p>
                <p>{first_brewed}</p>
                <p>{tagline}</p>
                <p>{description}</p>
                <p>{contributed_by}</p>
            </div>
        )
    }
}

export default SingleBeer