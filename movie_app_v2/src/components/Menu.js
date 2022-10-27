import React from 'react';
import {Link , useNavigate} from 'react-router-dom';

function Menu() {
  return (
    <div>
        <ul className='menu'>
            <li>
                <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu