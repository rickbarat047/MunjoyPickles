import { Product } from '../types';
import mangoImg from '../assets/images/product_mango_pickle_1790438158089.jpg';
import chilliImg from '../assets/images/product_chilli_pickle_1790438176331.jpg';
import limeImg from '../assets/images/product_lime_pickle_1790438189105.jpg';
import heroImg from '../assets/images/hero_pickle_composition_1790438144628.jpg';
import craftImg from '../assets/images/craft_sundrying_spices_1790438200269.jpg';
import flagshipMacroImg from '../assets/images/flagship_mango_macro_1790438585195.jpg';
import kitchenHeritageImg from '../assets/images/kitchen_heritage_light_1790438598874.jpg';
import tableSpreadImg from '../assets/images/table_pairing_spread_1790438612173.jpg';
import mustardMacroImg from '../assets/images/macro_mustard_seeds_1790444382949.jpg';
import chilliMacroImg from '../assets/images/macro_sun_chillies_1790444398895.jpg';

export {
  heroImg,
  mangoImg,
  chilliImg,
  limeImg,
  craftImg,
  flagshipMacroImg,
  kitchenHeritageImg,
  tableSpreadImg,
  mustardMacroImg,
  chilliMacroImg,
};

export const PRODUCTS: Product[] = [
  {
    id: 'aam-ka-achaar',
    name: 'Heritage Raw Mango Pickle',
    hindiName: 'दादी का आम का अचार',
    tagline: 'Sun-cured green raw mango steeped in cold-pressed mustard oil and roasted whole fenugreek.',
    description: 'Our benchmark pickle. Crisp raw green Ramkela mangoes cut with precision, rubbed with coarse salt and turmeric, then cured under the bright sun. Blended with stone-ground yellow mustard, roasted fenugreek, nigella seeds (kalonji), and pure pungent mustard oil that preserves the crunch and tang for seasons.',
    category: 'classic',
    categoryLabel: 'Sun-Cured Classic',
    basePrice: 349,
    image: mangoImg,
    rating: 4.9,
    reviewsCount: 142,
    heatLevel: 3,
    featured: true,
    sizes: [
      { weight: '250g', price: 349, servings: 'Approx. 15-18 servings' },
      { weight: '500g', price: 599, servings: 'Approx. 35-40 servings (Most Popular)' },
      { weight: '1kg', price: 1099, servings: 'Family pantry jar' }
    ],
    ingredients: [
      'Raw Green Mangoes (Ramkela)',
      'Cold-Pressed Mustard Oil',
      'Coarse Yellow Mustard Seeds',
      'Cracked Fenugreek (Methi Dana)',
      'Nigella Seeds (Kalonji)',
      'Kashmiri Red Chilli',
      'Turmeric Powder',
      'Asafoetida (Hing)',
      'Rock Salt'
    ],
    spiceNotes: ['Pungent Mustard', 'Sharp Raw Mango Tang', 'Toasted Fenugreek Bitterness', 'Warm Kashmiri Chilli'],
    pairings: [
      { name: 'Arhar Dal & Steamed Rice', description: 'A spoonful atop hot rice bathed in ghee and yellow lentil soup.' },
      { name: 'Crispy Ajwain Paratha', description: 'Roll directly into warm flaky flatbread fresh off the cast iron tawa.' },
      { name: 'Khichuri on Rainy Evenings', description: 'The tangy sharpness balances soft comforting rice-lentil porridge.' }
    ],
    curingMethod: 'Sun-cured in traditional ceramic martaban jars for 14 continuous sunny days.',
    storage: 'Store in a cool, dry pantry away from direct heat. Always use a dry, clean wooden or brass spoon.',
    shelfLife: '12 months from manufacturing date. Improves in complexity as it matures.',
    inStock: true
  },
  {
    id: 'bharwa-lal-mirch',
    name: 'Stuffed Red Chilli Pickle',
    hindiName: 'बनारसी भरवां लाल मिर्च',
    tagline: 'Hand-stuffed plump red chillies packed with aromatic roasted spices and amchur.',
    description: 'An iconic culinary masterpiece from Uttar Pradesh. Plump, deep crimson whole chillies hand-slit and packed generously with a dry-roasted masala blend of fennel, coriander, mustard, dry mango powder (amchur), and mustard oil. The fiery red skin softens into a luscious, savoury bite.',
    category: 'spicy',
    categoryLabel: 'Fiery & Bold',
    basePrice: 389,
    image: chilliImg,
    rating: 4.95,
    reviewsCount: 98,
    heatLevel: 4,
    featured: true,
    sizes: [
      { weight: '250g', price: 389, servings: 'Approx. 8-10 whole chillies' },
      { weight: '500g', price: 679, servings: 'Approx. 18-20 whole chillies (Chef Choice)' },
      { weight: '1kg', price: 1249, servings: 'Family pantry jar' }
    ],
    ingredients: [
      'Whole Red Chillies (Banarasi / Guntur)',
      'Dry Mango Powder (Amchur)',
      'Coarsely Ground Fennel (Saunf)',
      'Roasted Coriander Seeds',
      'Yellow Mustard Dal',
      'Black Salt (Kala Namak)',
      'Cold-Pressed Mustard Oil',
      'Carom Seeds (Ajwain)'
    ],
    spiceNotes: ['Earthy Fennel Aromatics', 'Dry Sourness of Amchur', 'Robust Chilli Warmth', 'Roasted Coriander Depth'],
    pairings: [
      { name: 'Hot Poori & Aloo Sabzi', description: 'Break half a chilli over spicy potato curry for weekend breakfast.' },
      { name: 'Dal Baati Churma', description: 'The quintessential accompaniment for rustic baked wheat dough.' },
      { name: 'Warm Phulkas with Butter', description: 'Spread the rich masala paste directly onto paper-thin rotis.' }
    ],
    curingMethod: 'Hand-stuffed individually, bathed in warm mustard oil, then rested for 21 days.',
    storage: 'Keep chillies submerged under mustard oil for optimal preservation and succulent texture.',
    shelfLife: '12 months from packing date.',
    inStock: true
  },
  {
    id: 'khatta-meetha-nimbu',
    name: 'Aged Sun-Drying Lime Pickle',
    hindiName: 'धूप वाला खट्टा नींबू अचार',
    tagline: 'Thin-skinned country limes sun-matured until skins soften into amber nectar.',
    description: 'Crafted from juicy, paper-thin Kagzi limes harvested at peak ripeness. Quartered and cured with mountain rock salt and aromatic whole spices under the sun. As weeks pass, the lime skin turns deep amber, mellowing into an intoxicating sweet-tart, savoury condiment with medicinal warmth.',
    category: 'tangy',
    categoryLabel: 'Tangy & Heritage',
    basePrice: 329,
    image: limeImg,
    rating: 4.88,
    reviewsCount: 114,
    heatLevel: 2,
    featured: true,
    sizes: [
      { weight: '250g', price: 329, servings: 'Approx. 15-18 servings' },
      { weight: '500g', price: 549, servings: 'Approx. 35-40 servings' },
      { weight: '1kg', price: 999, servings: 'Large jar' }
    ],
    ingredients: [
      'Fresh Kagzi Limes',
      'Mountain Rock Salt',
      'Roasted Cumin Seeds (Jeera)',
      'Black Salt',
      'Crushed Black Peppercorn',
      'Red Chilli Flakes',
      'Carom Seeds (Ajwain)',
      'Pinch of Natural Jaggery'
    ],
    spiceNotes: ['Citrus Zestiness', 'Mineral Salt Depth', 'Toasted Jeera Smoke', 'Peppery Finish'],
    pairings: [
      { name: 'Curd Rice (Thayir Sadam)', description: 'The absolute gold standard pairing with tempered cold yogurt rice.' },
      { name: 'Simple Moong Dal Khichdi', description: 'Soothes digestion and elevates light home-cooked evening comfort food.' },
      { name: 'Methi Thepla', description: 'Travel-friendly companion folded into spiced fenugreek flatbread.' }
    ],
    curingMethod: 'Pure sun-basked natural fermentation in glass jars. No added oil required.',
    storage: 'Store at ambient room temperature in dry conditions. No refrigeration needed.',
    shelfLife: '18 months. Lime pickles historically only get richer and more mellow with age.',
    inStock: true
  },
  {
    id: 'lahsun-ka-achaar',
    name: 'Spiced Whole Garlic Pickle',
    hindiName: 'देसी लहसुन का तीखा अचार',
    tagline: 'Peeled heirloom garlic pearls braised in mustard oil, fenugreek, and crushed chilli.',
    description: 'Whole cloves of heirloom Indian garlic, carefully hand-peeled and slow-steeped in mustard oil tempered with cracked mustard, fenugreek seeds, and fiery crushed chilli. The intense bite of fresh garlic transforms into a rich, buttery, savoury umami relish that lifts the simplest meal.',
    category: 'heritage',
    categoryLabel: 'Heritage Craft',
    basePrice: 369,
    image: heroImg,
    rating: 4.92,
    reviewsCount: 86,
    heatLevel: 4,
    featured: false,
    sizes: [
      { weight: '250g', price: 369, servings: 'Approx. 15-20 servings' },
      { weight: '500g', price: 629, servings: 'Approx. 35-40 servings' },
      { weight: '1kg', price: 1149, servings: 'Pantry staple' }
    ],
    ingredients: [
      'Peeled Whole Desi Garlic Cloves',
      'Cold-Pressed Mustard Oil',
      'Yellow Mustard Dal',
      'Crushed Red Chilli',
      'Fenugreek Seeds',
      'Fennel Seeds',
      'Turmeric',
      'Asafoetida',
      'Pink Himalayan Salt'
    ],
    spiceNotes: ['Pungent Garlic Relish', 'Golden Mustard Warmth', 'Sharp Chilli Kick', 'Earthy Spices'],
    pairings: [
      { name: 'Plain Basmati Rice & Desi Ghee', description: 'Mash 2 garlic pearls into hot ghee rice for immediate soulful indulgence.' },
      { name: 'Stuffed Onion Kulcha', description: 'Pair with tandoori breads and spiced chana.' },
      { name: 'Bhakri / Millet Roti', description: 'Traditional rural farmer combination with jowar or bajra roti.' }
    ],
    curingMethod: 'Gentle low-heat oil tempering followed by 10 days of warm pantry curing.',
    storage: 'Ensure garlic cloves remain submerged in seasoned mustard oil.',
    shelfLife: '10 months from packing.',
    inStock: true
  },
  {
    id: 'panchranga-mixed',
    name: 'Traditional Mixed Farm Pickle',
    hindiName: 'पंचरंगा देसी मिक्स अचार',
    tagline: 'Seasonal crunch of green mango, carrot, cauliflower, lotus stem, and green chillies.',
    description: 'A celebration of winter harvest bounties. Crunchy carrots, tender cauliflower florets, seasonal raw mango, crisp lotus stem (kamal kakdi), and slit green chillies tossed in aromatic pickling spices. Each mouthful delivers a symphony of varying textures from crisp to tender.',
    category: 'heritage',
    categoryLabel: 'Heritage Craft',
    basePrice: 359,
    image: craftImg,
    rating: 4.85,
    reviewsCount: 74,
    heatLevel: 3,
    featured: false,
    sizes: [
      { weight: '250g', price: 359, servings: 'Approx. 15 servings' },
      { weight: '500g', price: 599, servings: 'Approx. 35 servings' },
      { weight: '1kg', price: 1089, servings: 'Large family jar' }
    ],
    ingredients: [
      'Winter Carrots',
      'Cauliflower Florets',
      'Raw Green Mango',
      'Lotus Stem (Kamal Kakdi)',
      'Green Chillies',
      'Cold-Pressed Mustard Oil',
      'Mustard Seeds',
      'Fennel Seeds',
      'Kalonji',
      'Spices & Salt'
    ],
    spiceNotes: ['Crunchy Root Texture', 'Tangy Mango Base', 'Aromatic Saunf', 'Pleasant Zesty Heat'],
    pairings: [
      { name: 'Aloo Gobi Paratha', description: 'The quintessential North Indian winter morning breakfast companion.' },
      { name: 'Pulao or Matar Biryani', description: 'Cuts through the rich ghee and fragrant whole spices of spiced rice.' },
      { name: 'Sattu Paratha', description: 'Rustic pairing from Bihar and Bengal with roasted gram flour flatbreads.' }
    ],
    curingMethod: 'Sun-wilted vegetables blended with ground spices and aged in earthenware.',
    storage: 'Keep in dry conditions. Spoon gently from bottom to mix spices and oil.',
    shelfLife: '9 months from packaging.',
    inStock: true
  }
];
