import type { Product } from '@/types';

// Mock data - Em produção, isso viria de uma API ou CMS
export const productsData: Product[] = [
  {
    id: 'des-1-3-igf-1',
    name: 'DES(1-3)-IGF',
    nameEn: 'DES(1-3)-IGF',
    category: 'proteins',
    dosage: '0.1mg',
    packaging: '5 frascos e 1 frasco de diluente',
    images: ['/images/products/des-igf.jpg'],
    description: 'DES(1-3)IGF-1 é uma proteína endógena natural, bem como droga, e análogo truncado do fator de crescimento semelhante à insulina 1 (IGF-1)',
    additionalInfo: {
      description: 'DES(1-3)IGF-1 é uma proteína endógena natural, bem como droga, e análogo truncado do fator de crescimento semelhante à insulina 1 (IGF-1)',
      synonyms: ['Somatomedin C', 'IGF-I', 'IGFI', 'IGF1', 'IGF-IA', 'Mechano growth factor', 'MGF', 'Des(1-3)', 'Des1-3', 'Des 1-3', 'Des (1-3)', 'IGF-1 (4-70)'],
      formula: 'C319H501N91O96S7',
      molecularWeight: '7371.48 g·mol−1',
      sequence: 'TLCGAELVDA LQFVCGDRGF YFNKPTGYGS SSRRAPQTGI VDECCFRSCD LRRLEMYCAP LKPAKSA.',
      appearance: 'Sólido Liofilizado',
      purity: 'Superior a 97.0%',
      solubility: 'Recomenda-se reconstituir o IGF-I des(1-3) em H2O estéril 18M-cm não inferior a 100µg/ml',
      casNumber: '112603-35-7',
      unii: 'AG0WVP88OA',
    },
    relatedProducts: [],
  },
  // Mais produtos seriam adicionados aqui
];

export const getProductById = (id: string): Product | undefined => {
  return productsData.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return productsData.filter(p => p.category === category);
};

