import Link from "next/link";
import DCTLogo from "./DCTLogo";
import styles from "./components.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <DCTLogo height={22} />
          </div>

          <ul className={styles.footerLinks}>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/process">Process</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} Deepcurrent Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
