import React, { useRef } from 'react'



const Navbar = () => {
    const navbarRef = useRef()
    const hamburgerRef = useRef()
    const closeRef = useRef()

    const openNavbar = () => {
        navbarRef.current.style.right = "0"
    }

    const closeNavbar = () => {
        navbarRef.current.style.right = "-26rem"
    }

  return (
    <div className="navbar-icon">
        <button onClick={openNavbar} ref={hamburgerRef} className="hamburger"><i className="fa-solid fa-bars"></i></button>
        <div ref={navbarRef} className='navbar'>
            <div onClick={closeNavbar} ref={closeRef} className='close'>
                <i className="fa-solid fa-xmark"></i></div>
            <div className="navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="social-media">
                <ul className='media-icons'>
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar