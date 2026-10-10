"use client";

import { useState } from "react";

const services = [
  { n: "01", title: "Salon websites", text: "A distinctive online home for your services, prices, portfolio and personality." },
  { n: "02", title: "WhatsApp enquiries", text: "Make it effortless for potential clients to ask questions and request appointments." },
  { n: "03", title: "Local-ready essentials", text: "Clear contact details, location links and the page basics your business needs." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [salonName, setSalonName] = useState("");
  const [city, setCity] = useState("Dehradun");
  const [need, setNeed] = useState("A new salon website");
  const [budget, setBudget] = useState("₹5,000–₹10,000");
  const [sent, setSent] = useState(false);

  function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Hi! I'm interested in a salon website.\n\nSalon: ${salonName || "Not specified"}\nCity: ${city}\nRequirement: ${need}\nBudget: ${budget}\n\nPlease share the next steps.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return <main id="home">
    <div className="announcement"><span className="dot" /> Websites made for the next generation of local salons <span>↗</span></div>
    <header className="header">
      <a className="brand" href="#home"><span className="brand-icon">S✳</span><span>STUDIO <i>/ SALON WEB</i></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close −" : "Menu +"}</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <a href="#services" onClick={() => setMenuOpen(false)}>What I build</a><a href="#process" onClick={() => setMenuOpen(false)}>The process</a><a href="#demo" onClick={() => setMenuOpen(false)}>Live concept</a><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Build my website ↗</a>
      </nav>
    </header>

    <section className="hero">
      <div className="hero-copy"><div className="eyebrow">INDEPENDENT WEB DESIGN · DEHRADUN</div>
        <h1>Your next<br />client is <em>online.</em></h1>
        <p className="lead">I build distinctive websites for hair salons and barbers across Dehradun—so when people discover your work, they have a beautiful reason to choose you.</p>
        <div className="actions"><a className="button dark" href="#contact">Let’s build your site ↗</a><a className="underlink" href="#demo">Explore the concept ↓</a></div>
        <div className="proof"><span>✳</span><p><b>Designed around your business.</b><br />Not one-size-fits-all websites.</p></div>
      </div>
      <div className="hero-art"><div className="art-top"><span>THE SALON EDIT / 001</span><span>30°19' N · DEHRADUN</span></div><div className="portrait"><div className="stamp">YOUR<br />BRAND.<br />YOUR<br />VIBE.</div><div className="portrait-caption">THE ART OF<br /><b>FEELING GOOD.</b></div></div><div className="art-bottom"><span>MADE FOR THE LOCALS</span><span>✳</span><span>BUILT TO STAND OUT</span></div><div className="floating"><b>↗ &nbsp; Look professional.</b><br />Make a lasting first impression.</div></div>
      <div className="hero-index">01 — 04</div>
    </section>

    <div className="ticker"><span>YOUR SALON, ONLINE</span><i>✳</i><span>DESIGNED TO GET NOTICED</span><i>✳</i><span>MADE FOR DEHRADUN</span><i>✳</i><span>YOUR SALON, ONLINE</span></div>

    <section className="section intro"><div className="label">01 / THE OPPORTUNITY</div><div className="intro-grid"><h2>Great work deserves<br />a <em>great first impression.</em></h2><div><p>Your clients might find you on Google Maps or Instagram. A dedicated website gives them one clear place to explore your services, see your style, find your location and get in touch.</p><a className="underlink" href="#contact">Make your first impression count ↗</a></div></div>
      <div className="stats"><div><strong>01</strong><b>Your own digital home</b><p>A website that belongs to your brand.</p></div><div><strong>24/7</strong><b>Always open online</b><p>Let customers explore at any time.</p></div><div><strong>↗</strong><b>One clear next step</b><p>Help visitors contact or book with you.</p></div></div>
    </section>

    <section className="section services" id="services"><div className="label">02 / WHAT I BUILD</div><div className="section-heading"><h2>Small business.<br /><em>Big presence.</em></h2><p>Everything you need to make a confident first impression online, without the agency-sized fuss.</p></div><div className="service-list">{services.map(s => <article className="service" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><span className="service-arrow">↗</span></article>)}</div></section>

    <section className="section demo" id="demo"><div className="label">03 / A DESIGN CONCEPT</div><div className="section-heading"><h2>Imagine your salon<br /><em>looking like this.</em></h2><p>A fictional sample concept showing how a polished, modern salon website could feel. This is a design demo, not a real client project.</p></div>
      <div className="browser"><div className="browser-bar"><span>● ● ●</span><div>them ane room / salon concept</div><span>DESIGN STUDY 001</span></div><div className="mock"><div className="mock-nav"><b>THE <i>MANE</i> ROOM <small>HAIR · COLOUR · CARE</small></b><span>OUR SERVICES &nbsp;&nbsp; ABOUT &nbsp;&nbsp; CONTACT</span><a href="#contact">LET’S TALK ↗</a></div><div className="mock-hero"><div><span className="mock-eyebrow">YOUR NEW FAVOURITE SALON</span><h3>Good hair.<br /><i>Good energy.</i></h3><p>Thoughtful cuts, beautiful colour and a little time just for you.</p><a href="#contact">FIND YOUR STYLE ↗</a></div><div className="mock-photo" role="img" aria-label="Modern salon interior" /></div><div className="mock-foot"><span>MADE FOR YOUR EVERYDAY</span><span>THE MANE ROOM · CONCEPT</span><span>GOOD HAIR STARTS HERE ✳</span></div></div></div>
    </section>

    <section className="section process" id="process"><div className="label">04 / SIMPLE FROM START TO LAUNCH</div><div className="section-heading"><h2>A clear process.<br /><em>No tech stress.</em></h2><p>You bring the vision and the business knowledge. I’ll help bring your website to life.</p></div><div className="steps"><article><span>01</span><div className="step-line" /><h3>We learn about your salon</h3><p>Your services, ideal customers, style and goals.</p></article><article><span>02</span><div className="step-line" /><h3>I design your website</h3><p>A tailored look that feels like your brand—not a generic template.</p></article><article><span>03</span><div className="step-line" /><h3>You review and launch</h3><p>We refine the details, then get your site ready to share.</p></article></div></section>

    <section className="local"><div className="local-art"><div className="circle">YOUR<br /><i>business.</i><b>ONLINE ✳</b></div><span>INDEPENDENT · LOCAL · PERSONAL</span></div><div className="local-copy"><div className="label">MADE FOR LOCAL BUSINESS</div><h2>Rooted in<br /><em>Dehradun.</em></h2><p>From a neighbourhood barber to a growing beauty studio, your business deserves a website that feels like you. Let’s build something your customers remember.</p><a className="button light" href="#contact">Let’s talk about your site ↗</a></div></section>

    <section className="section contact" id="contact"><div className="contact-copy"><div className="label">LET’S MAKE IT HAPPEN</div><h2>Ready to be<br /><em>found?</em></h2><p>Tell me a little about your salon. I’ll get back to you with a sensible next step—no pressure, no complicated tech talk.</p><div className="contact-note"><span>✳</span> Usually a friendly conversation comes first.</div></div>
      <form className="contact-form" onSubmit={submitEnquiry}><label htmlFor="salon">SALON / BUSINESS NAME</label><input id="salon" value={salonName} onChange={e => setSalonName(e.target.value)} placeholder="e.g. The Corner Studio" />
        <label htmlFor="city">YOUR CITY</label><select id="city" value={city} onChange={e => setCity(e.target.value)}><option>Dehradun</option><option>Rishikesh</option><option>Haridwar</option><option>Mussoorie</option><option>Other</option></select>
        <label htmlFor="need">WHAT DO YOU NEED?</label><select id="need" value={need} onChange={e => setNeed(e.target.value)}><option>A new salon website</option><option>Redesign my existing website</option><option>Website + WhatsApp enquiries</option><option>Not sure yet</option></select>
        <label htmlFor="budget">PLANNED BUDGET</label><select id="budget" value={budget} onChange={e => setBudget(e.target.value)}><option>₹5,000–₹10,000</option><option>₹10,000–₹20,000</option><option>₹20,000+</option><option>Let’s discuss</option></select>
        <button className="button dark submit" type="submit">Start a WhatsApp conversation ↗</button><p className="form-privacy">This opens WhatsApp with your details pre-filled. Nothing is stored on this website.</p>{sent && <p className="form-feedback">WhatsApp should have opened in a new tab. If not, check your browser’s pop-up settings.</p>}
      </form>
    </section>

    <footer className="footer"><a className="brand" href="#home"><span className="brand-icon">S✳</span><span>STUDIO <i>/ SALON WEB</i></span></a><span>INDEPENDENT WEB DESIGN · DEHRADUN, INDIA</span><a href="#home">BACK TO TOP ↑</a><div className="footer-bottom"><span>© 2026 STUDIO / SALON WEB</span><span>THOUGHTFUL WEBSITES FOR LOCAL BUSINESS.</span><span>BUILT WITH CARE ✳</span></div></footer>
  </main>;
}
