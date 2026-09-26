import { JournalArticle, ProcessStep, Testimonial } from '../types';
import craftImg from '../assets/images/craft_sundrying_spices_1790438200269.jpg';
import heroImg from '../assets/images/hero_pickle_composition_1790438144628.jpg';
import mangoImg from '../assets/images/product_mango_pickle_1790438158089.jpg';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Select',
    headline: 'Handpicked at seasonal prime',
    description: 'We source raw green mangoes with firm, unblemished flesh, thick-fleshed Banarasi red chillies, and Kagzi limes directly from trusted grower orchards at peak harvest.',
    detail: 'Every single fruit and vegetable is individually inspected for crispness and density. Soft or bruised produce is rejected at the table.'
  },
  {
    number: '02',
    title: 'Prepare',
    headline: 'Sun-wiping & precise slicing',
    description: 'Washed in pure water and thoroughly dried on pristine cotton cloth until zero moisture remains. Cut into uniform pieces with ancestral brass and carbon steel blades.',
    detail: 'Moisture is the ancient enemy of shelf-stable pickling. Drying ensures our pickles mature naturally without artificial preservatives.'
  },
  {
    number: '03',
    title: 'Spice',
    headline: 'Stone-cracked fragrant spices',
    description: 'Whole spices—mustard seeds, fenugreek, coriander, fennel, and kalonji—are sun-toasted and coarsely cracked, never pulverized into dead powders.',
    detail: 'Cracking preserves volatile essential oils. When warm cold-pressed mustard oil meets the spices, the aroma is unmistakably nostalgic.'
  },
  {
    number: '04',
    title: 'Rest',
    headline: 'Patient sun-curing on terraces',
    description: 'Bathed in seasoned mustard oil, jars are swaddled in fine muslin cloth and placed on sunny rooftops for 14 to 21 days to cure naturally under daylight warmth.',
    detail: 'Sunlight slowly breaks down raw skins, fusing tart juices with oil and roasted spice notes into a harmonious, deep savoury complexity.'
  },
  {
    number: '05',
    title: 'Jar',
    headline: 'Sealed in heavy glazed ceramic & glass',
    description: 'Carefully ladled by hand into sanitary ceramic jars, topped with a protective mantle of pure mustard oil, and sealed for your kitchen counter.',
    detail: 'Ready to bring unforgettable warmth, nostalgic tang, and pure joy to your everyday lunch and dinner.'
  }
];

