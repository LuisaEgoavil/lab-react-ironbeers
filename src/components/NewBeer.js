import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NewBeer extends Component {


    render() {
        return (
        <div>
            <header>
                <Link to='/'>Home</Link>
            </header><br></br>

            <form onSubmit={this.props.onAdd}>
            Name <br></br>
            <input name="name" type="text" /><br></br>

            Tagline <br></br>
            <input name="tagline" type="text" /><br></br>

            Description <br></br>
            <input name="description" type="text" /><br></br>

            First Brewed <br></br>
            <input name="first_brewed" type="text" /><br></br>

            Brewed Tips <br></br>
            <input name="brewed_tips" type="text" /><br></br>

            Attenuation Level <br></br>
            <input name="attenuation_level" type="number" /><br></br>

            Contributed By <br></br>
            <input name="contributed_by" type="text" /><br></br>

            <button type="submit">Add new</button>
            </form>
            

            
           </div> 
           
        )
    }
}

export default NewBeer