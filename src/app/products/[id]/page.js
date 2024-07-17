"use client"

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";

import { useParams } from 'next/navigation';

export default function Products() {

  const params = useParams();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Products Details #{params.id}</h1>
      </div>
      <div>
          <Link href="/"><button className="button">HOME</button></Link>
          <Link href="/pokemon"><button className="button">Pokemon</button></Link>
          <Link href="/products/id"><button className="button">Products</button></Link>
          <Link href="/vestuario/feminino"><button className="button">Vestuario_Feminino</button></Link>
          <Link href="/vestuario/masculino"><button className="button">Vestuario_Masculino</button></Link>
      </div>
    </main>
  );
}
