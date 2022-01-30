import Head from "next/head";
import Image from "../components/Image";
import fieldImg from "../assets/img-field.jpg";
import leavesImg from "../assets/leaves.png";
import closeUpLips from "../assets/closeup-lips.png";
import coloredFlag from "../assets/flag-colored.png";
import whiteFlag from "../assets/flag-white.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ishami Factory</title>
        <meta name="description" content="Ishami Factory website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.grid}>
          <Image source={fieldImg} styles={styles.field} />
          <Image source={closeUpLips} styles={styles.closeUp} />
          <div className={styles.flags}>
            <Image source={whiteFlag} />
            <h2>Scroll in on our Retailers Country wide</h2>
          </div>
          <Image source={leavesImg} styles={styles.leaves} />
        </div>
      </main>
    </div>
  );
}
