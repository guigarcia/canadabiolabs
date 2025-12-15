'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Carousel.module.css';
import { translations } from '@/lib/translations';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { home, common } = translations;
  
  const slides = [
    { title: home.slide1.title, text: home.slide1.text },
    { text: home.slide2.text },
    { text: home.slide3.text },
    { text: home.slide4.text },
    { text: home.slide5.text },
    { text: home.slide6.text },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/images/laboratory.jpg"
                alt="Laboratory"
                fill
                className={styles.image}
                priority={index === 0}
              />
            </div>
            <div className={styles.content}>
              {slide.title && <h1 className={styles.title}>{slide.title}</h1>}
              <p className={styles.text}>{slide.text}</p>
              <Link href="/contato" className={styles.button}>
                {common.moreDetails}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

