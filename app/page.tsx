import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.heading}>Haroon Rasheed</div>
        <ul className={styles.page}>
          <li><Link href="#">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/contact/services" target="_blank">Services</Link></li>
        </ul>

        <button className={styles.btn}>Download More</button>

        
      </div>
      <div>
      <h1 className="hading_1">Hello This is my homepage</h1>
      </div>
    </>
  );
}