import React from 'react'
import { useLocation } from 'react-router';
import { NavList,LinkStyled } from './NavsStyled'


// we define a array then we will map in the li
const LINKS = [
    { to: '/', text: 'HOME ' },
    { to: '/starred', text: 'STARRED' }

]

function Navs() {
    const location = useLocation();
    return ( 
    <div>
        <NavList> {
            LINKS.map(item => < li key = { item.to } >
                <LinkStyled to = { item.to } className={item.to===location.pathname?'active':''}> { item.text } </LinkStyled> 
                </li> )
            } </NavList>   
            </div>

        )
    }

    export default Navs
    