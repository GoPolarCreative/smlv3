import { FormEvent, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const logo = '/ChatGPT_Image_Sep_12,_2026,_08_17_11_AM.png';
const phoneNumber = '0431 462 466';
const phoneHref = '0431462466';
const emailAddress = 'Shawn.lane@smlconcrete.com';
const galleryImages = Array.from({ length: 8 }, (_, index) => `/${index + 1}.jpg`);
const googleReviewUrl = 'https://www.google.com/search?kgmid=/g/11vjhdjm1d&hl=en-AU&q=SML+CONCRETE+PTY+LTD&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/4&kgs=2a5b0cc072093d4f&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m5/4#lrd=0x35b79b03ef89c51:0x8bb24a1e872a896b,1,,,, ';
const googleLogo = '/Google-favicon-2015.png';

const reviews = [
  { text: 'Always does a good job. Very professional, good communication and rates', author: 'Wendy' },
  { text: 'Shawn helped us with our basketball court slab. He was very professional, easy to communicate with and punctual. Shawn was open to listening to our needs and working with us to achieve our desired outcome. Would highly recommend.', author: 'Michael' },
  { text: 'Shawn & team did an amazing job at my waterfront property on all the concrete works. Very professional, clean & delivered exactly what was promised. If you after a good honest job this is the company u deal with.', author: 'S' },
];

const services = [
  { number: '01', title: 'Driveways', text: 'Built for daily use, designed to lift your home’s street appeal.' },
  { number: '02', title: 'House slabs', text: 'Strong, accurately prepared foundations for new builds and extensions.' },
  { number: '03', title: 'Exposed aggregate', text: 'Distinctive finishes with texture, grip and lasting character.' },
  { number: '04', title: 'Sheds & more', text: 'Practical concrete solutions for sheds, paths, patios and beyond.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '1d0d90bf-8a91-414a-ac1e-8db3aff868a4');
    formData.append('subject', 'New enquiry from SML Concrete website');
    formData.append('from_name', 'SML Concrete website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Unable to send');
      form.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SML Concrete home">
          <img src={logo} alt="SML Concrete" />
          <span className="brand-text">SML Concrete</span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <button onClick={() => scrollTo('services')}>Services</button>
          <button onClick={() => scrollTo('work')}>Our work</button>
          <button onClick={() => scrollTo('about')}>About SML</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <a className="header-call" href={`tel:${phoneHref}`}>
          <Phone size={16} />
          <span>Call Shawn</span>
        </a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid texture-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> South Coast concrete specialists</div>
              <h1>Solid work.<br /><em>Made to last.</em></h1>
              <p className="hero-intro">From driveways to house slabs, SML Concrete delivers clean, considered concrete work across Goolwa Beach and the surrounding South Coast.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo('contact')}>Get a free quote <ArrowRight size={18} /></button>
                <button className="text-link" onClick={() => scrollTo('work')}>View our work <ArrowDown size={16} /></button>
              </div>
              <div className="hero-proof"><span className="proof-mark"><Check size={14} /></span><span><strong>20 years</strong> of concrete experience</span></div>
            </div>
            <div className="hero-form-wrap" id="contact">
              <div className="form-accent" />
              <div className="contact-card">
                <div className="card-kicker">Start your project</div>
                <h2>Let’s pour<br /><span>something great.</span></h2>
                <p>Tell us what you have in mind and Shawn will be in touch.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
                    <label><span>Phone</span><input name="phone" type="tel" placeholder="Your number" required /></label>
                  </div>
                  <label><span>Email</span><input name="email" type="email" placeholder="you@example.com" required /></label>
                  <label><span>What can we help with?</span><textarea name="message" rows={3} placeholder="Tell us a little about your project" required /></label>
                  <button className="button button-blue" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Sending...' : 'Request a free quote'} <ArrowRight size={18} /></button>
                  {formStatus === 'success' && <div className="form-message success"><Check size={16} /> Thanks, your enquiry has been sent.</div>}
                  {formStatus === 'error' && <div className="form-message error">Something went wrong. Please call Shawn directly.</div>}
                </form>
              </div>
            </div>
          </div>
          <div className="hero-footer-line"><span>Goolwa Beach / Fleurieu Peninsula</span><span className="scroll-cue"><span className="scroll-dot" /> Scroll to explore</span></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="section-label">01 / The SML difference</div>
          <div className="intro-content">
            <h2>Concrete work with<br /><span>the details handled.</span></h2>
            <div className="intro-text"><p>SML Concrete is a local, hands-on concreting business built on 20 years of experience and a simple promise: show up, communicate clearly and leave you with work you’re proud of.</p><p>Whether it’s a new driveway, an exposed aggregate finish or a slab for your next build, we bring the same care to every pour.</p><button className="underlined-link" onClick={() => scrollTo('contact')}>Talk to Shawn <ArrowRight size={16} /></button></div>
          </div>
          <div className="stats-row"><div><strong>20</strong><span>Years in the trade</span></div><div><strong>100%</strong><span>Local & hands-on</span></div><div><strong>Free</strong><span>Quotes, always</span></div><div><strong>01</strong><span>Point of contact</span></div></div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-label light-label">02 / What we do</div>
          <div className="services-heading"><h2>Built for the<br /><span>way you live.</span></h2><p>SML Concrete handles all aspects of concrete, from the first measure to the final finish.</p></div>
          <div className="service-list">{services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRightIcon /></article>)}</div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="work-top"><div><div className="section-label">03 / Selected work</div><h2>Recent pours.<br /><span>Real results.</span></h2></div><p>A glimpse at the foundations, driveways and outdoor spaces SML Concrete has brought to life around the Fleurieu.</p></div>
          <div className="gallery-grid">{galleryImages.map((image, index) => <button className={`gallery-item gallery-item-${index + 1}`} key={image} onClick={() => setActiveImage(index)} aria-label={`View project image ${index + 1}`}><img src={image} alt={`SML Concrete project ${index + 1}`} loading="lazy" /><span className="gallery-plus">+</span></button>)}</div>
        </section>

        <section className="reviews-section section-pad" id="reviews">
          <div className="reviews-top">
            <div>
              <div className="section-label">04 / Client reviews</div>
              <h2>What clients<br /><span>are saying.</span></h2>
            </div>
            <div className="reviews-google">
              <img src={googleLogo} alt="Google" className="reviews-google-logo" />
              <div className="reviews-google-text">
                <div className="reviews-stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={18} fill="#12b6ee" strokeWidth={0} />)}</div>
                <span>Reviewed on Google</span>
              </div>
              <a className="button button-primary reviews-cta" href={googleReviewUrl} target="_blank" rel="noreferrer">Read on Google <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.author}>
                <div className="review-stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="#12b6ee" strokeWidth={0} />)}</div>
                <p className="review-text">{review.text}</p>
                <div className="review-author">— {review.author}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section"><div className="cta-inner"><Sparkles size={24} /><h2>Ready to make a<br /><span>strong first impression?</span></h2><p>SML Concrete is ready to talk about your next concrete project.</p><button className="button button-light" onClick={() => scrollTo('contact')}>Get your free quote <ArrowRight size={18} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><img src={logo} alt="SML Concrete" /><span className="footer-brand-text">SML Concrete</span></div><div className="footer-tagline">Concrete work.<br /><span>Done properly.</span></div><div className="footer-contact"><div className="footer-kicker">Get in touch</div><a href={`tel:${phoneHref}`}><Phone size={16} /> {phoneNumber}</a><a href={`mailto:${emailAddress}`}><Mail size={16} /> {emailAddress}</a></div><div className="footer-location"><MapPin size={18} /><span>Goolwa Beach<br />& surrounding areas</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SML Concrete. All rights reserved.</span><span className="footer-bld">Licence No. BLD362979</span><span className="footer-made">Website by <a href="https://www.itscold.com.au" target="_blank" rel="noreferrer">Go Polar</a></span></div></footer>

      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image viewer" onClick={() => setActiveImage(null)}><button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image viewer"><X /></button><button className="lightbox-nav prev" onClick={(event) => { event.stopPropagation(); setActiveImage((activeImage + 7) % 8); }} aria-label="Previous image"><ChevronLeft /></button><img src={galleryImages[activeImage]} alt={`SML Concrete project ${activeImage + 1}`} onClick={(event) => event.stopPropagation()} /><button className="lightbox-nav next" onClick={(event) => { event.stopPropagation(); setActiveImage((activeImage + 1) % 8); }} aria-label="Next image"><ChevronRight /></button></div>}
    </div>
  );
}

function ArrowUpRightIcon() {
  return <span className="service-arrow"><ArrowRight size={18} /></span>;
}

export default App;
