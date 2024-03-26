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
      <div className={styles.description_top}>
          <p>Menu App -  demo con plantillas estandar</p>
        </div>
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

        <div className={styles.description}>
          <p>Menu App - demo con plantillas estandar</p>
        </div>

        <Image
          className={styles.logo}
          src="/menu32.jpg"
          alt="menu32"
          width={707}
          height={2000}          
          priority
        />

        <Image
          className={styles.logo}
          src="/menu31.jpg"
          alt="menu31"
          width={707}
          height={2000}          
          priority
        />
        <br/>
        <Image
          className={styles.logo}
          src="/menu5.jpg"
          alt="menu5"
          width={1414}
          height={2000}  
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"        
          priority
        />

      </div>

    </main>
  );
}
