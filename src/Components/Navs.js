import React from 'react'
import { Link } from 'react-router-dom'

// we define a array then we will map in the li
const LINKS = [
    { to: '/', text: 'HOME PAGE' },
    { to: '/starred', text: 'This is starred page' }

]

function Navs() {
    return ( 
    <div>
        <ul> {
            LINKS.map(item => < li key = { item.to } >
                <Link to = { item.to } > { item.text } </Link> 
                </li> )
            } </ul>   
            </div >

        )
    }

    export default Navs
    