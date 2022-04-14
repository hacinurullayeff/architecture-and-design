import React,{useRef} from 'react'

const doc = useRef(null);


const openNavbar = () =>{
    iconHamburger = document.querySelector('.hamburger')
    navbar = document.querySelector('.navbar')
    iconClose = document.querySelector('.close')
   
   function openNavbar(){
       navbar.classList.add('open')
   }
   
   iconHamburger.addEventListener('click', openNavbar)
}

const navbar = () => {
  return (
    <div className="navbar-icon">
        <button className="hamburger"><i class="fa-solid fa-bars"></i></button>
        <div ref={openNavbar} className="navbar">
            <div className="close"><i class="fa-solid fa-xmark"></i></div>
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
                    <li><a href="#"><i class="fa-brands fa-facebook-square"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram-square"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter-square"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default navbar