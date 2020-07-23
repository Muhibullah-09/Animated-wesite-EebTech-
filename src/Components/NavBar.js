import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    {/* <div className='mx-auto'> */}
                    <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark" style={{ position: "fixed", top: 0 }}>
                        <strong className="navbar-brand">EebTech</strong>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className='nav-link' to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='service'>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* </div> */}
            </div >
        </>
    )
}

export default NavBar