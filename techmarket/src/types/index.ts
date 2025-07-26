export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface Theme {
  isDark: boolean;
}

export interface AppState {
  products: Product[];
  cart: CartItem[];
  favorites: Product[];
  user: User;
  theme: Theme;
  searchQuery: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
} 