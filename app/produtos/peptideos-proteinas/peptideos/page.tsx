import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../page.module.css';
import { translations } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Peptídeos - CanadaBioLabs Brasil',
  description: 'Peptídeos personalizados e de catálogo para pesquisa científica.',
};

export default function PeptidesPage() {
  const { products } = translations;

  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>{products.peptides}</h1>
        
        <div className={styles.grid}>
          <Link href="/produtos/peptideos-proteinas/peptideos/personalizados" className={styles.card}>
            <div className={styles.cardImage}>
              <span className={styles.icon}>🔬</span>
            </div>
            <h2>{products.customPeptides}</h2>
            <span className={styles.badge}>🍁</span>
          </Link>

          <Link href="/produtos/peptideos-proteinas/peptideos/catalogo" className={styles.card}>
            <div className={styles.cardImage}>
              <span className={styles.icon}>📋</span>
            </div>
            <h2>{products.catalogPeptides}</h2>
            <span className={styles.badge}>🍁</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

