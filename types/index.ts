// Product Types
export interface Product {
  id: string;
  name: string;
  nameEn: string;
  category: ProductCategory;
  subcategory?: string;
  dosage: string;
  packaging: string;
  images: string[];
  description: string;
  additionalInfo?: AdditionalInfo;
  relatedProducts?: string[];
}

export interface AdditionalInfo {
  description?: string;
  synonyms?: string[];
  formula?: string;
  molecularWeight?: string;
  sequence?: string;
  appearance?: string;
  purity?: string;
  solubility?: string;
  meltingPoint?: string;
  boilingPoint?: string;
  density?: string;
  vapourPressure?: string;
  casNumber?: string;
  unii?: string;
  pubchemCid?: string;
  drugBank?: string;
  kegg?: string;
  chembl?: string;
  inchi?: string;
  smiles?: string;
}

export type ProductCategory = 
  | 'peptides-catalog'
  | 'peptides-custom'
  | 'proteins'
  | 'liquid-ampoules'
  | 'liquid-vials'
  | 'solid-formulations';

export interface ProductSeries {
  name: string;
  nameEn: string;
  products: Product[];
}

// Contact Form Types
export interface ContactFormData {
  country: string;
  email: string;
  message: string;
  consent: boolean;
}

// Search Types
export interface SearchResult {
  product: Product;
  matchScore: number;
}

