import T2Logo from './assets/2K_Logo.avif'
import ESRB from './assets/ESRB rating.avif'


function Privacy() {
  const sections = [
    { id: "categories", title: "Categories of Information Collected" },
    { id: "use", title: "How and Why We Use Information and Our Legal Grounds" },
    { id: "sources", title: "Sources of Information We Collect" },
    { id: "sharing", title: "When We Share Information" },
    { id: "rights", title: "Data Rights" },
    { id: "retention", title: "Data Retention" },
    { id: "children", title: "Children’s Privacy" },
    { id: "security", title: "Data Security" },
    { id: "transfers", title: "International Transfers" },
    { id: "contact", title: "Contact Us" },
    { id: "changes", title: "Changes to Privacy Policy" }
  ];

  return (
    <>
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-shell">
          <h1>Privacy Policy</h1>
          <p className="privacy-updated">Last Update: February 2026</p>

          <div className="privacy-intro">
            <p>
              This Privacy Policy explains how information is collected, used,
              stored, and shared when you access and use this website, its
              features, and related services.
            </p>
            <p>
              Please read this Privacy Policy carefully. The information we
              collect and the way we process it may vary depending on how you
              use the website and connected services.
            </p>
          </div>
        </div>
      </section>

      <section className="privacy-body">
        <div className="privacy-shell privacy-layout">
          <aside className="privacy-toc">
            <h2>Contents</h2>
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          <section className="privacy-content">
            <article id="categories" className="privacy-block">
              <h2>Categories of Information Collected</h2>
              <p>
                We may collect contact information, account details, technical
                data, device information, usage activity, purchase history, and
                other information you provide when using the website.
              </p>
            </article>

            <article id="use" className="privacy-block">
              <h2>How and Why We Use Information and Our Legal Grounds</h2>
              <p>
                We may use information to provide services, improve performance,
                personalize experiences, maintain security, communicate with
                users, and comply with legal obligations.
              </p>
            </article>

            <article id="sources" className="privacy-block">
              <h2>Sources of Information We Collect</h2>
              <p>
                Information may be collected directly from you, automatically
                from your device and browser, from analytics tools, and from
                third-party platforms connected to the website.
              </p>
            </article>

            <article id="sharing" className="privacy-block">
              <h2>When We Share Information</h2>
              <p>
                We may share information with service providers, business
                partners, affiliated entities, legal authorities when required,
                or other parties involved in operating and securing the website.
              </p>
            </article>

            <article id="rights" className="privacy-block">
              <h2>Data Rights</h2>
              <p>
                Depending on your location, you may have rights to access,
                correct, delete, restrict, or object to certain processing of
                your information.
              </p>
            </article>

            <article id="retention" className="privacy-block">
              <h2>Data Retention</h2>
              <p>
                We retain information only for as long as necessary to fulfill
                operational, legal, contractual, and security purposes.
              </p>
            </article>

            <article id="children" className="privacy-block">
              <h2>Children’s Privacy</h2>
              <p>
                The website is not intended for children where prohibited by
                law, and we take additional steps where children’s data requires
                special handling or consent.
              </p>
            </article>

            <article id="security" className="privacy-block">
              <h2>Data Security</h2>
              <p>
                We apply reasonable administrative, technical, and physical
                safeguards designed to protect information against unauthorized
                access, disclosure, alteration, or destruction.
              </p>
            </article>

            <article id="transfers" className="privacy-block">
              <h2>International Transfers</h2>
              <p>
                Information may be transferred to and processed in countries
                outside your own, subject to applicable legal safeguards and
                protections.
              </p>
            </article>

            <article id="contact" className="privacy-block">
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or your data,
                please contact the support or legal contact listed for this
                website.
              </p>
            </article>

            <article id="changes" className="privacy-block">
              <h2>Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be reflected by updating the effective date shown at the
                top of this page.
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
    
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
  </>
  );
}

export default Privacy;