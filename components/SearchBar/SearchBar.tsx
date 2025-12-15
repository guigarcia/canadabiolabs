'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './SearchBar.module.css';
import { translations } from '@/lib/translations';
import { productsData } from '@/lib/productData';
import type { Product } from '@/types';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { common } = translations;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = productsData.filter(product => 
      product.name.toLowerCase().includes(searchQuery) ||
      product.nameEn.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
    );

    setResults(filtered.slice(0, 5));
    setShowResults(true);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div ref={searchRef} className={`${styles.searchBar} ${className || ''}`}>
      <div className={styles.inputWrapper}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={common.search}
          className={styles.input}
          onFocus={() => query.length >= 2 && setShowResults(true)}
        />
        {query && (
          <button onClick={handleClear} className={styles.clearBtn}>
            ×
          </button>
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className={styles.results}>
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/produto/${product.id}`}
              className={styles.resultItem}
              onClick={() => setShowResults(false)}
            >
              <strong>{product.name}</strong>
              <span className={styles.packaging}>{product.packaging}</span>
            </Link>
          ))}
        </div>
      )}

      {showResults && query.length >= 2 && results.length === 0 && (
        <div className={styles.results}>
          <div className={styles.noResults}>
            Nenhum produto encontrado
          </div>
        </div>
      )}
    </div>
  );
}

