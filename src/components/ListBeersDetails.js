import React, { Component } from 'react'
import axios from 'axios'

class ListBeersDetails extends Component {
    
    state = {
        beer: {}
    }

    getBeer = () => {
        let _id = this.props.maatch.params.beerId 
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
            .then((response) => {
                let beer = {
                    _id: response.data,
                    image_url: response.data.image_url,
                    name: response.data.name

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
        let _id = this.props.maatch.params.beerId 
        if(this.state.beer._id !== _id) {
            this.getBeer()
        } 
    }
//--------------------------------------------------------------

    render() {

        const {beer: {name, image_url}} = this.state
        return (
            <div>
                <h4>Details</h4>
                <img src={image_url}/>
            </div>
        )
    }
}

export default ListBeersDetails