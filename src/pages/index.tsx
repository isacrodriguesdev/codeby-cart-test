import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import Products from '@/components/Products';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CODEBY Cart</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Products />
      </main>

      <footer></footer>
    </div>
  );
}
