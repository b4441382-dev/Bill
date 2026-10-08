import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown,
  CircleHelp, Crosshair, Eye, Layers3, LockKeyhole, Menu, MousePointer2,
  Play, ScanLine, ShieldCheck, Sparkles, Target, Users, X,
} from 'lucide-react';

const Logo = ({ light = false, compact = false }) => (
  <a className={`brand ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''}`} href="#top" aria-label="AI Revenue OS home">
    <span className="brand-symbol" aria-hidden="true"><span /><span /><span /><span /></span>
    {!compact && <span className="brand-name">AI Revenue <b>OS</b></span>}
  </a>
);

const flowSteps = [
  ['01', 'Data', 'A clearer picture of every journey'],
  ['02', 'Analysis', 'Patterns across pages and sessions'],
  ['03', 'Opportunity', 'The moments worth acting on'],
  ['04', 'Action', 'Experiments your team can measure'],
];

const faqItems = [
  ['What does AI Revenue OS actually do?', 'It brings website, acquisition and lead signals into one workflow. The product highlights where journeys may be losing momentum, explains the evidence behind each finding and helps teams decide what to test next.'],
  ['Do I need to replace my analytics tools?', 'No. AI Revenue OS is designed as an intelligence layer alongside the tools you already use. Integrations are part of the product roadmap; this preview uses a clearly labelled demonstration dataset.'],
  ['Are the opportunity estimates guaranteed?', 'No. Opportunity labels are directional estimates based on the data available. They are not forecasts or promises of revenue. Real outcomes depend on your audience, offer, implementation and market.'],
  ['How is visitor privacy handled?', 'The product is designed around data minimisation and workspace-level access. This preview does not collect visitor data, connect to analytics providers or submit your website URL to an external service.'],
];

