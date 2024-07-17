import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link"

export default function Masculino() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Masculino Page</h1>
      </div>
      <div>
          <Link href="/"><button className="button">HOME</button></Link>
          <Link href="/about"><button className={styles.button}>About</button></Link>
          <Link href="/pokemon"><button className={styles.button}>Pokemon</button></Link>
          <Link href="/products/id"><button className={styles.button}>Products</button></Link>
          <Link href="/vestuario/feminino"><button className="button">Vestuario_Feminino</button></Link>
       </div>
    </main>
  );
}
