import './cookie.css';
import T2Logo from './assets/2K_Logo.avif'
import ESRB from './assets/ESRB rating.avif'

function Cookie() {
  const languages = [
    'English',
    'Français',
    'Español',
    'Italiano',
    'Deutsch',
    'Português - Brasil',
    'Nederlands',
    'Polski',
    'Русский язык',
    'Čeština',
    'العربية',
    'Ελληνικά',
    '日本語',
    '한국어',
    'Português',
    'Español (México)',
    'Türkçe',
    '简体中文',
    '繁體中文',
  ];

  const cookieGroups = [
    {
      title: '1. Necessary Cookies',
      paragraphs: [
        'These Cookies are necessary for the Site to provide core functions and cannot be turned off in our systems.',
        'These core functions usually include the main services on our Site, keeping the Site secure, managing your privacy settings, and allowing you to sign in or fill in forms.',
        'These Cookies may be set by us or by third-party providers whose services we use on our Sites.',
        'You can set your browser to block or alert you about these Cookies, but some parts of the Site may look odd or might not work at all.',
        'Please note that these Cookies do not collect or store any information that will directly identify you (such as your name, email address or address).',
      ],
    },
    {
      title: '2. Performance Cookies',
      paragraphs: [
        "These Cookies are primarily used for analytics in optimizing the Site's performance.",
        'These Cookies allow us to count visits and behaviors on our Site so we can measure and improve the performance of our Site. They help us to know which pages on our Site are visited the most, which pages are not visited very often, and how visitors move around our Site.',
        'These Cookies may be set by us or by third-party providers whose services we use on our Site.',
        "If you don't allow these Cookies, we won't be able to recognize Site activity and will not be able to evaluate our Site performance.",
        'Please note these Cookies do not collect or store any information that will directly identify you and the information that is collected is used in aggregate.',
      ],
    },
    {
      title: '3. Functional Cookies',
      paragraphs: [
        'These Cookies enable enhanced Site features and allow the Site to provide deeper levels of functionality and personalization such as feature enhancement, spoiler prevention, and live chats.',
        'These Cookies may be set by us or by third-party providers whose services we use on our Site.',
        'If you decide not to allow these Cookies, then some or all of these services may not function properly.',
      ],
    },
    {
      title: '4. Advertising Cookies',
      paragraphs: [
        'These Cookies help improve communications through advertising and social media, allowing us to accurately and properly:',
      ],
      bullets: [
        'Pay for ads placed on our behalf (e.g. an ad that led you to purchase or download one of our games)',
        'Get paid when you see an ad on our Sites or third-party services',
        'Prevent you from repeatedly seeing the same ads',
        'Display targeted ads or other content on your computer or device that may be of particular interest to you',
      ],
      extra: [
        'These Cookies may be set through our Site by our advertising partners. They also may be used by those partners to build a profile of your interests and show you relevant ads on our Sites or other third-party sites.',
        'These Cookies may also transmit personal information and video viewing information to our advertising partners and other third parties.',
        'If you do not allow these Cookies, you will still receive ads, but they will be less targeted to your device and/or your interests.',
      ],
    },
  ];

  const browserLinks = [
    {
      name: 'Edge',
      href: 'https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d',
    },
    {
      name: 'Firefox',
      href: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer',
    },
    {
      name: 'Google Chrome',
      href: 'https://support.google.com/chrome/answer/95647?hl=en',
    },
    {
      name: 'Safari',
      href: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac',
    },
  ];

  return (
    <main className="cookie-page">
      <div className="cookie-page-inner">
        <section className="cookie-language-row">
          <label htmlFor="cookie-language" className="cookie-language-text">
            Language
          </label>

          <div className="cookie-select-wrap">
            <select id="cookie-language" className="cookie-select" defaultValue="English">
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
            <span className="cookie-select-arrow">▾</span>
          </div>
        </section>

        <section className="cookie-header">
          <h1>Take Two Cookie Policy:</h1>
          <p>Last Update: February 2025</p>
        </section>

        <section className="cookie-section">
          <h2>What are cookies?</h2>
          <p>
            Cookies are very small text files that are placed on your device when you visit some
            websites, applications, or other web-based services to help identify a computer,
            browser, or device.
          </p>
          <p>
            We use cookies and similar tracking technologies to allow our services to function,
            maintain your preferences and settings, provide enhanced features, analyze how users
            use our services, combat fraud, prevent violations of our terms and policies, and
            provide you with targeted advertising based on your interests.
          </p>
          <p>
            Cookies also last for different lengths of time depending on the job they do. Session
            Cookies only last for your online session, while Persistent Cookies stay on your device
            after the browser has been closed and last for the period of time specified in the
            Cookie.
          </p>
          <p>
            You can always choose to remove Cookies already stored on your device, but this might
            temporarily prevent you from using parts of our Sites.
          </p>
          <p>
            For further info on the Cookies we use and how they work to enhance your experience
            with our Sites, please read on below:
          </p>
        </section>

        <section className="cookie-section">
          <h2>Cookies we use:</h2>

          {cookieGroups.map((group, index) => (
            <div className="cookie-subsection" key={index}>
              <h3>{group.title}</h3>

              {group.paragraphs.map((text, textIndex) => (
                <p key={textIndex}>{text}</p>
              ))}

              {group.bullets && (
                <ul>
                  {group.bullets.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {group.extra?.map((text, extraIndex) => (
                <p key={extraIndex}>{text}</p>
              ))}
            </div>
          ))}
        </section>

        <section className="cookie-section">
          <h2>Managing Your Cookies:</h2>

          <h3>In the Preference Tool</h3>
          <p>
            We read or write Cookies for the preference level you set in the Cookie Preference Tool
            section of the Site you are visiting.
          </p>
          <p>
            Please note that Cookies set through the Cookie Preference Tool before you changed your
            preferences will still be on your device, but we will honor your current choice for
            that Site when we read your updated preferences.
          </p>

          <h3>In Your Browser</h3>
          <p>
            Most browsers will allow you to select your privacy settings. You can block Cookies,
            accept all Cookies, or pick a setting somewhere in-between.
          </p>

          <ul>
            <li>See what Cookies you&apos;ve got and delete them on an individual basis</li>
            <li>Block third-party Cookies</li>
            <li>Block Cookies from particular Sites</li>
            <li>Block all Cookies from being set</li>
            <li>Delete all Cookies when you close your browser</li>
          </ul>

          <p>
            Deleting Cookies means that any preference settings you have made on a Site will be
            lost. Blocking all Cookies means functionality on our Sites will be lost or limited.
          </p>

          <p className="cookie-browser-title">
            Find out how to manage your Cookies using the most popular browsers below.
          </p>

          <div className="cookie-browser-links">
            {browserLinks.map((browser, index) => (
              <a key={index} href={browser.href} target="_blank" rel="noreferrer">
                {browser.name}
              </a>
            ))}
          </div>
        </section>

        <section className="cookie-section cookie-section-last">
          <h2>Disabling Targeted Advertising and Sharing of Video Viewing Information</h2>
          <p>
            You can disable targeted advertising by us or our advertising providers, and disable
            any potential sharing of video viewing information, by using our existing privacy
            controls.
          </p>

          <ul>
            <li>Opt out of interest-based targeted advertising from participating providers.</li>
            <li>Adjust your privacy and advertising settings on your mobile device.</li>
            <li>Manage Cookies on your browser using the Cookie Preference Tool.</li>
          </ul>

          <p>
            Please be aware that if you opt out of targeted advertising, an &quot;opt-out&quot;
            Cookie will be stored in your browser indicating that you do not want to receive
            targeted advertisements.
          </p>

          <p>
            To review your Cookie settings and access the Cookie Preference Tool please click the
            &quot;Cookie Settings&quot; tab at the bottom of the Site.
          </p>

          <p>
            To learn more about our privacy practices, please review our{' '}
            <a href="/privacy" className="cookie-inline-link">
              Privacy Policy
            </a>.
          </p>
        </section>
      </div>

      <footer className="privacy-footer">
        <div className="privacy-footer-container">
          <div className="privacy-footer-left">
            <a href="#">
              <img src={T2Logo} alt="Take-Two logo" className="privacy-footer-logo" />
            </a>
          </div>

          <div className="privacy-footer-center">
            <div className="privacy-footer-links">
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="#">Legal</a>
              <a href="/cookie" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
              <a href="#">Do Not Sell or Share My Personal Information</a>
              <a href="#">Rockstar Support</a>
              <a href="#">Ghost Story Support</a>
              <a href="#">Zynga Support</a>
              <a href="#">2K Support</a>
            </div>

            <p className="privacy-footer-copy">
              ©2026 Take-Two Interactive Software, Inc.
            </p>
          </div>

          <div className="privacy-footer-right">
            <a href="#">
              <img src={ESRB} alt="ESRB rating" className="privacy-footer-esrb" />
            </a>
          </div>
        </div>

        <button
          className="privacy-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ^
        </button>
      </footer>
    </main>
  );
}

export default Cookie;