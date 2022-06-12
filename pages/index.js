import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import styles from "../styles/Home.module.scss";

function Home() {
  const user = useAuth();
  console.log(user);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Change this here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://texties-test.herokuapp.com/get?type=note&phone_number=+19206369355"
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Home;