function ProductPreview() {
  const bars = [34, 42, 38, 52, 46, 61, 55, 72, 66, 84, 76, 94, 86, 100, 90, 113, 104, 126, 118, 143, 131, 154, 145, 167];
  return (
    <div className="hero-product-wrap" aria-label="AI Revenue OS dashboard preview">
      <div className="hero-product-glow" />
      <div className="hero-product-window">
        <div className="preview-topbar">
          <div className="preview-brand"><span className="preview-mark"><span /></span><span>revenue<span className="preview-os">.os</span></span></div>
          <div className="preview-workspace"><span className="online-dot" /> Northstar Commerce <ChevronDown size={12} /></div>
          <div className="preview-avatar">JD</div>
        </div>
        <div className="preview-content">
          <div className="preview-side">
            <div className="preview-side-item active"><BarChart3 size={13} /> Overview</div>
            <div className="preview-side-item"><ScanLine size={13} /> Intelligence</div>
            <div className="preview-side-item"><Users size={13} /> Leads</div>
            <div className="preview-side-item"><Crosshair size={13} /> Experiments</div>
            <div className="preview-side-bottom"><span className="preview-lock"><LockKeyhole size={11} /></span> Demo workspace</div>
          </div>
          <div className="preview-main">
            <div className="preview-heading-row"><div><div className="preview-eyebrow">MONDAY, OCTOBER 07</div><h3>Good morning, Jordan</h3><p>Here’s what’s happening across your journey.</p></div><span className="preview-range">Last 30 days⌄</span></div>
            <div className="preview-kpis">
              <div className="preview-kpi"><span>Visitors</span><b>42,892</b><small className="up">↗ 12.8%</small></div>
              <div className="preview-kpi"><span>Conversion rate</span><b>3.42%</b><small className="up">↗ 0.6%</small></div>
              <div className="preview-kpi"><span>Qualified leads</span><b>1,284</b><small className="up">↗ 8.2%</small></div>
            </div>
            <div className="preview-chart-box">
              <div className="preview-chart-head"><div><b>Journey performance</b><span>Sessions and qualified leads over time</span></div><div className="preview-legend"><i /> Sessions <i className="legend-mint" /> Leads</div></div>
              <div className="preview-chart">
                <div className="chart-y-labels"><span>50k</span><span>25k</span><span>0</span></div>
                <div className="chart-plot">
                  <div className="chart-grid-line line-one" /><div className="chart-grid-line line-two" /><div className="chart-grid-line line-three" />
                  <div className="preview-bars">{bars.map((h, i) => <i key={i} style={{ height: `${h}px`, opacity: .32 + (i / bars.length) * .5 }} />)}</div>
                  <svg className="preview-line" viewBox="0 0 420 170" preserveAspectRatio="none" aria-hidden="true"><path d="M0 135 C30 128 35 143 65 120 S104 128 123 101 S157 116 183 89 S218 101 242 76 S280 89 303 57 S340 75 361 42 S397 47 420 20" fill="none" stroke="#48d6ae" strokeWidth="2.2" /><path d="M0 135 C30 128 35 143 65 120 S104 128 123 101 S157 116 183 89 S218 101 242 76 S280 89 303 57 S340 75 361 42 S397 47 420 20 L420 170 L0 170Z" fill="url(#mintFill)" opacity=".15" /><defs><linearGradient id="mintFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#48d6ae" /><stop offset="1" stopColor="#48d6ae" stopOpacity="0" /></linearGradient></defs></svg>
                  <div className="chart-scan" />
                </div>
              </div>
              <div className="preview-chart-dates"><span>Sep 08</span><span>Sep 15</span><span>Sep 22</span><span>Sep 29</span><span>Oct 07</span></div>
            </div>
            <div className="preview-opportunity"><span className="preview-spark"><Sparkles size={14} /></span><div><b>Conversion opportunity detected</b><span>Mobile visitors reach pricing but rarely select a plan.</span></div><span className="preview-impact">HIGH IMPACT</span></div>
          </div>
        </div>
        <div className="preview-scanline" />
      </div>
      <div className="hero-float-chip"><span className="float-dot"><Sparkles size={12} /></span><span><b>Opportunity found</b><small>Pricing page · mobile</small></span><ArrowUpRight size={15} /></div>
      <div className="hero-float-note"><span className="note-wave"><i /><i /><i /><i /><i /></span><span><b>Journey signals</b><small>Preview animation</small></span></div>
    </div>
  );
}

function FunnelVisual() {
  const stages = [
    { label: 'Visitors', value: '100,000', width: 100, color: 'blue' },
    { label: 'Engaged', value: '38,420', width: 76, lost: '−61.6%', color: 'cyan' },
    { label: 'Product interactions', value: '7,420', width: 56, lost: '−80.7%', color: 'teal' },
    { label: 'Leads', value: '1,284', width: 38, lost: '−82.7%', color: 'mint' },
    { label: 'Qualified leads', value: '186', width: 25, lost: '−85.5%', color: 'orange' },
    { label: 'Customers', value: '63', width: 15, lost: '−66.1%', color: 'coral' },
  ];
  return <div className="funnel-visual"><div className="funnel-head"><span>ILLUSTRATIVE JOURNEY</span><span>Last 30 days</span></div>{stages.map((stage, i) => <div className="funnel-row" key={stage.label}><div className="funnel-label"><span>{stage.label}</span><b>{stage.value}</b></div><div className="funnel-track"><div className={`funnel-fill ${stage.color}`} style={{ width: `${stage.width}%` }} /></div>{stage.lost ? <span className="funnel-lost">{stage.lost}<small>drop-off</small></span> : <span className="funnel-lost funnel-start"><ArrowDownRight size={14} /></span>}</div>)}<div className="funnel-insight"><span className="insight-icon"><Eye size={14} /></span><p><b>Where did the momentum go?</b><br />The largest drop-off appears before product interaction.</p><span className="insight-arrow"><ArrowRight size={15} /></span></div></div>;
}

