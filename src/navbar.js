
     iconHamburger = document.querySelector('.hamburger')
     navbar = document.querySelector('.navbar')
     iconClose = document.querySelector('.close')
    
    function openNavbar(){
        navbar.classList.add('open')
    }
    
    iconHamburger.addEventListener('click', openNavbar)
        