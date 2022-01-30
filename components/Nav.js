import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Logo from "../assets/ishami-logo.png";
import Image from "./Image";

const links = [
  { name: "About us", link: "/about" },
  { name: "products", link: "/about" },
  { name: "the how", link: "/about" },
  { name: "media", link: "/about" },
  { name: "contact", link: "/about" },
];

let menuOpen = false;
const onToggle = () => {
    if (menuOpen) {
        menuOpen = false;
        console.log('>>>>>', menuOpen)
    } else {
        menuOpen = true
        console.log('......', !menuOpen)
    }
}

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image source={Logo} styles={styles.logo} />
        </a>
      </Link>
      <div className={styles.navLinks}>
        {links.map((item) => (
          <Link key={item.name} className={styles.navLink} href={item.link}>
            <a className={styles.navFont}>{item.name}</a>
          </Link>
        ))}
      </div>
      <div className={!menuOpen ? styles.hamburgerBtn : styles.open} onClick={() => onToggle()}>
          <div className={styles.hamburger}></div>
      </div>
    </div>
  );
};

export default Nav;
