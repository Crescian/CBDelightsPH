export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream: #FDF6EC;
          --warm-brown: #3B2014;
          --caramel: #C4762A;
          --blush: #F2C4A0;
          --dusty-rose: #D98B6B;
          --light-bg: #FDF0E0;
          --text-main: #2B1A0E;
          --text-muted: #7A5C44;
          --accent: #C4762A;
          --tag-bg: #F5DFC0;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          color: var(--text-main);
          overflow-x: hidden;
        }

        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.1rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(253, 246, 236, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(196, 118, 42, 0.15);
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.55rem;
          font-weight: 900;
          color: var(--warm-brown);
          letter-spacing: -0.5px;
        }

        .nav-logo span { color: var(--caramel); }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--caramel); }

        .nav-cta {
          background: var(--warm-brown);
          color: var(--cream) !important;
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          font-weight: 500 !important;
          transition: background 0.2s !important;
        }

        .nav-cta:hover { background: var(--caramel) !important; color: var(--cream) !important; }

        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 7rem 5rem 4rem;
          gap: 4rem;
          background: var(--cream);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,118,42,0.13) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--tag-bg);
          color: var(--caramel);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
        }

        .hero-eyebrow::before { content: '✦'; font-size: 0.7rem; }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.05;
          color: var(--warm-brown);
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .hero h1 em { font-style: italic; color: var(--caramel); }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 430px;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }

        .btn-primary {
          background: var(--warm-brown);
          color: var(--cream);
          padding: 0.85rem 2rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
        }

        .btn-primary:hover { background: var(--caramel); transform: translateY(-2px); }

        .btn-outline {
          background: transparent;
          color: var(--warm-brown);
          padding: 0.85rem 2rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          border: 1.5px solid var(--warm-brown);
          transition: all 0.2s;
          display: inline-block;
        }

        .btn-outline:hover { background: var(--warm-brown); color: var(--cream); transform: translateY(-2px); }

        .hero-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          position: relative;
        }

        .hero-main-card {
          background: var(--light-bg);
          border-radius: 2rem;
          padding: 2.5rem;
          width: 100%;
          max-width: 380px;
          border: 1.5px solid rgba(196,118,42,0.2);
          position: relative;
          overflow: hidden;
        }

        .hero-main-card::after {
          content: '🍪';
          position: absolute;
          bottom: -10px; right: 15px;
          font-size: 5rem;
          opacity: 0.25;
          pointer-events: none;
        }

        .hero-card-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--caramel);
          margin-bottom: 0.4rem;
        }

        .hero-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--warm-brown);
          margin-bottom: 0.5rem;
        }

        .hero-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .hero-flavors { display: flex; flex-wrap: wrap; gap: 0.5rem; }

        .flavor-tag {
          background: rgba(196,118,42,0.12);
          color: var(--caramel);
          font-size: 0.78rem;
          font-weight: 500;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
        }

        .hero-side-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          width: 100%;
          max-width: 380px;
        }

        .mini-card {
          background: var(--light-bg);
          border: 1.5px solid rgba(196,118,42,0.15);
          border-radius: 1.2rem;
          padding: 1.2rem 1rem;
          text-align: center;
        }

        .mini-card-icon { font-size: 2rem; margin-bottom: 0.5rem; }

        .mini-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--warm-brown);
          margin-bottom: 0.2rem;
        }

        .mini-card-price { font-size: 0.8rem; color: var(--caramel); font-weight: 500; }

        section { padding: 6rem 5rem; }

        .section-label {
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--caramel);
          font-weight: 500;
          margin-bottom: 0.8rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900;
          color: var(--warm-brown);
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .section-title em { font-style: italic; color: var(--caramel); }

        .section-sub {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 500px;
          font-weight: 300;
        }

        .about {
          background: var(--warm-brown);
          color: var(--cream);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about .section-title { color: var(--blush); }
        .about .section-label { color: var(--dusty-rose); }
        .about p { color: rgba(253,246,236,0.75); line-height: 1.8; font-weight: 300; font-size: 1rem; margin-bottom: 1.2rem; }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .stat { border-left: 2px solid var(--caramel); padding-left: 1rem; }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 900;
          color: var(--blush);
        }

        .stat-label { font-size: 0.85rem; color: rgba(253,246,236,0.6); margin-top: 0.2rem; }

        .about-visual { display: flex; flex-direction: column; gap: 1.2rem; }

        .mission-card {
          background: rgba(253,246,236,0.08);
          border: 1px solid rgba(253,246,236,0.15);
          border-radius: 1.2rem;
          padding: 1.5rem;
        }

        .mission-card h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--blush);
          margin-bottom: 0.5rem;
        }

        .mission-card p { font-size: 0.9rem; color: rgba(253,246,236,0.65); line-height: 1.65; margin: 0; }

        .products { background: var(--cream); }
        .products-header { text-align: center; margin-bottom: 3.5rem; }
        .products-header .section-sub { margin: 0 auto; }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
        }

        .product-card {
          background: var(--light-bg);
          border: 1.5px solid rgba(196,118,42,0.18);
          border-radius: 2rem;
          padding: 2rem;
          transition: transform 0.25s, border-color 0.25s;
          position: relative;
          overflow: hidden;
        }

        .product-card:hover { transform: translateY(-6px); border-color: var(--caramel); }

        .product-icon { font-size: 3rem; margin-bottom: 1rem; }

        .product-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--warm-brown);
          margin-bottom: 0.4rem;
        }

        .product-price {
          display: inline-block;
          background: var(--tag-bg);
          color: var(--caramel);
          font-size: 0.82rem;
          font-weight: 500;
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          margin-bottom: 1rem;
        }

        .product-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.2rem;
          font-weight: 300;
        }

        .product-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

        .product-tag {
          background: rgba(196,118,42,0.1);
          color: var(--caramel);
          font-size: 0.75rem;
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          font-weight: 500;
        }

        .how { background: var(--light-bg); }
        .how-header { margin-bottom: 3.5rem; }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }

        .steps-grid::before {
          content: '';
          position: absolute;
          top: 2rem;
          left: calc(12.5% + 1.5rem);
          right: calc(12.5% + 1.5rem);
          height: 1.5px;
          background: repeating-linear-gradient(to right, var(--caramel) 0, var(--caramel) 8px, transparent 8px, transparent 16px);
          opacity: 0.35;
          z-index: 0;
        }

        .step { text-align: center; position: relative; z-index: 1; }

        .step-day {
          width: 4rem; height: 4rem;
          border-radius: 50%;
          background: var(--warm-brown);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          font-weight: 700;
          margin: 0 auto 1rem;
          border: 3px solid var(--cream);
          box-shadow: 0 0 0 2px var(--caramel);
        }

        .step h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--warm-brown);
          margin-bottom: 0.4rem;
        }

        .step p { font-size: 0.83rem; color: var(--text-muted); line-height: 1.6; font-weight: 300; }

        .delivery {
          background: var(--cream);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .delivery-options { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }

        .delivery-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--light-bg);
          border: 1.5px solid rgba(196,118,42,0.15);
          border-radius: 1rem;
          padding: 1.1rem 1.3rem;
          transition: border-color 0.2s;
        }

        .delivery-item:hover { border-color: var(--caramel); }
        .delivery-icon { font-size: 1.6rem; }
        .delivery-item h5 { font-weight: 500; font-size: 0.95rem; color: var(--warm-brown); }
        .delivery-item p { font-size: 0.83rem; color: var(--text-muted); font-weight: 300; margin-top: 0.15rem; }

        .social-links { display: flex; gap: 0.8rem; flex-wrap: wrap; }

        .social-pill {
          background: var(--warm-brown);
          color: var(--cream);
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
          display: inline-block;
        }

        .social-pill:hover { background: var(--caramel); }

        .order-cta {
          background: var(--warm-brown);
          color: var(--cream);
          text-align: center;
          padding: 7rem 3rem;
        }

        .order-cta .section-title { color: var(--blush); margin: 0 auto 1rem; }
        .order-cta .section-label { color: var(--dusty-rose); }
        .order-cta p {
          color: rgba(253,246,236,0.7);
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto 2.5rem;
          line-height: 1.75;
          font-weight: 300;
        }

        .order-cta .btn-primary { background: var(--caramel); font-size: 1rem; padding: 1rem 2.5rem; }
        .order-cta .btn-primary:hover { background: var(--blush); color: var(--warm-brown); }

        .order-schedule {
          display: inline-flex;
          gap: 2.5rem;
          margin-top: 2.5rem;
          padding: 1rem 2rem;
          background: rgba(253,246,236,0.06);
          border: 1px solid rgba(253,246,236,0.12);
          border-radius: 1rem;
        }

        .sched-item { text-align: center; }
        .sched-day { font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(253,246,236,0.5); }
        .sched-action { font-size: 0.9rem; color: var(--blush); font-weight: 500; margin-top: 0.25rem; }

        footer {
          background: #1E0F07;
          color: rgba(253,246,236,0.6);
          padding: 2.5rem 5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 900;
          color: var(--blush);
        }

        .footer-logo span { color: var(--caramel); }

        @media (max-width: 900px) {
          .hero, .about, .delivery { grid-template-columns: 1fr; }
          .hero { padding: 7rem 2rem 4rem; }
          section { padding: 4rem 2rem; }
          .products-grid { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr 1fr; }
          .steps-grid::before { display: none; }
          .nav-links { display: none; }
          footer { flex-direction: column; gap: 0.8rem; text-align: center; padding: 2rem; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">CB <span>Delights.</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#how">How to Order</a></li>
          <li><a href="#order" className="nav-cta">Pre-Order Now</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-eyebrow">Pre-Order Desserts · Weekend Pickup &amp; Delivery</div>
          <h1>Sweet <em>treats</em>,<br />made with love.</h1>
          <p className="hero-desc">
            CB Delights. is a home-based dessert business by Crescian Lloyd and Bea Bianca — crafting fresh cookies, coffee jelly, and donut bites, made only after your order.
          </p>
          <div className="hero-buttons">
            <a href="#order" className="btn-primary">Pre-Order Now</a>
            <a href="#menu" className="btn-outline">See the Menu</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-main-card">
            <div className="hero-card-label">Fan Favorite</div>
            <div className="hero-card-title">Premium Cookies</div>
            <div className="hero-card-desc">Freshly baked only after your order — choose from 5 irresistible flavors.</div>
            <div className="hero-flavors">
              <span className="flavor-tag">Chocolate Chip</span>
              <span className="flavor-tag">Double Choco</span>
              <span className="flavor-tag">Red Velvet</span>
              <span className="flavor-tag">Matcha</span>
              <span className="flavor-tag">Cookies &amp; Cream</span>
            </div>
          </div>
          <div className="hero-side-cards" style={{ gridTemplateColumns: '1fr' }}>
            <div className="mini-card">
              <div className="mini-card-icon">☕</div>
              <div className="mini-card-name">Coffee Jelly</div>
              <div className="mini-card-price">₱60 – ₱80 / cup</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div>
          <div className="section-label">Our Story</div>
          <h2 className="section-title">Made <em>fresh,</em><br />made for you.</h2>
          <p>CB Delights. was born from a passion for sweets and a belief that quality desserts shouldn&apos;t cost a fortune. Every item is prepared fresh — only after your order is confirmed.</p>
          <p>Our pre-order model means zero waste, maximum freshness, and a personalized experience every time. No batch sitting on a shelf. Just your treat, made for you.</p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Signature Products</div>
            </div>
            <div className="stat">
              <div className="stat-number">5</div>
              <div className="stat-label">Cookie Flavors</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Pre-made batches — always fresh</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Made with love</div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="mission-card">
            <h4>Our Mission</h4>
            <p>To provide delicious, affordable, and freshly made desserts through a convenient pre-order system while maintaining excellent product quality and customer satisfaction.</p>
          </div>
          <div className="mission-card">
            <h4>Our Vision</h4>
            <p>To become a trusted local dessert brand known for quality products, excellent customer service, and consistent customer satisfaction.</p>
          </div>
          <div className="mission-card">
            <h4>Why Pre-Order?</h4>
            <p>Pre-ordering lets us prepare exactly what you need — nothing more, nothing less. Fresher products, less waste, and a better experience for every customer.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS / MENU */}
      <section className="products" id="menu">
        <div className="products-header">
          <div className="section-label">What We Make</div>
          <h2 className="section-title">Our <em>Menu</em></h2>
          <p className="section-sub">Simple, delicious, freshly made. All products are pre-order only and prepared with care every weekend.</p>
        </div>
        <div className="products-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '800px', margin: '0 auto' }}>
          <div className="product-card">
            <div className="product-icon">🍪</div>
            <div className="product-name">Premium Cookies</div>
            <div className="product-price">₱150 – ₱250 per box</div>
            <p className="product-desc">Freshly baked cookies made with quality ingredients — crispy on the edges, chewy in the middle. Available in five flavors.</p>
            <div className="product-tags">
              <span className="product-tag">Chocolate Chip</span>
              <span className="product-tag">Double Chocolate</span>
              <span className="product-tag">Red Velvet</span>
              <span className="product-tag">Matcha</span>
              <span className="product-tag">Cookies &amp; Cream</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-icon">☕</div>
            <div className="product-name">Coffee Jelly</div>
            <div className="product-price">₱60 – ₱80 per cup</div>
            <p className="product-desc">A creamy, coffee-flavored dessert served in sealed cups. Smooth, refreshing, and perfectly sweet — a great afternoon treat.</p>
            <div className="product-tags">
              <span className="product-tag">Coffee Flavor</span>
              <span className="product-tag">Creamy</span>
              <span className="product-tag">Sealed Cup</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="how-header">
          <div className="section-label">How to Order</div>
          <h2 className="section-title">Simple as <em>pie.</em></h2>
          <p className="section-sub">Our weekly pre-order cycle ensures every dessert is made fresh, just for you.</p>
        </div>
        <div className="steps-grid">
          <div className="step">
            <div className="step-day">Mon–Wed</div>
            <h4>Place Your Order</h4>
            <p>Reach out on social media or message us directly to place your pre-order.</p>
          </div>
          <div className="step">
            <div className="step-day">Thu</div>
            <h4>Order Cutoff</h4>
            <p>Thursday is the last day to send in orders for the weekend.</p>
          </div>
          <div className="step">
            <div className="step-day">Fri–Sat</div>
            <h4>We Prepare</h4>
            <p>We source fresh ingredients and bake / prepare everything by Saturday.</p>
          </div>
          <div className="step">
            <div className="step-day">Sat–Sun</div>
            <h4>Receive &amp; Enjoy</h4>
            <p>Pick up or receive delivery over the weekend. Then enjoy every bite!</p>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="delivery" id="delivery">
        <div>
          <div className="section-label">Delivery &amp; Pickup</div>
          <h2 className="section-title">We bring it <em>to you.</em></h2>
          <p className="section-sub">Flexible delivery options to make getting your desserts as easy as possible.</p>
          <div className="delivery-options">
            <div className="delivery-item">
              <div className="delivery-icon">📍</div>
              <div>
                <h5>Meet-Up Locations</h5>
                <p>Arranged at a convenient spot near you.</p>
              </div>
            </div>
            <div className="delivery-item">
              <div className="delivery-icon">🏢</div>
              <div>
                <h5>Office Delivery</h5>
                <p>Perfect for officemates — we deliver right to your workplace.</p>
              </div>
            </div>
            <div className="delivery-item">
              <div className="delivery-icon">📦</div>
              <div>
                <h5>Home Delivery via Courier</h5>
                <p>We can ship your order through courier services.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-label">Find Us Online</div>
          <h2 className="section-title">Follow us for <em>updates.</em></h2>
          <p className="section-sub" style={{ marginBottom: "1.8rem" }}>
            Stay updated on new flavors, promos, and availability through our social pages.
          </p>
          <div className="social-links">
            <a href="#" className="social-pill">📘 Facebook</a>
            <a href="#" className="social-pill">📸 Instagram</a>
            <a href="#" className="social-pill">🎵 TikTok</a>
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="order-cta" id="order">
        <div className="section-label">Pre-Order Now</div>
        <h2 className="section-title">Ready for something <em>sweet?</em></h2>
        <p>Send us a message to place your order. Orders are open Monday to Wednesday — don&apos;t miss the Thursday cutoff!</p>
        <a href="https://m.me/" className="btn-primary">Message Us to Order</a>
        <div className="order-schedule">
          <div className="sched-item">
            <div className="sched-day">Mon – Wed</div>
            <div className="sched-action">Orders Open</div>
          </div>
          <div className="sched-item">
            <div className="sched-day">Thursday</div>
            <div className="sched-action">Order Cutoff</div>
          </div>
          <div className="sched-item">
            <div className="sched-day">Sat – Sun</div>
            <div className="sched-action">Delivery Day</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">CB <span>Delights.</span></div>
        <div>Home-based · Pre-order · Freshly made every weekend</div>
        <div>© 2025 CB Delights. All rights reserved.</div>
      </footer>
    </>
  );
}
