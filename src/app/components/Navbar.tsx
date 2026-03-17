"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DCTLogo from "./DCTLogo";
import styles from "./components.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <DCTLogo height={30} />
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.navActive : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? styles.navActive : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/process"
              className={pathname === "/process" ? styles.navActive : ""}
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? styles.navActive : ""}
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link href="/contact" className={`btn btn-solid ${styles.navCta}`}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
