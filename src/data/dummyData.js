import heroBg from '../assets/hero_bg.png';
import ganeshaIdol from '../assets/ganesha_idol.png';
import brassLamp from '../assets/brass_lamp.png';
import lakshmiIdol from '../assets/lakshmi_idol.png';
import brassFurniture from '../assets/brass_furniture.png';
import luxuryGifting from '../assets/luxury_gifting.png';

export const categories = [
  { id: 'c1', title: 'Brass Idols', image: ganeshaIdol, link: '/collections/idols' },
  { id: 'c2', title: 'Premium Lamps', image: brassLamp, link: '/collections/lamps' },
  { id: 'c3', title: 'Pooja Decor', image: lakshmiIdol, link: '/collections/pooja' },
  { id: 'c4', title: 'Heritage Furniture', image: brassFurniture, link: '/collections/furniture' },
  { id: 'c5', title: 'Luxury Gifting', image: luxuryGifting, link: '/collections/gifting' },
];

export const products = [
  // BRASS IDOLS
  {
    id: 'p1',
    title: 'Handcrafted Antique Ganesha Idol',
    category: 'Brass Idols',
    price: 15500,
    offerPrice: 12500,
    image: ganeshaIdol,
    rating: 5.0,
    reviews: 12,
    material: 'Premium Brass',
    weight: '3.5 kg',
    dimensions: '12" H x 8" W',
    description: 'A magnificent handcrafted brass Ganesha idol, designed with intricate details showcasing traditional craftsmanship. Perfect for your home temple or living room decor.',
    care: 'Wipe with a soft dry cloth. Avoid using harsh chemicals.'
  },
  {
    id: 'p3',
    title: 'Goddess Lakshmi Idol (Matte Gold)',
    category: 'Brass Idols',
    price: 21000,
    offerPrice: 18000,
    image: lakshmiIdol,
    rating: 5.0,
    reviews: 8,
    material: 'Pure Brass',
    weight: '5.1 kg',
    dimensions: '15" H x 10" W',
    description: 'Premium Goddess Lakshmi idol finished in soft matte gold. An exquisite piece bringing prosperity and elegance to your space.',
    care: 'Wipe gently with a soft cloth.'
  },
  {
    id: 'p6',
    title: 'Dancing Nataraja Brass Statue',
    category: 'Brass Idols',
    price: 28000,
    offerPrice: 24500,
    image: ganeshaIdol, // reusing image for mockup
    rating: 4.9,
    reviews: 15,
    material: 'Bronze Finish Brass',
    weight: '6.2 kg',
    dimensions: '18" H x 14" W',
    description: 'An intricate representation of Lord Shiva as the cosmic dancer Nataraja. A true masterpiece of heritage artistry.',
    care: 'Dust with soft brush regularly.'
  },
  {
    id: 'p7',
    title: 'Krishna with Cow Antique Finish',
    category: 'Brass Idols',
    price: 18500,
    offerPrice: 16000,
    image: lakshmiIdol, // reusing image for mockup
    rating: 4.8,
    reviews: 22,
    material: 'Premium Brass',
    weight: '4.8 kg',
    dimensions: '14" H x 10" W',
    description: 'Beautiful idol of Lord Krishna playing the flute with a cow. Finished with an antique dark bronze patina.',
    care: 'Clean with dry cotton cloth.'
  },

  // PREMIUM LAMPS
  {
    id: 'p2',
    title: 'Royal Heritage Brass Diya Set',
    category: 'Premium Lamps',
    price: 8900,
    offerPrice: 7500,
    image: brassLamp,
    rating: 4.8,
    reviews: 24,
    material: 'Brass Bronze Finish',
    weight: '1.2 kg',
    dimensions: '14" H',
    description: 'Elegant royal brass diya set that adds a warm glowing aura to your pooja room. Crafted with a rich matte bronze finish.',
    care: 'Use pitambari powder for occasional polishing.'
  },
  {
    id: 'p8',
    title: 'Tall Peacock Standing Lamp (Pair)',
    category: 'Premium Lamps',
    price: 32000,
    offerPrice: 28500,
    image: brassLamp, // reusing image
    rating: 5.0,
    reviews: 11,
    material: 'Solid Brass',
    weight: '14 kg (Pair)',
    dimensions: '36" H',
    description: 'Majestic tall standing lamps featuring traditional peacock motifs. Perfect for grand entrances or temple spaces.',
    care: 'Occasional polishing required to maintain shine.'
  },
  {
    id: 'p9',
    title: 'Hanging Temple Bell Lamp',
    category: 'Premium Lamps',
    price: 6500,
    offerPrice: 5200,
    image: brassLamp, // reusing image
    rating: 4.7,
    reviews: 18,
    material: 'Antique Brass',
    weight: '2.1 kg',
    dimensions: '12" H + Chain',
    description: 'A traditional hanging diya integrated with a sweet-sounding brass temple bell.',
    care: 'Wipe with dry cloth.'
  },

  // POOJA DECOR
  {
    id: 'p10',
    title: 'Premium Brass Pooja Thali Set',
    category: 'Pooja Decor',
    price: 4500,
    offerPrice: 3800,
    image: lakshmiIdol, // reusing image
    rating: 4.9,
    reviews: 35,
    material: 'Pure Brass',
    weight: '1.5 kg',
    dimensions: '12" Diameter',
    description: 'Complete pooja thali set including a plate, small diyas, agarbatti stand, and a kumkum dibbi.',
    care: 'Wash with mild soap and dry immediately.'
  },
  {
    id: 'p11',
    title: 'Intricate Carved Urli',
    category: 'Pooja Decor',
    price: 12500,
    offerPrice: 10500,
    image: brassLamp, // reusing image
    rating: 4.8,
    reviews: 14,
    material: 'Heavy Brass',
    weight: '4.5 kg',
    dimensions: '16" Diameter',
    description: 'A beautifully carved traditional urli, perfect for floating flowers and diyas in your home entrance.',
    care: 'Clean water regularly to prevent hard water stains.'
  },

  // HERITAGE FURNITURE
  {
    id: 'p4',
    title: 'Luxury Walnut & Brass Accent Table',
    category: 'Heritage Furniture',
    price: 45000,
    offerPrice: 38500,
    image: brassFurniture,
    rating: 4.9,
    reviews: 5,
    material: 'Brass & Walnut Wood',
    weight: '12 kg',
    dimensions: '24" H x 18" Dia',
    description: 'A luxurious accent table combining dark walnut wood with heavy brass trims. A true heritage masterpiece for your living room.',
    care: 'Dust regularly. Polish wood surfaces every 6 months.'
  },
  {
    id: 'p12',
    title: 'Brass Carved Console Table',
    category: 'Heritage Furniture',
    price: 85000,
    offerPrice: 75000,
    image: brassFurniture, // reusing image
    rating: 5.0,
    reviews: 3,
    material: 'Solid Brass & Teak',
    weight: '35 kg',
    dimensions: '30" H x 48" W',
    description: 'A royal console table entirely clad in intricately embossed brass sheet over a solid teak wood frame.',
    care: 'Wipe with soft microfiber cloth.'
  },

  // LUXURY GIFTING
  {
    id: 'p5',
    title: 'Corporate Premium Gifting Hamper',
    category: 'Luxury Gifting',
    price: 12000,
    offerPrice: 10500,
    image: luxuryGifting,
    rating: 5.0,
    reviews: 42,
    material: 'Mixed Premium Brass',
    weight: '2.5 kg',
    dimensions: 'Box: 14" x 10" x 6"',
    description: 'An elegant velvet-lined gifting box featuring premium brass diyas and a small idol. Ideal for corporate and wedding gifting.',
    care: 'Keep in dry conditions.'
  },
  {
    id: 'p13',
    title: 'Wedding Return Gift Set (Pack of 10)',
    category: 'Luxury Gifting',
    price: 25000,
    offerPrice: 22000,
    image: luxuryGifting, // reusing image
    rating: 4.9,
    reviews: 28,
    material: 'Brass & Velvet',
    weight: '5 kg (Total)',
    dimensions: 'Individual Box: 6" x 6"',
    description: 'Pack of 10 beautifully packaged mini brass diyas in custom velvet boxes, perfect for wedding guests.',
    care: 'None required.'
  }
];

export const storeInfo = {
  name: 'Praseeda Brass',
  phone: '+91 90590 42262',
  address: 'Railway Track Road, Central Avenue, Magunta Layout, Nellore, Andhra Pradesh 524003',
  timings: 'Opens at 4:00 PM',
  email: 'hello@praseedabrass.com',
  social: {
    instagram: '@praseedabrass',
    facebook: 'Praseeda Brass Nellore'
  }
};
