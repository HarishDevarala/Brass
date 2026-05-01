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
