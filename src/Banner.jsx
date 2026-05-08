/* logo của từng banner */
import AlloyedImg from './assets/Alloyed_Collective.avif'
import SeekersImg from './assets/Seekers_of_the_Storm.avif'
import ReturnsImg from './assets/RoR_Returns.avif'
import SurvivorsImg from './assets/Survivors_of_the_Void.avif'
import BaseGameImg from './assets/RoR_2.avif'
import Steam from './assets/Steam.Svg'
import Epic from './assets/epic.Svg'
import Playstation from './assets/Playstation.svg'
import Xbox from './assets/xbox.svg'
import Switch from './assets/Switch.svg'
import video1 from './assets/seekerbackground.jpg'
import video2 from './assets/alloybackground.jpg'
import video3 from './assets/returnsbackground.jpg'
import { useState } from 'react'
/* img cho key feature */
import img1 from './assets/pic1.avif'
import img2 from './assets/pic2.avif'
import img3 from './assets/pic3.avif'
import img4 from './assets/pic4.avif'
import img5 from './assets/pic5.avif'
import img6 from './assets/pic6.avif'
import img7 from './assets/pic7.avif'
import img8 from './assets/pic8.avif'

function Banner(){
  const [activeVideo, setActiveVideo] = useState("")
   const mediaVideos = [
    {
      id: 1,
      thumbnail: video1,
      videoUrl: "https://www.youtube.com/embed/2qEt3oW4Eac",
      title: "Media 1"
    },
    {
      id: 2,
      thumbnail: video2,
      videoUrl: "https://www.youtube.com/embed/Y284lohXoIg&t=1s",
      title: "Media 2"
    },
    {
      id: 3,
      thumbnail: video3,
      videoUrl: "https://www.youtube.com/embed/xNvtWrzzYDU",
      title: "Media 3"
    }
  ]
    return(
    <main className="main-content">
    <section className="games-showcase">
  <div className="game-card card-1">
    <div className="game-overlay-left">
      <img src={AlloyedImg} alt="Alloyed Collective" className="game-logo" />
      <h2 className="game-title-hero">AVAILABLE NOW!</h2>

      <div className="store-row">
        <a href='https://store.steampowered.com/app/2781620/Risk_of_Rain_2_Alloyed_Collective/' target='_blank'><img src={Steam} alt='Steam' className="store-btn"/></a>
        <a href='https://store.epicgames.com/en-US/p/risk-of-rain-2--alloyed-collective' target='_blank'><img src={Epic} alt='Epic' className="store-btn"/></a>
        <a href='https://store.playstation.com/en-us/product/UP0292-PPSA06516_00-ROR2HARDWARE0000' target='_blank'><img src={Playstation} alt='Playstation' className="store-btn"/></a>
        <a href='https://www.xbox.com/en-US/games/store/risk-of-rain-2-alloyed-collective/9PLSK54TPL8X' target='_blank'><img src={Xbox} alt='Xbox' className="store-btn"/></a>
      </div>
    </div>
  </div>

  <div className="game-card card-2">
    <div className="game-overlay-left">
      <img src={SeekersImg} alt="Seekers of the Storm" className="game-logo" />
      <h2 className="game-title-hero">AVAILABLE NOW!</h2>
      <div className="store-row">
        <a href='https://store.steampowered.com/app/2306620/Risk_of_Rain_2_Seekers_of_the_Storm/' target='_blank'><img src={Steam} alt='Steam' className="store-btn"/></a>
        <a href='https://www.xbox.com/en-us/games/store/risk-of-rain-2-seekers-of-the-storm/9n34xhmmztvb' target='_blank'><img src={Xbox} alt='Xbox' className="store-btn"/></a>
        <a href='https://store.playstation.com/en-us/product/UP0292-PPSA06516_00-ROR2SEEKERSSTORM' target='_blank'><img src={Playstation} alt='Playstation' className="store-btn"/></a>
        <a href='https://www.nintendo.com/us/store/products/seekers-of-the-storm-70050000045610-switch/' target='_blank'><img src={Switch} alt='Switch' className="store-btn"/></a>
        <a href='https://store.epicgames.com/en-US/p/risk-of-rain-2--seekers-of-the-storm' target='_blank'><img src={Epic} alt='Epic' className="store-btn"/></a>
      </div>
    </div>
  </div>

  <div className="game-card card-3">
    <div className="game-overlay-left">
      <img src={ReturnsImg} alt="Risk of Rain Returns" className="game-logo" />
      <h2 className="game-title-hero">AVAILABLE NOW!</h2>

      <div className="store-row">
        <a href='https://store.steampowered.com/app/1337520/Risk_of_Rain_Returns/' target='_blank'><img src={Steam} alt='Steam' className="store-btn"/></a>
        <a href='https://www.nintendo.com/us/store/products/risk-of-rain-returns-switch/' target='_blank'><img src={Switch} alt='Switch' className="store-btn"/></a>
      </div>
    </div>
  </div>

  <div className="game-card card-4">
    <div className="game-overlay-left">
      <img src={SurvivorsImg} alt="Survivors of the Void" className="game-logo" />
      <h2 className="game-title-hero">AVAILABLE NOW!</h2>
      <div className="store-row">
        <a href='https://store.steampowered.com/app/1607890/Risk_of_Rain_2_Survivors_of_the_Void/' target='_blank'><img src={Steam} alt='Steam' className="store-btn"/></a>
        <a href='https://www.xbox.com/en-US/games/store/risk-of-rain-2-survivors-of-the-void/9NH7P86MLGX8/0010' target='_blank'><img src={Xbox} alt='Xbox' className="store-btn"/></a>
        <a href='https://store.playstation.com/en-us/product/UP0292-PPSA06516_00-RISKSURVIVORSOTV' target='_blank'><img src={Playstation} alt='Playstation' className="store-btn"/></a>
        <a href='https://www.nintendo.com/us/store/products/survivors-of-the-void-70050000034995-switch/' target='_blank'><img src={Switch} alt='Switch' className="store-btn"/></a>
        <a href='https://store.epicgames.com/en-US/p/risk-of-rain-2--survivors-of-the-void' target='_blank'><img src={Epic} alt='Epic' className="store-btn"/></a>
      </div>
    </div>
  </div>

  <div className="game-card card-5">
    <div className="game-overlay-left">
      <img src={BaseGameImg} alt="Risk of Rain 2" className="game-logo" />
      <h2 className="game-title-hero">AVAILABLE NOW!</h2>
      <div className="store-row">
        <a href='https://store.steampowered.com/app/632360/Risk_of_Rain_2/' target='_blank'><img src={Steam} alt='Steam' className="store-btn"/></a>
        <a href='https://www.xbox.com/en-us/games/store/risk-of-rain-2/9p6f6tbggvk3' target='_blank'><img src={Xbox} alt='Xbox' className="store-btn"/></a>
        <a href='https://store.playstation.com/en-us/product/UP0292-PPSA06516_00-RISKOFRAIN2SIEA0' target='_blank'><img src={Playstation} alt='Playstation' className="store-btn"/></a>
        <a href='https://www.nintendo.com/us/store/products/risk-of-rain-2-switch/#game-info' target='_blank'><img src={Switch} alt='Switch' className="store-btn"/></a>
        <a href='https://store.epicgames.com/en-US/p/risk-of-rain-2' target='_blank'><img src={Epic} alt='Epic' className="store-btn"/></a>
      </div>
    </div>
  </div>
</section>

<section className="about-wrapper" id="about">
  <div className="about-container">
    <section className="about-section">
      <h2>ABOUT RISK OF RAIN 2</h2>
      <p>
        Escape a chaotic alien planet by fighting through hordes of frenzied
        monsters with your friends, or on your own. Combine loot in surprising
        ways and master each character until you become the havoc you feared
        upon your first crash landing.
      </p>
    </section>

    <section className="info-section">
      <div className="info-block">
        <h3>SURVIVE AN ALIEN PLANET</h3>
        <p>
          Battle through dangerous environments filled with monsters and giant
          bosses. Fight until you escape, or keep going to see how long you can survive.
        </p>
      </div>

      <div className="info-block">
        <h3>UNLOCK NEW WAYS TO PLAY</h3>
        <p>
          Unlock a crew of ten playable survivors, each with their own unique combat style and alternate skills to master. Learn the secrets of the Artifacts to toggle gameplay modifiers like friendly fire, random survivor spawns, item selection and more. With randomized stages, enemies, and items, no run will ever be the same.
        </p>
      </div>

      <div className="info-block">
        <h3>DISCOVER POWERFUL ITEMS</h3>
        <p>
          Collect powerful items that stack into crazy combinations and create
          unique builds every time you play.
        </p>
      </div>

      <div className="info-block">
        <h3>PLAY SOLO OR CO-OP</h3>
        <p>
          Play alone or join up with friends in online co-op and survive the chaos together.
        </p>
      </div>
    </section>
  </div>
</section>

     <section className="features-wrapper" id="feature">
  <div className="features-container">
    <section className="features-section">
      <h2>KEY FEATURES</h2>

      <div className="features-grid">
        <div className="feature-card">
          <img src={img1} alt="Feature 1" />
          <p>Fight through intense alien environments</p>
        </div>

        <div className="feature-card">
          <img src={img2} alt="Feature 2" />
          <p>Unlock powerful items and stack their effects</p>
        </div>

        <div className="feature-card">
          <img src={img3} alt="Feature 3" />
          <p>Discover survivors with different play styles</p>
        </div>

        <div className="feature-card">
          <img src={img4} alt="Feature 4" />
          <p>Take on massive monsters and deadly bosses</p>
        </div>

        <div className="feature-card">
          <img src={img5} alt="Feature 5" />
          <p>Play solo or with friends in online co-op</p>
        </div>

        <div className="feature-card">
          <img src={img6} alt="Feature 6" />
          <p>Explore handcrafted stages full of danger</p>
        </div>

        <div className="feature-card">
          <img src={img7} alt="Feature 7" />
          <p>Experiment with builds and endless combinations</p>
        </div>

        <div className="feature-card">
          <img src={img8} alt="Feature 8" />
          <p>Master the chaos and survive as long as possible</p>
        </div>
      </div>
    </section>
  </div>
</section>


<section className="media-wrapper" id="media">
  <div className="media-container">
    <section className="media-section">
      <h2>MEDIA</h2>

      <div className="media-grid">
        {mediaVideos.map((video) => (
          <div
            key={video.id}
            className="media-card"
            onClick={() => setActiveVideo(video.videoUrl)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <div className="media-play-btn">▶</div>
          </div>
        ))}
      </div>
    </section>
  </div>
</section>

{activeVideo && (
  <div className="video-modal" onClick={() => setActiveVideo("")}>
    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="video-close"
        onClick={() => setActiveVideo("")}
      >
        ✕
      </button>

      <iframe
        src={`${activeVideo}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}
    </main>
    );
}

export default Banner