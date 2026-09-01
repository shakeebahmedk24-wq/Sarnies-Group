import heroPoster from '@/src/assets/images/sarnies_hero_poster_1788273533624.jpg';
import tomyumBenedictImg from '@/src/assets/images/tomyum_benedict_1788273560560.jpg';
import specialtyCoffeeImg from '@/src/assets/images/specialty_coffee_1788273579794.jpg';
import cafeVibeImg from '@/src/assets/images/sarnies_cafe_vibe_1788273595838.jpg';
import steakSarniesImg from '@/src/assets/images/steak_sarnies_1788273616125.jpg';
import avocadoToastImg from '@/src/assets/images/smashed_avocado_1788273636163.jpg';
import sarniesFryUpImg from '@/src/assets/images/sarnies_fry_up_1788274889154.jpg';
import roastChickenSarnieImg from '@/src/assets/images/roast_chicken_sarnie_1788274919328.jpg';
import flatWhiteCoffeeImg from '@/src/assets/images/flat_white_coffee_1788274943193.jpg';
import matchaBrownieImg from '@/src/assets/images/matcha_brownie_slice_1788274966408.jpg';
import { MenuItem, ReviewItem, AtmospherePhoto, BookingPackage } from '../types';

export const BUSINESS_INFO = {
  name: 'Sarnies Bangkok',
  tagline: 'Australian-Asian Fusion Fare & Specialty Coffee',
  summary: 'Chill, industrial-style outpost offering all-day brunch, Australian-Asian fusion fare & specialty coffee in a 150-year-old preserved shophouse.',
  rating: 4.5,
  reviewCount: 3736,
  priceRange: '฿200–600 per person',
  address: '101, 103 Charoen Krung 44 Alley, Khwaeng Bang Rak, Bang Rak, Bangkok 10500, Thailand',
  plusCode: 'PGC7+CW Bangkok, Thailand',
  phone: '+66 65 816 1655',
  phoneTel: '+66658161655',
  hoursDisplay: 'Daily: 8:00 AM – 10:00 PM',
  openHour: 8,
  closeHour: 22,
  services: ['Dine-in', 'Takeout', 'Delivery', 'Specialty Roastery'],
  mapsUrl: 'https://maps.google.com/?q=Sarnies+Bangkok+101+103+Charoen+Krung+44+Alley+Bang+Rak+Bangkok+10500',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=101+103+Charoen+Krung+44+Alley+Khwaeng+Bang+Rak+Bang+Rak+Bangkok+10500+Thailand',
  chopeUrl: 'https://www.chope.co/bangkok-restaurants/restaurant/sarnies-bangkok',
  linktreeUrl: 'https://linktr.ee/sarnies.group',
  menuPdfUrl: 'https://files.cargocollective.com/sarnies',
  instagram: 'https://instagram.com/sarnies.bkk',
  heroVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-making-a-latte-in-a-coffee-shop-41443-large.mp4',
  heroPoster: heroPoster,
  images: {
    hero: heroPoster,
    tomyumBenedict: tomyumBenedictImg,
    specialtyCoffee: specialtyCoffeeImg,
    cafeVibe: cafeVibeImg,
    steakSarnies: steakSarniesImg,
    avocadoToast: avocadoToastImg,
    fryUp: sarniesFryUpImg,
    chickenSarnie: roastChickenSarnieImg,
    flatWhite: flatWhiteCoffeeImg,
    matchaBrownie: matchaBrownieImg,
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'steak-sarnies',
    name: 'Steak Sarnies',
    category: 'sarnies',
    description: 'Tender sliced grilled beef steak, caramelized balsamic onions, melted cheddar cheese, and house-made mustard relish in toasted artisan sourdough bread.',
    tags: ['Crowd Favorite', 'Hearty'],
    popular: true,
    image: steakSarniesImg,
    price: 360,
  },
  {
    id: 'tom-yum-eggs-benedict',
    name: 'Tom Yum Eggs Benedict',
    category: 'brunch',
    description: 'Signature poached eggs on artisan sourdough toast, drenched with rich fiery tom yum spiced hollandaise, plump tiger prawns, and crispy shallots.',
    tags: ['House Signature', 'Popular on Maps', 'Thai-Aus Fusion'],
    popular: true,
    image: tomyumBenedictImg,
    price: 320,
  },
  {
    id: 'smashed-hass-avocado',
    name: 'Smashed Hass Avocado',
    category: 'brunch',
    description: 'Generous fresh Hass avocado mashed with crumbled goat feta, aromatic dukkah spices, heirloom cherry tomatoes, and poached egg on toasted country sourdough.',
    tags: ['Popular on Maps', 'Vegetarian Option'],
    popular: true,
    image: avocadoToastImg,
    price: 280,
  },
  {
    id: 'fry-up',
    name: 'Sarnies Big Fry Up',
    category: 'brunch',
    description: 'Classic Australian cafe breakfast: double eggs cooked your way, artisanal bacon, pork sausages, roasted field mushrooms, grilled tomatoes, and sourdough toast.',
    tags: ['Popular', 'All-Day Brunch'],
    popular: true,
    image: sarniesFryUpImg,
    price: 390,
  },
  {
    id: 'chicken-sandwich',
    name: 'Roasted Chicken Sarnie',
    category: 'sarnies',
    description: 'Herb-marinated roast chicken breast, crunchy romaine, garlic aioli, sun-dried tomatoes, and house pickles on freshly baked country bread.',
    tags: ['Comfort Food', 'Fresh Baked'],
    popular: true,
    image: roastChickenSarnieImg,
    price: 290,
  },
  {
    id: 'messy-omelette',
    name: 'Messy Omelette',
    category: 'brunch',
    description: 'Silky scrambled egg ribbons folded with aromatic Thai herbs, sautéed greens, chili jam, and crispy aromatics over grilled toast.',
    tags: ['Thai-Aus Fusion'],
    image: tomyumBenedictImg,
    price: 260,
  },
  {
    id: 'breakfast-bowl',
    name: 'Breakfast Bowl',
    category: 'brunch',
    description: 'Nutrient-rich warm grain bowl packed with avocado, roasted seasonal vegetables, seasoned greens, soft poached egg, and house dressing.',
    tags: ['Healthy', 'Filling'],
    image: avocadoToastImg,
    price: 270,
  },
  {
    id: 'longan-espresso-tonic',
    name: 'Longan Espresso Tonic',
    category: 'coffee',
    description: 'Refreshing signature creation combining double shot house-roasted espresso with sparkling botanical tonic, natural longan honey, and dried citrus garnish.',
    tags: ['House Specialty', 'Popular on Maps'],
    popular: true,
    image: specialtyCoffeeImg,
    price: 160,
  },
  {
    id: 'flat-white',
    name: 'Melbourne Flat White',
    category: 'coffee',
    description: 'Double ristretto extraction of house-roasted beans with micro-foamed silky milk, delivering bold chocolatey notes and creamy mouthfeel.',
    tags: ['Popular on Maps', 'House Roast'],
    popular: true,
    image: flatWhiteCoffeeImg,
    price: 120,
  },
  {
    id: 'orange-mocha',
    name: 'Orange Mocha',
    category: 'coffee',
    description: 'Rich dark artisan chocolate blended with bold espresso, infused with fresh orange zest and velvety textured steamed milk.',
    tags: ['Popular on Maps', 'Signature'],
    popular: true,
    image: specialtyCoffeeImg,
    price: 150,
  },
  {
    id: 'iced-americano-tiramisu',
    name: 'Tiramisu-Style Iced Americano',
    category: 'coffee',
    description: 'Bold single-origin espresso poured over cold brew ice, topped with a velvety tiramisu mascarpone cream foam and cocoa dusting.',
    tags: ['Review Highlight', 'Specialty'],
    popular: true,
    image: flatWhiteCoffeeImg,
    price: 165,
  },
  {
    id: 'cold-brew-coffee',
    name: 'Single-Origin Cold Brew',
    category: 'coffee',
    description: 'Steeped for 18 hours in cold filtered water. Smooth, naturally sweet, bold notes with low acidity.',
    tags: ['Specialty Coffee'],
    image: specialtyCoffeeImg,
    price: 135,
  },
  {
    id: 'matcha-brownie',
    name: 'Fudgy Matcha Brownie',
    category: 'desserts',
    description: 'Dense, gooey green tea matcha white chocolate brownie baked fresh daily in-house, boasting deep umami flavor.',
    tags: ['Bakery Highlight', '19+ Mentions'],
    popular: true,
    image: matchaBrownieImg,
    price: 140,
  },
  {
    id: 'treacle-tart',
    name: 'Classic Treacle Tart',
    category: 'desserts',
    description: 'Traditional golden syrup tart with buttery shortcrust pastry, served warm with clotted vanilla ice cream.',
    tags: ['Bakery Special'],
    image: matchaBrownieImg,
    price: 180,
  },
  {
    id: 'cookie-dough-espresso-shake',
    name: 'Cookie-Dough Espresso Shake',
    category: 'desserts',
    description: 'Decadent chilled shake blending house cookie dough chunks, espresso shot, vanilla ice cream, and dark cocoa drizzle.',
    tags: ['Popular on Maps', 'Indulgent'],
    popular: true,
    image: flatWhiteCoffeeImg,
    price: 190,
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Weekly Cafe Grind',
    badge: 'Local Guide · 15 reviews · 220 photos',
    timeAgo: '6 months ago',
    rating: 5,
    quote: 'Great specialty coffee in a beautifully preserved old building.',
    fullText: 'Great specialty coffee in a beautifully preserved old building. I tried the iced Americano (tiramisu-style) and a cold brew — both were bold and well-balanced without being too bitter. The breakfast bowl was filling, and the brownie was exceptional.',
    photosCount: 16,
    ownerResponse: 'Thank you so much for your thoughtful review. We’re really glad you enjoyed the coffee selection, especially the tiramisu-style Americano and cold brew, as well as the breakfast and brownie.'
  },
  {
    id: 'rev-2',
    author: 'M',
    badge: 'Local Guide · 236 reviews · 131 photos',
    timeAgo: 'a month ago',
    rating: 5,
    quote: 'The food is made with high-quality ingredients, and everything tastes fresh.',
    fullText: 'The food is made with high-quality ingredients, and everything tastes fresh. The atmosphere is really nice and welcoming. The prices are a bit on the higher side, but the quality definitely justifies them.',
    ownerResponse: 'Thanks so much for the kind words! We\'re glad the team handled that coffee issue smoothly and that you enjoyed the fresh ingredients and welcoming vibe.'
  },
  {
    id: 'rev-3',
    author: 'Google Maps Reviewer',
    badge: 'Verified Visitor',
    timeAgo: 'Recent review',
    rating: 5,
    quote: 'Cool decor, good varieties of coffee and other drinks, nice comfort food menu.',
    fullText: 'Cool decor, good varieties of coffee and other drinks, nice comfort food menu. A standout cafe in Bangkok for all-day brunch.'
  },
  {
    id: 'rev-4',
    author: 'Bangkok Food Enthusiast',
    badge: 'Local Guide',
    timeAgo: 'Recent review',
    rating: 5,
    quote: 'Food is tasty and served in a quite large size for Thai people.',
    fullText: 'Food is tasty and served in a quite large size for Thai people. The Tom Yum Benedict and sourdough sandwiches are incredible.'
  },
  {
    id: 'rev-5',
    author: 'Travel & Bruncher',
    badge: 'Verified Customer',
    timeAgo: 'Recent review',
    rating: 5,
    quote: 'Great atmosphere and service, if not a little small, the place was packed!',
    fullText: 'Great atmosphere and service, if not a little small, the place was packed! Definitely recommend coming early or booking ahead.'
  }
];

