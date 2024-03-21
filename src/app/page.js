import Image from "next/image";
import styles from "./page.module.css";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titulo}>
        <h1 className={dancing.className}>Constantino</h1>
        <br/>
        <h3>Restaurante</h3>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/menudehamburguesas1.jpg"
          alt="menu1"
          width={707}
          height={1997}
          priority
        />

        <Image
          className={styles.logo}
          src="/menudehamburguesas2.jpg"
          alt="menu2"
          width={707}
          height={2000}
          priority
        />
      </div>

    </main>
  );
}
