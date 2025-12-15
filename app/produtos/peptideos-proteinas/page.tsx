import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';
import { translations } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Peptídeos e Proteínas - CanadaBioLabs Brasil',
  description: 'Explore nossa linha completa de peptídeos e proteínas para pesquisa científica.',
};

export default function PeptidesProteinsPage() {
  const { products } = translations;

  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>{products.peptides} e {products.proteins}</h1>
        
        <div className={styles.grid}>
          <Link href="/produtos/peptideos-proteinas/peptideos" className={styles.card}>
            <div className={styles.cardImage}>
              <span className={styles.icon}>🧬</span>
            </div>
            <h2>{products.peptides}</h2>
            <span className={styles.badge}>🍁</span>
          </Link>

          <Link href="/produtos/peptideos-proteinas/proteinas" className={styles.card}>
            <div className={styles.cardImage}>
              <span className={styles.icon}>⚗️</span>
            </div>
            <h2>{products.proteins}</h2>
            <span className={styles.badge}>🍁</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

