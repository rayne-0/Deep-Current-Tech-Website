"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimateIn from "./components/AnimateIn";
import CountUp from "./components/CountUp";


/* ── DATA ───────────────────────────────────────────── */
const SERVICES = [
  {
    title: "Workflow Automation",
    desc: "Eliminate repetitive manual tasks. We integrate AI directly into your existing tools to automate data entry, approvals, and complex multi-step operations.",
  },
  {
    title: "Intelligent Support Agents",
    desc: "Deploy 24/7 customer support that actually understands context, resolves tickets instantly, and escalates with intelligence.",
  },
  {
    title: "Predictive Analytics",
    desc: "Turn raw data into competitive advantage. Our models analyze trends, forecast outcomes, and surface insights your team can act on.",
  },
  {
    title: "Custom AI Agents",
    desc: "Purpose-built autonomous agents that browse, manage files, trigger APIs, and complete complex tasks end-to-end with zero human intervention.",
  },
  {
    title: "Sales & Outreach AI",
    desc: "Personalized outreach at scale. AI that researches prospects, writes tailored messages, follows up, and books meetings directly into your calendar.",
  },
  {
    title: "Systems Integration",
    desc: "Connect your CRM, ERP, databases, and APIs. Intelligent middleware that makes your entire tech stack operate as one unified system.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We map your workflows, surface automation opportunities, and define measurable ROI targets together.",
  },
  {
    num: "02",
    title: "Architecture & Build",
    desc: "Our engineers design and build your custom solution with full transparency and weekly progress updates.",
  },
  {
    num: "03",
    title: "Integration & QA",
    desc: "We deploy into your existing stack, run rigorous accuracy tests, and validate all edge cases before launch.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Go live with confidence. We monitor performance, tune continuously, and scale with you as your needs grow.",
  },
];

const TICKER_ITEMS = [
  "Workflow Automation",
  "AI Agents",
  "Sales Intelligence",
  "Support Systems",
  "Predictive Analytics",
  "Systems Integration",
  "Workflow Automation",
  "AI Agents",
  "Sales Intelligence",
  "Support Systems",
  "Predictive Analytics",
  "Systems Integration",
];

/* ── COMPONENT ──────────────────────────────────────── */
export default function Home() {


  return (
    <div className={`${styles.page} page-enter`}>

      <Navbar />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroOrb} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={`eyebrow ${styles.heroEyebrow}`}>
              AI Automations Agency
            </div>

            <h1 className={styles.heroTitle}>
              <span className="tg-white">The future</span>
              <br />
              <span className="tg-white">of work is</span>
              <br />
              <span className={`tg-accent ${styles.accentWord}`}>automated.</span>
            </h1>

            <p className={styles.heroSub}>
              We build AI automations that multiply your team&apos;s output,
              eliminate repetitive work, and accelerate growth — deployed in 7 days.
            </p>

            <div className={styles.heroCtas}>
              <Link href="#contact" className="btn btn-solid">
                Book a Free Demo →
              </Link>
              <Link href="#services" className="btn btn-outline">
                View Services
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <span className={styles.heroMetaDot} />
              <span>Available Now</span>
              <span>·</span>
              <span>7-day deploy</span>
              <span>·</span>
              <span>Results guaranteed</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────── */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerInner}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}
              <span className={styles.tickerSep}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────── */}
      <section className={styles.stats}>
        <div className="container">
          <AnimateIn>
            <div className={styles.statsGrid}>
              <div className={styles.statCell}>
                <div className={styles.statNum}><CountUp end={10} suffix="×" /></div>
                <div className={styles.statLabel}>Productivity Boost</div>
              </div>
              <div className={styles.statCell}>
                <div className={styles.statNum}><CountUp end={95} suffix="%" /></div>
                <div className={styles.statLabel}>Accuracy Rate</div>
              </div>
              <div className={styles.statCell}>
                <div className={styles.statNum}><CountUp end={24} suffix="/7" /></div>
                <div className={styles.statLabel}>Always On</div>
              </div>
              <div className={styles.statCell}>
                <div className={styles.statNum}><CountUp end={7} suffix="d" /></div>
                <div className={styles.statLabel}>Avg. Deploy Time</div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section id="services" className={styles.services}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <div className="eyebrow">Services</div>
              <h2 className={styles.sectionTitle}>
                <span className="tg-white">Everything your</span>
                <br />
                <span className="tg-subtle">business needs.</span>
              </h2>
            </div>
            <p className={styles.sectionDesc}>
              From intelligent automation to fully autonomous agents — we build
              precisely what your business needs, nothing more.
            </p>
          </div>

          <div className={styles.serviceList}>
            {SERVICES.map((svc, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className={styles.serviceRow}>
                  <span className={styles.serviceIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.serviceBody}>
                    <h3 className={styles.serviceTitle}>{svc.title}</h3>
                    <p className={styles.serviceDesc}>{svc.desc}</p>
                  </div>
                  <span className={styles.serviceArrow}>↗</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────── */}
      <section id="process" className={styles.process}>
        <div className="container">
          <div className={styles.processLayout}>
            <div className={styles.processSidebar}>
              <div className="eyebrow">Process</div>
              <h2 className={styles.processSideTitle}>
                <span className="tg-white">Live in</span>
                <br />
                <span className="tg-accent">7 days.</span>
              </h2>
              <p className={styles.processSideDesc}>
                A streamlined, battle-tested process that gets your automation
                live fast — with zero disruption to current operations.
              </p>
            </div>

            <div className={styles.processSteps}>
              {STEPS.map((step, i) => (
                <div key={i} className={styles.processStep}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section id="contact" className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>
                <span className="tg-white">Ready to automate</span>
                <br />
                <span className="tg-accent">and accelerate?</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Book a free 30-minute strategy call. We&apos;ll identify your
                highest-ROI automation opportunity and show you exactly how
                we can help — no commitment required.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-solid">
                Book a Free Call →
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Services
              </Link>
              <span className={styles.ctaNote}>No commitment required</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