function AuditVisual() {
  return <div className="audit-visual"><div className="audit-visual-head"><div><span className="eyebrow">WEBSITE AUDIT · DEMO</span><b>northstar.co</b></div><span className="audit-status"><span /> Analysis complete</span></div><div className="audit-overview"><div className="audit-score-ring"><div><b>78</b><span>/100</span></div></div><div className="audit-overview-copy"><span>OPPORTUNITY SCORE</span><b>Good foundation.<br />Room to improve.</b><small>Based on 5 areas of review</small></div></div><div className="audit-score-list">{[['UX clarity', 72], ['Conversion', 81], ['Content', 76], ['Trust', 69], ['Mobile', 88]].map(([name, score]) => <div className="audit-score-item" key={name}><span>{name}</span><div><i style={{ width: `${score}%` }} /></div><b>{score}</b></div>)}</div><div className="audit-find"><span><Target size={15} /></span><div><b>Make the primary action easier to find</b><small>Mobile · High potential · Low effort</small></div><ArrowUpRight size={15} /></div><div className="demo-caption"><CircleHelp size={12} /> Demonstration data · not a live website crawl</div></div>;
}

function RecommendationVisual() {
  return <div className="rec-visual"><div className="rec-top"><span className="rec-status"><i /> NEW OPPORTUNITY</span><span className="rec-more">•••</span></div><div className="rec-main-icon"><Sparkles size={20} /></div><span className="rec-kicker">MOBILE · PRICING PAGE</span><h4>Your primary CTA is<br />hard to discover on mobile.</h4><p>Visitors reach your pricing page, but the next step is not obvious above the fold.</p><div className="rec-data"><div><span>Sessions</span><b>12,430</b></div><div><span>CTA interaction</span><b className="rec-bad">1.8%</b></div><div><span>Potential impact</span><b className="rec-high">High</b></div></div><div className="rec-action"><span><b>Recommended action</b><small>Move the CTA above the fold and simplify the message.</small></span><button aria-label="Open recommendation"><ArrowRight size={16} /></button></div></div>;
}

function LeadVisual() {
  const people = [['JD', 'Jordan Davis', 'Acme Studio', '94', 'Qualified', 'purple'], ['SL', 'Sam Lee', 'Nova Health', '82', 'Review', 'blue'], ['MK', 'Morgan Kim', 'Orbit Labs', '71', 'New', 'orange']];
  return <div className="lead-visual"><div className="lead-headline"><span>LEAD INTELLIGENCE</span><span className="lead-filter"><span className="green-dot" /> All leads <ChevronDown size={12} /></span></div><div className="lead-table-head"><span>CONTACT</span><span>SOURCE</span><span>SCORE</span><span>STATUS</span></div>{people.map((p) => <div className="lead-table-row" key={p[1]}><div className="lead-person"><i className={`person-avatar ${p[5]}`}>{p[0]}</i><span><b>{p[1]}</b><small>{p[2]}</small></span></div><span className="lead-source">Google</span><b className="lead-score">{p[3]}</b><span className={`lead-state ${p[4].toLowerCase()}`}>{p[4]}</span></div>)}<div className="lead-summary"><span className="summary-ai"><Sparkles size={13} /></span><p><b>AI lead summary</b><br />High-engagement visitor. Returned twice and viewed pricing before requesting a consultation.</p></div><div className="demo-caption"><CircleHelp size={12} /> Illustrative profiles · scores are estimates</div></div>;
}

function CopilotVisual() {
  return <div className="copilot-visual"><div className="copilot-window-top"><span className="copilot-orb"><Sparkles size={13} /></span><div><b>Revenue Copilot</b><small>DEMO DATASET</small></div><span className="copilot-live"><i /> Ready</span></div><div className="copilot-thread"><div className="copilot-message user-message">Why are fewer visitors becoming leads?</div><div className="copilot-answer"><span className="copilot-mini"><Sparkles size={12} /></span><div><p><b>Observation</b><br />The biggest change is between engaged sessions and form starts.</p><p><b>Data used</b><br />Demo workspace · last 30 days · 8,420 sessions</p><p><b>Hypothesis</b><br />The lead form may be asking for too much too soon.</p><p><b>Next step</b><br />Test a shorter form and compare qualified lead rate.</p></div></div></div><div className="copilot-input">Ask about your revenue journey… <span><ArrowRight size={14} /></span></div><div className="demo-caption"><CircleHelp size={12} /> Example response generated from demo data</div></div>;
}

