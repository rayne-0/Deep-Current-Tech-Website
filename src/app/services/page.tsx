import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import styles from "./services.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Deepcurrent Tech",
  description: "AI automation services tailored for your business — from workflow automation to custom AI agents.",
};

const SERVICES = [
  {
    index: "01",
    title: "Workflow Automation",
    tagline: "Do more with less",
    desc: "We map your existing workflows and identify every step that can be handed to AI. From data entry to multi-system approvals, we build pipelines that run 24/7 without human input.",
    features: ["CRM & ERP Integration", "Document Processing", "Approval Chains", "Scheduled Reporting"],
    accent: "cyan",
  },
  {
    index: "02",
    title: "Intelligent Support Agents",
    tagline: "Always on, always accurate",
    desc: "Deploy conversational agents that understand context, retain memory across sessions, resolve tickets instantly, and escalate edge cases with full conversation history to your human team.",
    features: ["Multi-channel (Chat, Email, WhatsApp)", "Context-aware Resolution", "Smart Escalation", "Analytics Dashboard"],
    accent: "blue",
  },
  {
    index: "03",
    title: "Predictive Analytics",
    tagline: "See what's coming before it arrives",
    desc: "We train models on your historical data to surface trends, forecast demand, flag anomalies, and generate executive-ready reports — automatically, on your schedule.",
    features: ["Demand Forecasting", "Churn Prediction", "Anomaly Detection", "Automated Reporting"],
    accent: "purple",
  },
  {
    index: "04",
    title: "Custom AI Agents",
    tagline: "Autonomous, end-to-end",
    desc: "Purpose-built agents that can browse the web, interact with internal tools, manage files, trigger APIs, and complete entire workflows — completely autonomously.",
    features: ["Web Research & Scraping", "Tool Use & API Calls", "File Management", "Multi-step Task Execution"],
    accent: "cyan",
  },
  {
    index: "05",
    title: "Sales & Outreach AI",
    tagline: "Scale your pipeline without scaling headcount",
    desc: "AI that researches your prospects, enriches lead data, writes hyper-personalized outreach, follows up intelligently, and books meetings directly into your calendar.",
    features: ["Lead Enrichment", "Personalized Copywriting", "Automated Follow-up", "Calendar Integration"],
    accent: "blue",
  },
  {
    index: "06",
    title: "Systems Integration",
    tagline: "One unified stack",
    desc: "Connect your CRM, ERP, databases, and third-party APIs through intelligent middleware that routes, transforms, and syncs data in real time — no more silos.",
    features: ["REST & GraphQL APIs", "Webhook Orchestration", "Real-time Data Sync", "Legacy System Bridges"],
    accent: "purple",
  },
];

export default function ServicesPage() {
  return (
    <div className={`${styles.page} page-enter`}>
      <Navbar />

      {/* ── PAGE HEADER ──────────────────────────── */}
      <section className={styles.header}>
        <div className="container">
          <AnimateIn>
            <div className={styles.headerInner}>
              <div className="eyebrow">Services</div>
              <h1 className={styles.title}>
                <span className="tg-white">What we</span>
                <br />
                <span className="tg-accent">build for you.</span>
              </h1>
              <p className={styles.subtitle}>
                Every engagement is tailored. These are the capabilities we bring —
                deployed in the combination that fits your exact needs.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="rule container" />

      {/* ── SERVICES LIST ────────────────────────── */}
      <section className={styles.list}>
        <div className="container">
          {SERVICES.map((svc) => (
            <AnimateIn key={svc.index} delay={parseInt(svc.index) * 40}>
              <article className={styles.item}>
              <div className={styles.itemMeta}>
                <span className={styles.itemIndex}>{svc.index}</span>
                <span className={`${styles.itemAccent} ${styles[svc.accent]}`}>{svc.tagline}</span>
              </div>

              <div className={styles.itemBody}>
                <h2 className={styles.itemTitle}>{svc.title}</h2>
                <p className={styles.itemDesc}>{svc.desc}</p>
                <ul className={styles.featureList}>
                  {svc.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <span className={styles.featureDot}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Not sure which services fit?
            </h2>
            <p className={styles.ctaDesc}>
              Let&apos;s talk. We&apos;ll map your operations and tell you exactly where AI
              can make the biggest difference.
            </p>
            <Link href="/contact" className="btn btn-solid">
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
