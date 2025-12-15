import { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import { translations } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Autenticação de Produto - CanadaBioLabs Brasil',
  description: 'Verifique a autenticidade dos produtos CanadaBioLabs.',
};

export default function ProductAuthPage() {
  const { auth } = translations;

  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>{auth.title}</h1>
        
        <div className={styles.content}>
          <div className={styles.authSection}>
            <div className={styles.authCard}>
              <p className={styles.description}>{auth.oldSystemDescription}</p>
              <p className={styles.note}>{auth.oldSystemNote}</p>
              <a 
                href="https://www.check-canadapeptides.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonBlue}`}
              >
                {auth.oldSystem}
              </a>
            </div>

            <div className={styles.divider}>
              <Image 
                src="/images/logo.png" 
                alt="CanadaBioLabs" 
                width={100} 
                height={100}
                className={styles.logo}
              />
            </div>

            <div className={styles.authCard}>
              <a 
                href="https://iverificator.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonRed}`}
              >
                {auth.newSystem}
              </a>
              <p className={styles.description}>{auth.newSystemDescription}</p>
              <p className={styles.note}>{auth.newSystemNote}</p>
            </div>
          </div>

          <div className={styles.gallery}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={styles.galleryItem}>
                <Image
                  src={`/images/lab-${i}.jpg`}
                  alt={`Laboratory ${i}`}
                  width={300}
                  height={200}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