export const ATMOSPHERE_GALLERY: AtmospherePhoto[] = [
  {
    id: 'gal-1',
    title: 'Historic 150-Year Shophouse Interior',
    category: 'heritage',
    imageUrl: cafeVibeImg,
    caption: 'Preserved rustic brick walls and vintage timber beams in Charoen Krung 44.'
  },
  {
    id: 'gal-2',
    title: 'Signature Tom Yum Eggs Benedict',
    category: 'food',
    imageUrl: tomyumBenedictImg,
    caption: 'Artisanal sourdough with poached eggs and fiery tom yum hollandaise sauce.'
  },
  {
    id: 'gal-3',
    title: 'Specialty Coffee Roasts & Tonic',
    category: 'coffee',
    imageUrl: specialtyCoffeeImg,
    caption: 'Sparkling Longan Espresso Tonic and velvety Melbourne-style Flat White.'
  },
  {
    id: 'gal-4',
    title: 'Steak Sarnie & Artisanal Breads',
    category: 'food',
    imageUrl: steakSarniesImg,
    caption: 'Grilled steak slices, caramelized onions, melted cheese on crusty sourdough.'
  },
  {
    id: 'gal-5',
    title: 'Morning Sunlit Cafe Ambience',
    category: 'vibe',
    imageUrl: heroPoster,
    caption: 'Warm Edison lighting, rustic timber counters, and morning aroma of freshly roasted beans.'
  },
  {
    id: 'gal-6',
    title: 'Fresh Smashed Hass Avocado Toast',
    category: 'food',
    imageUrl: avocadoToastImg,
    caption: 'Hass avocado, goat feta, and dukkah spices on thick-cut toasted bread.'
  },
  {
    id: 'gal-7',
    title: 'Sarnies Big Fry Up Breakfast',
    category: 'food',
    imageUrl: sarniesFryUpImg,
    caption: 'Australian cafe breakfast with double eggs, artisan bacon, sausage, portobello, and sourdough.'
  },
  {
    id: 'gal-8',
    title: 'Silky Melbourne Latte Art',
    category: 'coffee',
    imageUrl: flatWhiteCoffeeImg,
    caption: 'Velvety micro-foamed milk over double ristretto extraction in custom ceramic cup.'
  },
  {
    id: 'gal-9',
    title: 'House-Baked Matcha Brownie',
    category: 'food',
    imageUrl: matchaBrownieImg,
    caption: 'Dense fudgy matcha green tea brownie slice baked fresh daily in-house.'
  }
];

export const POPULAR_TIMES_DATA = [
  { time: '8 AM', value: 35, label: 'Quiet' },
  { time: '9 AM', value: 75, label: 'Busy' },
  { time: '10 AM', value: 92, label: 'Peak Rush' },
  { time: '11 AM', value: 98, label: 'Packed' },
  { time: '12 PM', value: 100, label: 'Peak Lunch' },
  { time: '1 PM', value: 85, label: 'Busy' },
  { time: '2 PM', value: 65, label: 'Moderate' },
  { time: '3 PM', value: 50, label: 'Relaxed' },
  { time: '4 PM', value: 45, label: 'Quiet' },
  { time: '5 PM', value: 55, label: 'Evening Start' },
  { time: '6 PM', value: 70, label: 'Dinner Rush' },
  { time: '7 PM', value: 78, label: 'Lively' },
  { time: '8 PM', value: 60, label: 'Dinner & Wine' },
  { time: '9 PM', value: 30, label: 'Wind Down' },
];
