export interface MenuItem {
  id: string;
  name: string;
  category: 'brunch' | 'sarnies' | 'coffee' | 'desserts';
  description: string;
  tags?: string[];
  popular?: boolean;
  image?: string;
  price: number;
  priceNote?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface BookingPackage {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  badge?: string;
  timeAgo: string;
  rating: number;
  quote: string;
  fullText?: string;
  photosCount?: number;
  ownerResponse?: string;
}

export interface AtmospherePhoto {
  id: string;
  title: string;
  category: 'vibe' | 'food' | 'coffee' | 'heritage';
  imageUrl: string;
  caption: string;
}
