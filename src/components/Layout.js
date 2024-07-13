import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
// import "./../accessts/style/index.scss"
const Layout = () => {

    // state css cho navbar's item
    const [activeLink, setActiveLink] = useState(1);

    // function lấy index khi click vào item trên navbar
    const hanldeClickLink = (index) => {
        setActiveLink(index)
    };

    return (
       <>
       <nav className='nav'>
        <ul className='nav-bar'>

            {/* className của thẻ li thay đổi thành "active" khi item bất kỳ được click*/ }

            <li className={activeLink === 1?'active':''}> 
                <Link to="/" className='nav-link' onClick={()=>hanldeClickLink(1)}>All</Link>
            </li>
            <li className={activeLink === 2?'active':''}>
                <Link to="/manpower" className='nav-link' onClick={()=>hanldeClickLink(2)}>Manpower</Link>
            </li>
            <li className={activeLink === 3?'active':''}>
                <Link to="/mobile" className='nav-link' onClick={()=>hanldeClickLink(3)}>Mobile</Link>
            </li>
            <li className={activeLink === 4?'active':''}>
                <Link to="/design" className='nav-link' onClick={()=>hanldeClickLink(4)}>Design</Link>
            </li>
        </ul>
       </nav>
       <Outlet/>
       </>
    )
};

export default Layout;