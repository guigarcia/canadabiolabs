'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { translations } from '@/lib/translations';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const { nav } = translations;

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topContent}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>CanadaBioLabs</span>
            </Link>
            <p className={styles.description}>
              CanadaBioLabs é um fornecedor líder de produtos sintéticos industriais inovadores de pesquisa, 
              proteínas e peptídeos de pesquisa para pesquisa em ciências da vida em todo o mundo há mais de 10 anos.
            </p>
            <div className={styles.certification}>
              <div className={styles.badge}>GMP Certified</div>
              <p className={styles.researchOnly}>APENAS PARA USO EM PESQUISA</p>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className="container">
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
            <li><Link href="/">{nav.home}</Link></li>
            <li><Link href="/produtos/peptideos-proteinas">{nav.peptidesAndProteins}</Link></li>
            <li><Link href="/produtos/reagentes-laboratorio">{nav.laboratoryReagents}</Link></li>
            <li><a href="https://canadapparel.com/" target="_blank" rel="noopener noreferrer">{nav.apparel}</a></li>
            <li>
              <button onClick={() => setShowTermsModal(true)}>{nav.termsOfUse}</button>
            </li>
            <li><Link href="/contato">{nav.contactUs}</Link></li>
            <li><Link href="/autenticacao-produto">{nav.productAuthentication}</Link></li>
          </ul>

          <SearchBar className={styles.search} />
        </div>
      </nav>
    </header>
  );
}
