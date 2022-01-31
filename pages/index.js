import Head from "next/head";
import Image from "../components/Image";
import fieldImg from "../assets/img-field.jpg";
import leavesImg from "../assets/leaves.png";
import closeUpLips from "../assets/closeup-lips.png";
import articleOne from "../assets/news-article-one.png"
import articleTwo from "../assets/news-article-two.png"
import articleThree from "../assets/news-article-three.png"
import styles from "../styles/Home.module.css";

const articles = [
  { id: 1, title: 'Lorem Ipsum Somthing', img: articleOne},
  { id: 2, title: 'Lorem Ipsum something', img: articleTwo},
  { id: 3, title: 'Lorem Ipsum something', img: articleThree},
  { id: 4, title: 'Lorem Ipsum something', img: articleTwo},
]

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
            <h2>Scroll in on our Retailers Country wide</h2>
          </div>
          <Image source={leavesImg} styles={styles.leaves} />
        </div>

        <div className={styles.newsContainer}>
          <hr className={styles.divider} />
          <h1>News</h1>
          <div className={styles.articles}>
            {articles.map(article => {
              return (
                <div className={styles.article} key={article.id}>
                  <Image source={article.img} styles={styles.articleImg} />
                  <div className={styles.overlay}>
                    <div className={styles.articleTitle}>{article.title}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
