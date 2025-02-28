import Image from "next/image";
import styles from "./page.module.css";
// import { useParams } from "next/navigation";
import Link from "next/link";

export default function Home() {

  // const params = useParams();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Home</h1>
       <div>
          <Link href="/about"><button className={styles.button}>About</button></Link>
          <Link href="/pokemon"><button className={styles.button}>Pokemon</button></Link>
          <Link href="/products/id"><button className={styles.button}>Products</button></Link>
          <Link href="/vestuario/feminino"><button className="button">Vestuario_Feminino</button></Link>
          <Link href="/vestuario/masculino"><button className="button">Vestuario_Masculino</button></Link>
       </div>
      </div>
    </main>
  );
}
