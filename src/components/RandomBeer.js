import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class RandomBeer extends Component {
    render() {
        return (
            <div>
             <header>
                <Link to='/'>Home</Link>
            </header> 
                
               <h4>Random Beer</h4>
            </div>
        )
    }
}

export default RandomBeer