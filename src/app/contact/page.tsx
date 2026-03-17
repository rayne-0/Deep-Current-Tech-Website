"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import styles from "./contact.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — wire up to your backend / Formspree / etc.
    setTimeout(() => setStatus("sent"), 1800);
  };

  return (
    <div className={`${styles.page} page-enter`}>
      <Navbar />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.layout}>

            {/* ── LEFT — COPY ─────────────────────────── */}
            <AnimateIn direction="left">
              <div className={styles.copy}>
                <div className="eyebrow">Contact</div>
                <h1 className={styles.title}>
                  <span className="tg-white">Let&apos;s build</span>
                  <br />
                  <span className="tg-accent">something together.</span>
                </h1>
                <p className={styles.subtitle}>
                  Book a free 30-minute strategy call. We&apos;ll map your highest-ROI
                  automation opportunity and show you exactly how we can help.
                </p>

                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Response time</span>
                    <span className={styles.detailValue}>Within 24 hours</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>First call</span>
                    <span className={styles.detailValue}>Free, 30 minutes</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Email</span>
                    <span className={styles.detailValue}>info@deepcurrenttech.org</span>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* ── RIGHT — FORM ─────────────────────────── */}
            <AnimateIn direction="right">
              <div className={styles.formContainer}>
               {status === "sent" ? (
                 <div className={styles.success}>
                   <h2 className={styles.successTitle}>Message Sent!</h2>
                   <p className={styles.successText}>
                     Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                   </p>
                 </div>
               ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="company" className={styles.label}>Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>I&apos;m interested in</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select a service…</option>
                      <option value="workflow">Workflow Automation</option>
                      <option value="support">Intelligent Support Agents</option>
                      <option value="analytics">Predictive Analytics</option>
                      <option value="agents">Custom AI Agents</option>
                      <option value="sales">Sales & Outreach AI</option>
                      <option value="integration">Systems Integration</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Tell us about your challenge</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Describe your current workflow, the bottleneck you're hitting, or what you'd like to automate…"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-solid ${styles.submit}`}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>

                  <p className={styles.formNote}>
                    No commitment. We&apos;ll reply within 24 hours.
                  </p>
                </form>
              )}
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
