import Logo from './assets/logo.avif' 



function Header(){

    return(
        <header className='navbar'>
            <div className='logo'>
            <a href="#"><img src={Logo} alt="logo header"/></a>
            </div>

            <nav className='menu'>
                <a href="#about">ABOUT</a>
                <a href="#feature">KEY FEATURES</a>
                <a href="#media">MEDIA</a>
                <a href="#">SUPPORT</a>    
            </nav>        
        </header>   
    );
    
}

export default Header;