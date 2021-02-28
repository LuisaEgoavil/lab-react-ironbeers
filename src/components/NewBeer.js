import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NewBeer extends Component {
    render() {
        return (
        <div>
            <header>
                <Link to='/'>Home</Link>
            </header><br></br>
            
            <form>
            Name <br></br>
            <input type="text" ></input><br></br>
            Tagline <br></br>
            <input type="text" ></input><br></br>
            Description <br></br>
            <input type="text" ></input><br></br>
            First Brewed <br></br>
            <input type="text" ></input><br></br>
            Brewed Tips <br></br>
            <input type="text" ></input><br></br>
            Attenuation Level <br></br>
            <input type="number" ></input><br></br>
            Contributed By <br></br>
            <input type="text" ></input><br></br>
            </form>
            

            
           </div> 
           
        )
    }
}

export default NewBeer