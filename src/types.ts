export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  description: string;
  category: 'all' | 'classic' | 'spicy' | 'tangy' | 'heritage';
  categoryLabel: string;
  basePrice: number; // For smallest size (250g)
  image: string;
  rating: number;
  reviewsCount: number;
  heatLevel: 1 | 2 | 3 | 4 | 5; // Chilli heat
  sizes: {
    weight: string;
    price: number;
    servings: string;
  }[];
  ingredients: string[];
  spiceNotes: string[];
  pairings: {
    name: string;
    description: string;
  }[];
  curingMethod: string;
  storage: string;
  shelfLife: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  selectedWeight: string;
  unitPrice: number;
  quantity: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  customerName: string;
  location: string;
  favouritePickle: string;
  verified: boolean;
}