function ExperimentVisual() {
  return <div className="experiment-visual"><div className="experiment-header"><div><span className="eyebrow">EXPERIMENT CENTER</span><b>Homepage CTA test</b></div><span className="running-badge"><i /> RUNNING</span></div><div className="experiment-variants"><div className="variant-card"><span>VARIANT A · CONTROL</span><div className="variant-cta">Get started <ArrowRight size={11} /></div><div className="variant-result"><span>Click-through rate</span><b>2.8%</b></div><div className="variant-bar"><i style={{ width: '54%' }} /></div></div><div className="variant-card variant-winner"><span>VARIANT B · TEST</span><div className="variant-cta mint-cta">Increase my revenue <ArrowRight size={11} /></div><div className="variant-result"><span>Click-through rate</span><b>3.6% <em>+0.8%</em></b></div><div className="variant-bar"><i style={{ width: '72%' }} /></div></div></div><div className="experiment-foot"><span><Users size={13} /> 4,208 visitors enrolled</span><span className="experiment-confidence"><span>●</span> Directional · not yet conclusive</span></div><div className="demo-caption"><CircleHelp size={12} /> Preview only · no live experiment is running</div></div>;
}

function LandingPage({ onDemo, onAudit, onOnboarding }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [annual, setAnnual] = useState(true);
  const closeMenu = () => setMobileOpen(false);
  return (
    <div className="marketing-site" id="top">
      <header className="marketing-nav">
        <div className="nav-inner"><Logo light /><nav className={mobileOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation"><a href="#platform" onClick={closeMenu}>Platform</a><a href="#how-it-works" onClick={closeMenu}>How it works</a><a href="#security" onClick={closeMenu}>Security</a><a href="#pricing" onClick={closeMenu}>Pricing</a><a href="#faq" onClick={closeMenu}>FAQ</a><div className="mobile-nav-actions"><button className="nav-login" onClick={() => { onDemo(); closeMenu(); }}>Explore demo</button><button className="button button-primary nav-mobile-cta" onClick={() => { onOnboarding(); closeMenu(); }}>Start onboarding <ArrowRight size={15} /></button></div></nav><div className="nav-actions"><button className="nav-login" onClick={onDemo}>Explore demo</button><button className="button button-primary nav-cta" onClick={onOnboarding}>Get started <ArrowRight size={15} /></button></div><button className="mobile-menu-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid-bg" />
          <div className="hero-container">
            <div className="hero-copy">
              <div className="eyebrow-pill"><span className="pill-orb"><Sparkles size={11} /></span> REVENUE INTELLIGENCE, IN ONE PLACE <span className="pill-line" /></div>
              <h1>Your website should sell <span>before your</span> sales team speaks.</h1>
              <p className="hero-subtitle">AI Revenue OS analyzes your customer journey, identifies conversion leaks and turns behavioral insights into actionable revenue opportunities.</p>
              <div className="hero-actions"><button className="button button-primary button-large" onClick={onAudit}>Analyze my website <ArrowRight size={17} /></button><a className="button button-quiet button-large" href="#how-it-works"><span className="play-icon"><Play size={11} fill="currentColor" /></span> See how it works</a></div>
              <div className="hero-trust"><span className="hero-trust-symbol"><ShieldCheck size={15} /></span><span><b>Built for thoughtful growth teams</b><small>One clear view of your customer journey</small></span><span className="hero-trust-separator" /><span className="trust-lock"><LockKeyhole size={14} /> Privacy-first by design</span></div>
            </div>
            <ProductPreview />
          </div>
          <div className="hero-bottom"><div><span className="live-ring"><i /></span> INTELLIGENCE THAT CONNECTS THE JOURNEY</div><div className="hero-bottom-flow"><span>TRAFFIC</span><i /> <span>WEBSITE</span><i /> <b>AI INTELLIGENCE</b><i /> <span>LEADS</span><i /> <span>REVENUE</span></div><a href="#problem" aria-label="Scroll to see the problem"><ArrowDownRight size={16} /></a></div>
        </section>

        <section className="proof-strip" aria-label="Industries"><div className="proof-inner"><span className="proof-label">A clearer journey for</span><span>Commerce</span><i /><span>SaaS</span><i /><span>Services</span><i /><span>Agencies</span><i /><span>B2B teams</span><span className="proof-note">No client logos. Just a better way to see the journey.</span></div></section>

        <section className="problem-section section-pad" id="problem"><div className="section-container problem-layout"><div className="section-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-index">01</span> THE OPPORTUNITY</span><h2>Traffic isn't the problem.<br /><span>Lost opportunities are.</span></h2><p>Every visit tells a story. Most analytics tools tell you what happened. AI Revenue OS helps you see where potential customers lose momentum—and what to investigate next.</p><a className="text-link" href="#how-it-works">See how the engine connects the dots <ArrowRight size={16} /></a><div className="problem-footnote"><span className="footnote-mark">i</span> Illustrative funnel data · outcomes vary by business</div></div><FunnelVisual /></div></section>

        <section className="engine-section section-pad" id="how-it-works"><div className="section-container"><div className="engine-top"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-index">02</span> FROM SIGNAL TO ACTION</span><h2>A system for seeing<br /><span>the whole journey.</span></h2></div><p>Bring scattered customer signals into a practical workflow. Understand what changed, explore why it might have changed and choose what to test next.</p></div><div className="engine-flow" aria-label="Revenue Intelligence Engine process">{flowSteps.map((step, i) => <div className="engine-step" key={step[0]}><div className="engine-node"><span>{step[0]}</span><div className="engine-node-icon">{[<BarChart3 size={18} />, <ScanLine size={18} />, <Crosshair size={18} />, <ArrowUpRight size={18} />][i]}</div></div><b>{step[1]}</b><small>{step[2]}</small>{i < flowSteps.length - 1 && <span className="engine-connector"><i /></span>}</div>)}</div><div className="engine-note"><span><Sparkles size={14} /></span><p><b>Revenue Intelligence Engine</b> · Data → Analysis → Behavioral insights → Opportunities → Recommendations → Experiments</p><a href="#platform" aria-label="Explore the platform"><ArrowRight size={15} /></a></div></div></section>

        <section className="platform-section section-pad" id="platform"><div className="section-container"><div className="platform-heading"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-index">03</span> THE PLATFORM</span><h2>Make the next move<br /><span>with more clarity.</span></h2></div><p>One connected workspace for the signals, ideas and experiments that move customer journeys forward.</p></div>
          <div className="feature-row feature-audit"><div className="feature-copy"><span className="feature-number">01 / WEBSITE AUDIT</span><div className="feature-icon"><ScanLine size={18} /></div><h3>Find the friction<br />in your first impression.</h3><p>Review clarity, usability, trust and conversion signals in one place. See what may be getting in the way—and what deserves a closer look.</p><a className="text-link" href="#pricing" onClick={(e) => { e.preventDefault(); onAudit(); }}>Explore the website audit <ArrowRight size={15} /></a><span className="feature-note"><LockKeyhole size={12} /> Preview audit uses a sample report. No live crawl.</span></div><AuditVisual /></div>
          <div className="feature-row feature-reverse"><RecommendationVisual /><div className="feature-copy"><span className="feature-number">02 / AI RECOMMENDATIONS</span><div className="feature-icon"><Sparkles size={18} /></div><h3>Know what to fix<br />before you fix it.</h3><p>Recommendations show the evidence, potential impact and a practical next action—so your team can focus on the changes worth testing.</p><a className="text-link" href="#pricing" onClick={(e) => { e.preventDefault(); onDemo(); }}>Explore the demo workspace <ArrowRight size={15} /></a></div></div>
          <div className="feature-row feature-leads"><div className="feature-copy"><span className="feature-number">03 / LEAD INTELLIGENCE</span><div className="feature-icon"><Users size={18} /></div><h3>Prioritize signals,<br />not assumptions.</h3><p>Bring engagement patterns and lead activity into view. Estimated scores help teams prioritize follow-up—not claim to know what a person is thinking.</p><a className="text-link" href="#pricing" onClick={(e) => { e.preventDefault(); onDemo('leads'); }}>See lead intelligence <ArrowRight size={15} /></a><span className="feature-note"><ShieldCheck size={12} /> Scores are directional estimates based on available signals.</span></div><LeadVisual /></div>
          <div className="feature-row feature-reverse feature-copilot"><CopilotVisual /><div className="feature-copy"><span className="feature-number">04 / REVENUE COPILOT</span><div className="feature-icon"><Sparkles size={18} /></div><h3>Ask better questions.<br />Get grounded answers.</h3><p>Ask about a conversion change or where to start. Copilot structures each answer around observations, data used, hypotheses and a proposed action.</p><a className="text-link" href="#pricing" onClick={(e) => { e.preventDefault(); onDemo('copilot'); }}>Meet Revenue Copilot <ArrowRight size={15} /></a></div></div>
          <div className="feature-row feature-experiments"><div className="feature-copy"><span className="feature-number">05 / EXPERIMENT CENTER</span><div className="feature-icon"><Crosshair size={18} /></div><h3>Turn a good question<br />into a measured test.</h3><p>Shape ideas into focused experiments. Track the metric that matters and distinguish a promising direction from a result that's ready to trust.</p><a className="text-link" href="#pricing" onClick={(e) => { e.preventDefault(); onDemo('experiments'); }}>Explore experiments <ArrowRight size={15} /></a><span className="feature-note"><CircleHelp size={12} /> Experiment preview only · no tests are running.</span></div><ExperimentVisual /></div>
        </div></section>

        <section className="analytics-band section-pad"><div className="section-container analytics-band-grid"><div><span className="eyebrow"><span className="eyebrow-index">06</span> ANALYTICS THAT ANSWER THE NEXT QUESTION</span><h2>From dashboard<br />to direction.</h2><p>Track visitors, engagement, lead quality and revenue opportunities in context. Then follow the biggest leak through your funnel.</p><button className="button button-dark" onClick={() => onDemo('analytics')}>Explore analytics <ArrowRight size={15} /></button></div><div className="analytics-visual"><div className="analytics-visual-top"><span>REVENUE FUNNEL</span><span>Last 30 days <ChevronDown size={11} /></span></div><div className="analytics-funnel-list">{[['Traffic', '42,892', '100%', 100], ['Engagement', '18,430', '42.9%', 83], ['Lead', '1,284', '6.9%', 58], ['Qualified lead', '186', '14.5%', 36], ['Customer', '63', '33.9%', 20]].map(([label, value, rate, width], i) => <div className="analytics-funnel-row" key={label}><div><span className="analytics-funnel-dot">0{i + 1}</span><b>{label}</b><strong>{value}</strong><span className="analytics-funnel-rate">{rate}</span></div><div className="analytics-funnel-track"><i style={{ width: `${width}%` }} /></div></div>)}</div><div className="analytics-callout"><span><Target size={14} /></span><p><b>Largest leak · Engagement → Lead</b><br />Review form starts and CTA interaction on high-traffic pages.</p><ArrowRight size={14} /></div><div className="demo-caption"><CircleHelp size={12} /> Illustrative demo data · rates are directional</div></div></div></section>

        <section className="integrations-section section-pad"><div className="section-container integrations-content"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-index">07</span> CONNECT THE SIGNALS</span><h2>Your tools stay yours.<br /><span>Your view gets clearer.</span></h2><p>AI Revenue OS is designed to sit alongside the tools your team already uses. Integrations are on the roadmap; nothing is connected in this demo.</p><button className="button button-outline-light" onClick={() => onDemo('integrations')}>View integrations <ArrowRight size={15} /></button></div><div className="integrations-board"><div className="integration-board-top"><span>INTEGRATION ROADMAP</span><span className="roadmap-badge"><i /> COMING SOON</span></div><div className="integration-logos"><div><span className="tool-symbol ga-symbol">G</span><b>Google Analytics</b><small>COMING SOON</small></div><div><span className="tool-symbol shop-symbol">S</span><b>Shopify</b><small>COMING SOON</small></div><div><span className="tool-symbol hub-symbol">H</span><b>HubSpot</b><small>COMING SOON</small></div><div><span className="tool-symbol stripe-symbol">s</span><b>Stripe</b><small>COMING SOON</small></div><div><span className="tool-symbol meta-symbol">∞</span><b>Meta Ads</b><small>COMING SOON</small></div><div><span className="tool-symbol sales-symbol">SF</span><b>Salesforce</b><small>COMING SOON</small></div></div><div className="integration-more">Google Ads <i /> WhatsApp Business <i /> Email platforms <span>+ more</span></div><div className="integration-privacy"><LockKeyhole size={13} /> Your data is never sold. Workspace controls are being built into the platform.</div></div></div></section>

        <section className="security-section section-pad" id="security"><div className="section-container"><div className="security-title"><span className="eyebrow eyebrow-light"><span className="eyebrow-index">08</span> TRUST BY DESIGN</span><h2>Built for teams that<br /><span>take data seriously.</span></h2><p>Security is a product decision, not a badge. We’re building with transparency and data minimisation at the core.</p></div><div className="security-grid"><div><span><ShieldCheck size={19} /></span><b>Privacy-minded</b><p>Clear data purpose, explicit choices and no surprise tracking in this preview.</p></div><div><span><LockKeyhole size={19} /></span><b>Workspace-aware</b><p>Designed for tenant-level access control and separation as the product evolves.</p></div><div><span><BarChart3 size={19} /></span><b>Transparent analytics</b><p>Know which signals informed a recommendation and where the data came from.</p></div><div><span><Layers3 size={19} /></span><b>Built to grow</b><p>A modular foundation for integrations, experiments and additional industries.</p></div></div><div className="security-disclaimer"><span className="disclaimer-mark">i</span> This product preview is not production software. No security certification or third-party audit is claimed.</div></div></section>

        <section className="pricing-section section-pad" id="pricing"><div className="section-container"><div className="pricing-header"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-index">09</span> SIMPLE, TRANSPARENT PLANS</span><h2>Start with clarity.<br /><span>Grow with confidence.</span></h2></div><div className="billing-toggle" aria-label="Billing period"><button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)}>Monthly</button><button className={annual ? 'active' : ''} onClick={() => setAnnual(true)}>Yearly <span>−20%</span></button></div></div><div className="pricing-grid"><div className="pricing-card"><span className="plan-tag">FOR SMALL TEAMS</span><h3>Starter</h3><p>See the important signals and build a strong foundation.</p><div className="plan-price"><b>€{annual ? '39' : '49'}</b><span>/ month<br />billed {annual ? 'yearly' : 'monthly'}</span></div><button className="button button-outline-light pricing-button" onClick={onOnboarding}>Start with Starter <ArrowRight size={15} /></button><div className="plan-divider" /><span className="plan-includes">INCLUDES</span><ul><li><Check size={14} /> 1 website</li><li><Check size={14} /> Core analytics overview</li><li><Check size={14} /> Monthly website audit</li><li><Check size={14} /> 3 team seats</li></ul></div><div className="pricing-card pricing-featured"><div className="popular-ribbon"><Sparkles size={11} /> MOST POPULAR</div><span className="plan-tag">FOR GROWING TEAMS</span><h3>Growth</h3><p>Find opportunities, prioritize leads and test what works.</p><div className="plan-price"><b>€{annual ? '119' : '149'}</b><span>/ month<br />billed {annual ? 'yearly' : 'monthly'}</span></div><button className="button button-primary pricing-button" onClick={onOnboarding}>Explore Growth <ArrowRight size={15} /></button><div className="plan-divider" /><span className="plan-includes">EVERYTHING IN STARTER, PLUS</span><ul><li><Check size={14} /> Advanced analytics</li><li><Check size={14} /> AI recommendations</li><li><Check size={14} /> Lead intelligence</li><li><Check size={14} /> Conversion experiments</li><li><Check size={14} /> 10 team seats</li></ul></div><div className="pricing-card"><span className="plan-tag">FOR COMPLEX ORGANIZATIONS</span><h3>Enterprise</h3><p>More control, support and flexibility for multiple teams.</p><div className="plan-price custom-price"><b>Let's talk</b><span>Tailored to<br />your needs</span></div><button className="button button-outline-light pricing-button" onClick={onOnboarding}>Talk to our team <ArrowRight size={15} /></button><div className="plan-divider" /><span className="plan-includes">GROWTH, PLUS</span><ul><li><Check size={14} /> Custom integrations</li><li><Check size={14} /> Multiple workspaces</li><li><Check size={14} /> Advanced access controls</li><li><Check size={14} /> Priority support</li><li><Check size={14} /> Dedicated onboarding</li></ul></div></div><p className="pricing-disclaimer">Illustrative pricing for product preview · final packaging and availability may change. No charge is taken here.</p></div></section>

        <section className="faq-section section-pad" id="faq"><div className="section-container faq-layout"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-index">10</span> GOOD QUESTIONS</span><h2>Clarity starts<br /><span>with honest answers.</span></h2><p>Wondering how the product works? Here’s what matters.</p><button className="text-link" onClick={() => onDemo('copilot')}>Explore Revenue Copilot <ArrowRight size={15} /></button></div><div className="faq-list">{faqItems.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={question}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{question}</span><span className="faq-plus">{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="final-cta-section"><div className="final-cta-glow" /><div className="section-container final-cta-inner"><span className="eyebrow"><span className="eyebrow-index">NEXT</span> START WITH THE SIGNALS YOU ALREADY HAVE</span><h2>Your next opportunity<br /><span>could be hiding in plain sight.</span></h2><p>Explore the demo workspace or start a guided setup. No integrations, commitments or live data needed.</p><div className="hero-actions"><button className="button button-primary button-large" onClick={onDemo}>Explore the demo <ArrowRight size={16} /></button><button className="button button-quiet button-large" onClick={onOnboarding}>Start guided onboarding <ArrowRight size={16} /></button></div><small><LockKeyhole size={12} /> Demo workspace uses illustrative data, clearly labelled.</small></div></section>
      </main>
      <footer className="marketing-footer"><div className="section-container"><div className="footer-main"><div className="footer-brand-col"><Logo light /><p>Turn every visitor into a revenue opportunity.</p><span className="footer-demo-status"><i /> Product preview · Demo data</span></div><div className="footer-links"><div><b>Product</b><a href="#platform">Platform</a><a href="#how-it-works">How it works</a><button onClick={() => onDemo('analytics')}>Analytics demo</button><button onClick={() => onDemo('integrations')}>Integrations</button></div><div><b>Company</b><a href="#security">Security</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div><div><b>Get started</b><button onClick={onDemo}>Explore demo</button><button onClick={onOnboarding}>Guided onboarding</button><button onClick={() => onDemo('copilot')}>Revenue Copilot demo</button></div></div></div><div className="footer-bottom"><span>© 2026 AI Revenue OS · Product concept preview</span><span>Built around evidence, not promises.</span><a href="#top" aria-label="Back to top"><ArrowUpRight size={15} /> Back to top</a></div></div></footer>
    </div>
  );
}

export default LandingPage;
