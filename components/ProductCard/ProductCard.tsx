import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productUrl = `/produto/${product.id}`;

  return (
    <div className={styles.card}>
      <Link href={productUrl} className={styles.imageWrapper}>
        <Image
          src={product.images[0] || '/images/placeholder.jpg'}
          alt={product.name}
          width={300}
          height={300}
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <Link href={productUrl} className={styles.title}>
          {product.name}
        </Link>
        <p className={styles.packaging}>{product.packaging}</p>
      </div>
    </div>
  );
}

