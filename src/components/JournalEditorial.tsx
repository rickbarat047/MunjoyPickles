import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { craftImg, kitchenHeritageImg, flagshipMacroImg } from '../data/products';

interface Article {
  id: string;
  title: string;
  tagline: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

const ARTICLES: Article[] = [
  {
    id: 'art-of-pickling',
    title: 'THE ART OF PICKLING',
    tagline: 'On the alchemy of patience, rooftop sunlight, and the sacred chemistry of cold-pressed oil.',
    category: 'Culinary Monograph',
    date: 'Summer Harvest Archive',
    readTime: '6 min read',
    image: craftImg,
    content: [
      'In a world addicted to instantaneous culinary gratification, pickling remains one of the few disciplines that refuses to accelerate. You cannot microwave a pickle. You cannot rush the sun.',
      'The traditional Indian pickle is an extraordinary feat of biochemistry masquerading as a pantry condiment. When raw green mangoes are massaged with coarse salt and turned under open skies, osmotic pressure draws out the water—the single element that allows microbial decay.',
      'As that moisture evaporates under the gentle heat of the sun, the cell walls of the fruit tighten. They do not turn to mush; they become leathery, crisp, and ready to drink the pungent, unrefined mustard oil that will seal them from oxygen for up to three years.',
      'To open a jar of homemade pickle is to taste an entire season captured in suspension. It is summer sunlight, cold-pressed seed oils, and the quiet devotion of women who knew how to measure time not in minutes, but in sunny afternoons.',
    ],
  },
  {
    id: 'ceramic-martabans',
    title: 'Why Martabans Matter',
    tagline: 'The ancient thermodynamics of white and amber glazed earthenware.',
    category: 'Pantry Vessels',
    date: 'Heritage Vessels',
    readTime: '4 min read',
    image: kitchenHeritageImg,
    content: [
      'The iconic white and ochre jar sitting in grandmother’s pantry is called a martaban. Its origins trace back to the ancient Burmese port of Martaban, through which glazed storage ceramics traveled across Asian maritime routes.',
      'Unlike modern glass or plastic containers, high-fired clay provides thermal inertia. When placed on a blistering sunlit terrace, the jar warms slowly and evenly. When dusk falls, it retains gentle warmth through the cool night.',
      'Furthermore, the acid-resistant mineral glaze prevents mango juice and vinegar from leaching heavy metals, preserving the pure medicinal flavor of cracked spices.',
    ],
  },
  {
    id: 'banarasi-chilli',
    title: 'The Banarasi Winter Harvest',
    tagline: 'Journey to the fertile plains along the Ganges for whole thick-skinned red peppers.',
    category: 'Field Notes',
    date: 'Winter Harvest',
    readTime: '5 min read',
    image: flagshipMacroImg,
    content: [
      'Every December, the agricultural belts hugging the banks of the Ganges in Varanasi produce an extraordinary variety of red pepper: large, thick-skinned, and shaped like inverted teardrops.',
      'These peppers are not grown for explosive capsaicin fire. They are grown for their flesh—thick enough to hold generous quantities of roasted fennel, dry mango amchur, and roasted coriander without rupturing.',
      'Slit by hand along a single vertical seam, the core seeds are gently loosened, blended back into the spice paste, and packed tightly like rolled tobacco leaves into each pepper before resting in dark mustard oil.',
    ],
  },
];

export const JournalEditorial: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const featured = ARTICLES[0];
  const secondary = ARTICLES.slice(1);

  return (
    <section id="journal" className="relative py-28 sm:py-36 md:py-48 bg-[#F3EBDD] text-[#1E0F0A] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1E0F0A]/15 pb-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#7D2418] mb-3">
              <span className="w-6 h-[1px] bg-[#7D2418]" />
              <span>09 / The Munjoy Journal</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E0F0A]">
              Culinary Essays & Field Notes.
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#7D2418]">
            Vol. 24 · Printed Dispatch
          </span>
        </div>

        {/* Magazine-Style Layout */}
        <div className="space-y-16">
          
          {/* Main Hero Article Spread */}
          <div
            onClick={() => setSelectedArticle(featured)}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center cursor-pointer border-b border-[#1E0F0A]/15 pb-16"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#7D2418]">
                <span>{featured.category}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E0F0A] group-hover:text-[#7D2418] transition-colors leading-[0.92] tracking-tight">
                {featured.title}
              </h3>

              <p className="text-base sm:text-lg text-[#1E0F0A]/80 font-light leading-relaxed max-w-xl">
                {featured.tagline}
              </p>

              <div className="pt-2">
                <span className="text-xs uppercase font-mono tracking-widest text-[#7D2418] hover-underline-editorial pb-1 font-semibold">
                  Read Monograph Essay →
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-16/10 sm:aspect-4/3 overflow-hidden shadow-2xl bg-[#1E0F0A]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Two Smaller Stories Underneath */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {secondary.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedArticle(story)}
                className="group cursor-pointer space-y-5 border-b border-[#1E0F0A]/10 pb-8"
              >
                <div className="aspect-16/9 overflow-hidden shadow-lg bg-[#1E0F0A]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7D2418]">
                  <span>{story.category}</span>
                  <span>·</span>
                  <span>{story.readTime}</span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E0F0A] group-hover:text-[#7D2418] transition-colors">
                  {story.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#1E0F0A]/70 font-light leading-relaxed">
                  {story.tagline}
                </p>

                <span className="text-xs uppercase font-mono tracking-widest text-[#7D2418] hover-underline-editorial pb-0.5 inline-block font-medium">
                  Read Story →
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Editorial Essay Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1E0F0A]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-[#F3EBDD] text-[#1E0F0A] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-14 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close reader"
                className="absolute top-6 right-6 p-2 text-[#1E0F0A]/60 hover:text-[#1E0F0A] cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7D2418]">
                  <span>{selectedArticle.category}</span>
                  <span>·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E0F0A] leading-tight">
                  {selectedArticle.title}
                </h3>

                <p className="font-serif italic text-lg sm:text-xl text-[#7D2418]">
                  {selectedArticle.tagline}
                </p>

                <div className="aspect-16/9 overflow-hidden my-6">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#1E0F0A]/85 font-light leading-relaxed">
                  {selectedArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-8 border-t border-[#1E0F0A]/15 flex items-center justify-between text-xs font-mono text-[#1E0F0A]/60">
                  <span>MUNJOY ARCHIVAL DISPATCH</span>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="text-[#7D2418] hover:underline cursor-pointer font-bold"
                  >
                    Close Essay
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
