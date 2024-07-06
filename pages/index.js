import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData);


return {
  props: {
    allPostsData,
  },
};
}

// export async function getServerSideProps(context){
//   return {
//     props: {
//       //コンポーネントに渡すためのｐろｐｓ
//     }
//   }
// }


export default function Home({allPostsData}) {
  return (
<Layout home>
  <Head>
    <title>{siteTitle}</title>
  </Head>
<section>
  <p className={utilStyles.headingMd}>UDEMYの練習用ブログ、やっぱ手は動かしてなんぼ！</p>
</section>
<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  <h2>📝エンジニア見習いのBLOG</h2>
<div className={styles.grid}>
  {allPostsData.map(({id,title,date, thumbnail}) =>(

  <article key ={id}>
    <Link href={`/posts/${id}`}>
      <img src={`${thumbnail}`} 
      className={styles.thumbnailImage}
      />
      </Link>
      <Link href={`/posts/${id}`}>
        <p className={utilStyles.boldText}>{title}</p>
      </Link>
      <br />
      <small className={utilStyles.lightText}>{date}</small>
  </article>
  ))}
  
</div>

</section>

</Layout>
    
      );
}
