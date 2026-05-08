import Logo2K from './assets/2K_Logo.avif'
import Gearboxlogo from './assets/GearboxSoftware_Above_White__1_.svg'
import Hopoologo from './assets/hopoo-logo.avif'
import Fblogo from './assets/Facebook_Logo.svg'
import Xlogo from './assets/twitter.svg'
import Twitchlogo from './assets/twitchicon.svg'
import ESRB from './assets/ESRB rating.avif'

function Footer(){

    return(
         <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="brand-row">
            <a href='#'><img src={Logo2K} alt='2k logo' className='brand-logo'/></a>
            <a href='#'><img src={Gearboxlogo} alt='Gearbox' className='brand-logo'/></a>
            <a href="/hopoo" target='_blank'><img src={Hopoologo} alt='hopoo' className='brand-logo'/></a>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h2>LEGAL</h2>
              <ul>
                <li><a href="/privacy" target="_Blank">PRIVACY POLICY</a></li>
                <li><a href="#">TERMS OF SERVICE</a></li>
                <li><a href="/cookie" target="_blank">COOKIE POLICY</a></li>
                <li><a href="#">2K AD PARTNERS</a></li>
                <li><a href="#">DO NOT SELL OR SHARE MY PERSONAL INFORMATION</a></li>
                <li><a href="#">COOKIE SETTINGS</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h2>SUPPORT</h2>
              <ul>
                <li><a href="#">2K.COM</a></li>
                <li><a href="#">2K STORE</a></li>
                <li><a href="#">SUPPORT</a></li>
              </ul>
            </div>
          </div>
        </div>

          <div className="footer-right">
          <div className="socials">
            <a href="https://www.facebook.com/RiskofRainGame#" target='_blank'><img src={Fblogo} alt="Facebook" /></a>
            <a href="https://x.com/riskofrain" target='_blank'><img src={Xlogo} alt="X" /></a>
            <a href="https://www.twitch.tv/directory/category/risk-of-rain-2" target='_blank'><img src={Twitchlogo} alt="Twitch" /></a>
          </div>

          <div className="rating-image">
            <a href="https://www.esrb.org/" target='_blank'><img src={ESRB} alt="Teen ESRB" /></a>
          </div>
        </div>
      </div>

      <hr />

      <p className="footer-text">
        © 2026 Gearbox. Published and distributed by Gearbox Publishing. Gearbox and
        Risk of Rain, and the Gearbox Publishing logo, are registered trademarks of
        Gearbox. Developed by Hopoo Games, LLC.
      </p>

    </footer>
    );
}

export default Footer;