import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SingleBeer extends Component {
    render() {
        return (
            <div>
            <header>
                <Link to='/'>Home</Link>
            </header> 
                <h4>Single Beer</h4>
            </div>
        )
    }
}

export default SingleBeer