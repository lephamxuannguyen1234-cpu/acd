import Circle from './assets/icon1.png';
import Skull from './assets/skullicon.png';
import Hopo from './assets/hobo.png';
import './hopoogame.css'

function Hopoo() {
  return (
    <main className="hopoo-page">
      <div className="hopoo-container">
        <section className="hopoo-intro">
          <img src={Hopo} alt="Hopoo Games icon" className="hopoo-main-icon" />

          <h1>Who We Are</h1>

          <p>
            Hopoo Games was founded in 2012 by Duncan Drummond and Paul Morse
            with a creative goal - to make games we&apos;d actually want to play.
          </p>
        
          <p>We are not currently developing any new games. soz</p>
        <hr />
            <h1>What We've Made</h1>

            <p>We’ve made some cool stuff btw, so check them out.</p>
        </section>
        <section className="hopoo-games">
          <div className="hopoo-game-item">
            <img src={Circle} alt="circle icon" className="hopoo-game-icon" />
            <div className="hopoo-game-text">
              <h2>Risk of Rain (2013)</h2>
              <p>
                Risk of Rain is an action platformer roguelike, taking place in a
                sci-fi universe. It was pretty cool when it came out, and we owe
                all of our success to this little guy.
              </p>
            </div>
          </div>

          <div className="hopoo-game-item">
            <img src={Skull} alt="skull icon" className="hopoo-game-icon" />
            <div className="hopoo-game-text">
              <h2>DEADBOLT (2016)</h2>
              <p>
                DEADBOLT is a stealth-action hybrid, taking place in an world both
                occult and modern. It&apos;s hard, it&apos;s awesome, and the music is great.
              </p>
            </div>
          </div>

          <div className="hopoo-game-item">
            <img src={Circle} alt="circle icon" className="hopoo-game-icon" />
            <div className="hopoo-game-text">
              <h2>Risk of Rain 2 (2020)</h2>
              <p>
                Risk of Rain 2 is the 3D sequel to the original Risk of Rain.
                This game slaps. Continued development of RoR2 is now done by
                the wonderful people at Gearbox.
              </p>
            </div>
          </div>

          <div className="hopoo-game-item">
            <img src={Circle} alt="circle icon" className="hopoo-game-icon" />
            <div className="hopoo-game-text">
              <h2>RoR2: Survivors of the Void (2022)</h2>
              <p>
                The little DLC that could - if you like RoR2, you&apos;ll love this
                one too. Adds a bunch of new items, and two survivors that we are
                very proud of.
              </p>
            </div>
          </div>

          <div className="hopoo-game-item">
            <img src={Circle} alt="circle icon" className="hopoo-game-icon" />
            <div className="hopoo-game-text">
              <h2>Risk of Rain Returns (2023)</h2>
              <p>
                A remaster of the original Risk of Rain with new content, improved
                visuals, and a lot more things we wanted to add.
              </p>
            </div>
          </div>
        </section>
        <hr />
        <section className="hopoo-contact">
          <h2>Contact</h2>
          <p>
            To be honest, there is a pretty low chance we will respond to an email,
            because we rarely check them.
          </p>
          <p><strong>Duncan Drummond:</strong> hopoo@hopoogames.com</p>
          <p><strong>Paul Morse:</strong> paul@hopoogames.com</p>
        </section>
        <hr />
        <p>das it (&gt;’-‘)&gt; &lt;(‘-‘&lt;) ^(‘ – ‘)^ &lt;(‘-‘&lt;) (&gt;’-‘)&gt;</p>
      </div>
    </main>
  );
}

export default Hopoo;