export const INGREDIENTS_SHOWCASE = [
  {
    name: 'Cold-Pressed Mustard Oil',
    hindi: 'कच्ची घानी सरसों का तेल',
    description: 'The golden lifeblood of traditional Indian pickles. Unrefined, pungent, and naturally preservative-rich.',
    characteristic: 'Pungent & Warming'
  },
  {
    name: 'Ramkela Raw Mango',
    hindi: 'रामकेला कच्चा आम',
    description: 'Renowned for firm inner seed structure, sour punch, and crunch that does not turn mushy over months.',
    characteristic: 'Firm & Pleasantly Tart'
  },
  {
    name: 'Banarasi Red Chillies',
    hindi: 'बनारसी लाल मिर्च',
    description: 'Broad, plump crimson pods selected specifically for whole-stuffing with aromatic dry-roasted spice mixes.',
    characteristic: 'Rich Color & Slow Heat'
  },
  {
    name: 'Yellow Mustard Seeds (Rai)',
    hindi: 'पीली सरसों / राई दाल',
    description: 'Cracked coarse into golden granules that release enzymes upon meeting oil, developing signature tangy sharpness.',
    characteristic: 'Sharp & Earthy'
  },
  {
    name: 'Roasted Fenugreek (Methi)',
    hindi: 'भुनी मेथी दाना',
    description: 'Slow-toasted until golden amber to unlock caramel notes and an appetizing bitter contrast to the sour fruit.',
    characteristic: 'Nutty & Bitter Note'
  },
  {
    name: 'Kashmiri Hing (Asafoetida)',
    hindi: 'शुद्ध हींग',
    description: 'A pinch of intense heirloom resin that delivers irreplaceable savoury umami depth and aids wholesome digestion.',
    characteristic: 'Deep Umami Aroma'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Placeholder customer testimonial — replace with verified customer review. The Heritage Mango Pickle tastes uncannily like the jars my grandmother used to seal in white muslin on our rooftop in Lucknow.',
    customerName: 'Aarav Malhotra',
    location: 'Bangalore, Karnataka',
    favouritePickle: 'Heritage Raw Mango Pickle',
    verified: true
  },
  {
    id: 't-2',
    quote: 'Placeholder customer testimonial — replace with verified customer review. Most commercial pickles are soaked in vinegar and preservatives. Munjoy has that unmistakable pungent punch of authentic cold-pressed mustard oil and cracked saunf.',
    customerName: 'Priyanka Sen',
    location: 'Kolkata, West Bengal',
    favouritePickle: 'Stuffed Red Chilli Pickle',
    verified: true
  },
  {
    id: 't-3',
    quote: 'Placeholder customer testimonial — replace with verified customer review. The lime pickle is an absolute revelation with curd rice. Thin skins, zero chemical taste, and genuine homemade depth.',
    customerName: 'Rajesh K. Nambiar',
    location: 'Chennai, Tamil Nadu',
    favouritePickle: 'Aged Sun-Drying Lime Pickle',
    verified: true
  },
  {
    id: 't-4',
    quote: 'Placeholder customer testimonial — replace with verified customer review. Packaging was immaculate in heavy ceramic jars. Our family finished the first 500g bottle in less than three weeks.',
    customerName: 'Meera Deshmukh',
    location: 'Mumbai, Maharashtra',
    favouritePickle: 'Spiced Whole Garlic Pickle',
    verified: true
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-of-sun-drying',
    title: 'The Lost Art of Rooftop Sun-Drying: Why Heat Cannot Be Rushed',
    category: 'Pickle Traditions',
    readTime: '4 min read',
    date: 'Autumn Harvest',
    summary: 'Why no industrial dehydrator can duplicate the magic of a warm afternoon sun, a breeze of fresh air, and patient resting in muslin-wrapped ceramic jars.',
    content: [
      'In traditional Indian homes, pickle-making was not an afternoon task—it was a seasonal ceremony that summoned the whole household to the roof terrace.',
      'Raw mangoes, freshly quartered, would be spread on white cotton bedsheets beneath the clear summer sky. The sun does not merely remove water; it gently caramelises the natural sugars in the fruit and prompts the cracked mustard to release its lively, digestive enzymes.',
      'At Munjoy, we honour this deliberate slowness. We believe food that is made for memory cannot be accelerated with artificial heat or vinegar shortcuts.'
    ],
    image: craftImg,
    author: 'Munjoy Kitchen Archive'
  },
  {
    id: 'mustard-oil-alchemy',
    title: 'Mustard Oil: The Pungent Golden Elixir of the Indian Kitchen',
    category: 'Ingredient Spotlight',
    readTime: '5 min read',
    date: 'Heritage Notes',
    summary: 'Understanding kacchi ghani—cold-pressed mustard oil—and why its natural pungency is both culinary poetry and ancestral food science.',
    content: [
      'Pour pure cold-pressed mustard oil into a brass pan, and the kitchen instantly awakens with an assertive, tear-inducing sting that Indian grandmothers revere.',
      'Unlike neutral refined oils that merely carry spices, virgin mustard oil is an active ingredient in itself. Its natural allyl isothiocyanate acts as an organic antimicrobial shield, preserving raw vegetables for months without artificial chemical preservatives.',
      'We source only single-origin yellow and black mustard seed oil pressed in wooden mills at gentle temperatures.'
    ],
    image: heroImg,
    author: 'Culinary Heritage Team'
  },
  {
    id: 'perfect-pairings-india',
    title: 'Beyond The Thali: How Modern Tables Are Rediscovering Pickle Pairings',
    category: 'Serving Ideas',
    readTime: '3 min read',
    date: 'Modern Kitchen',
    summary: 'From sourdough toast with sharp cheddar and a dab of garlic pickle, to creamy curd rice with aged lime—pickle as a versatile culinary flourish.',
    content: [
      'For decades, pickle was relegated to a modest spoonful on the rim of a stainless steel thali. Today, discerning home cooks are recognizing its power as an intense, acid-fat flavour balancer.',
      'Try pairing our Stuffed Red Chilli Pickle with a sharp aged cheddar grilled cheese, or folding a teaspoon of Heritage Mango Pickle oil into hot noodles or khichuri.',
      'When crafted with genuine culinary restraint, pickle is not just a side relish—it is the soul of the meal.'
    ],
    image: mangoImg,
    author: 'Munjoy Food Stories'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    title: 'Hot crispy ajwain parathas with a spoonful of raw mango pickle.',
    likes: '1.4k',
    tag: '#MunjoyTable'
  },
  {
    id: 'ig-2',
    title: 'Sunlight filtering through muslin-draped martaban jars on our terrace.',
    likes: '2.1k',
    tag: '#HandcraftedInIndia'
  },
  {
    id: 'ig-3',
    title: 'Steamed fragrant basmati rice, melted cow ghee, and spicy garlic pearls.',
    likes: '980',
    tag: '#SimpleComforts'
  },
  {
    id: 'ig-4',
    title: 'Banarasi red chillies cooling after being freshly filled with saunf & amchur.',
    likes: '3.2k',
    tag: '#SmallBatchPickles'
  }
];
