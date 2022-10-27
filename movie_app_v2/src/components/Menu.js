import React from 'react';
import {Link , useNavigate} from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();
  return (
    <div>
        <ul className='menu'>
            <li>
                <a href='#/' onClick={()=> navigate(-1)}> Geri</a>
            </li>
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