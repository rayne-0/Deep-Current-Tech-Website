import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import styles from "./process.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Deepcurrent Tech",
  description: "How we work — our battle-tested process for delivering AI automations in 7 days.",
};

const STEPS = [
  {
    num: "01",
    phase: "Day 1",
    title: "Discovery",
    desc: "We start with a deep-dive workshop into your operations. We map every workflow, identify automation candidates, and quantify the potential ROI for each. You walk away with a clear picture of what's possible.",
    deliverables: ["Workflow Audit", "Automation Opportunity Map", "ROI Estimate", "Project Scope Document"],
  },
  {
    num: "02",
    phase: "Day 2",
    title: "Architecture & Design",
    desc: "Our engineers design the full system architecture — data flows, integrations, agent behaviors, and fallback logic. We review this with you before a single line of code is written.",
    deliverables: ["System Architecture Diagram", "Integration Spec", "Agent Behavior Design", "Review & Sign-off"],
  },
  {
    num: "03",
    phase: "Day 3–4",
    title: "Build",
    desc: "We build in sprints with complete transparency. You have access to a shared project board, daily demos, and a direct line to your lead engineer the entire time.",
    deliverables: ["Core Automation Build", "Integration Layer", "Daily Demo Sessions", "Shared Progress Board"],
  },
  {
    num: "04",
    phase: "Day 5–6",
    title: "Testing & QA",
    desc: "We run the system against real data, stress-test edge cases, and validate accuracy thresholds. Nothing ships until it meets the performance benchmarks we agreed on up front.",
    deliverables: ["Accuracy Testing", "Edge Case Validation", "Performance Benchmarking", "QA Sign-off"],
  },
  {
    num: "05",
    phase: "Day 7",
    title: "Launch",
    desc: "We deploy into your production environment, run a live parallel test alongside your existing process, and only fully cut over when you're confident. Full documentation and team training included.",
    deliverables: ["Production Deployment", "Parallel Testing Period", "Team Training", "Full Documentation"],
  },
  {
    num: "06",
    phase: "Ongoing",
    title: "Monitor & Scale",
    desc: "Post-launch, we monitor performance, tune the models as your data evolves, and scale the system as your needs grow. We're a long-term partner, not a one-time vendor.",
    deliverables: ["Performance Monitoring", "Continuous Tuning", "Monthly Reports", "Scaling Support"],
  },
];

const PRINCIPLES = [
  { icon: "◈", title: "Transparent", desc: "You're never in the dark. Full access to the project board, code, and progress every step of the way." },
  { icon: "◈", title: "Opinionated", desc: "We tell you what will work, not just what you want to hear. Our recommendations are driven by data." },
  { icon: "◈", title: "Fast", desc: "7 days is our standard. We've built the systems to move quickly without sacrificing quality." },
  { icon: "◈", title: "Results-first", desc: "Every decision is tied back to a measurable outcome. No fluff, no vanity features." },
];

export default function ProcessPage() {
  return (
    <div className={`${styles.page} page-enter`}>
      <Navbar />

      {/* ── PAGE HEADER ──────────────────────────── */}
      <section className={styles.header}>
        <div className="container">
          <AnimateIn>
            <div className={styles.headerInner}>
              <div className="eyebrow">Process</div>
            <h1 className={styles.title}>
              <span className="tg-white">Live in</span>{" "}
              <span className="tg-accent">7 days.</span>
            </h1>
            <p className={styles.subtitle}>
              A battle-tested process designed to get your automation running fast,
              with zero disruption to your current operations.
            </p>
          </div>
          </AnimateIn>
        </div>
      </section>

      <div className="rule container" />

      {/* ── TIMELINE ─────────────────────────────── */}
      <section className={styles.timeline}>
        <div className="container">
          {STEPS.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 80}>
              <div className={styles.step}>
              <div className={styles.stepLeft}>
                <span className={styles.stepNum}>{step.num}</span>
                <span className={styles.stepPhase}>{step.phase}</span>
              </div>
              <div className={styles.stepConnector}>
                <div className={styles.stepDot} />
                {i < STEPS.length - 1 && <div className={styles.stepLine} />}
              </div>
              <div className={styles.stepRight}>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepDesc}>{step.desc}</p>
                <div className={styles.deliverables}>
                  {step.deliverables.map((d) => (
                    <span key={d} className={styles.deliverable}>{d}</span>
                  ))}
                </div>
              </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── PRINCIPLES ───────────────────────────── */}
      <section className={styles.principles}>
        <div className="container">
          <div className={styles.principlesHead}>
            <div className="eyebrow">How we work</div>
            <h2 className={styles.principlesTitle}>
              Our <span className="tg-subtle">principles.</span>
            </h2>
          </div>
          <div className={styles.principlesGrid}>
            {PRINCIPLES.map((p) => (
              <div key={p.title} className={styles.principle}>
                <span className={styles.principleIcon}>{p.icon}</span>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Ready to start your <span className="tg-accent">discovery call?</span>
            </h2>
            <p className={styles.ctaDesc}>
              It&apos;s free, it&apos;s 30 minutes, and you&apos;ll walk away with a clear
              picture of what AI can do for your business.
            </p>
            <Link href="/contact" className="btn btn-solid">
              Book a Free Call →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
