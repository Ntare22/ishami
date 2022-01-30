import Head from "next/head";
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ishami - About Us</title>
        <meta name="description" content="Ishami Factory About Us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          About Us
      </main>
    </div>
  );
};

export default About;
