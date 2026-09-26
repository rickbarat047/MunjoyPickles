import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/brandData';
import { JournalArticle } from '../types';
import { ArrowRight, Clock, X, BookOpen } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const featuredArticle = JOURNAL_ARTICLES[0];
  const sideArticles = JOURNAL_ARTICLES.slice(1);

  return (
    <section id="journal" className="py-24 sm:py-36 bg-[#FAF7F2] text-[#241E1A] relative border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0D4C5]">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B1E13] font-semibold block">
              Culinary Essays
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#241E1A] leading-[1]">
              The Munjoy Journal.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Stories from rooftop terraces, the science of cold-pressed virgin oils, and pairing ideas for modern dinner tables.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.16em] text-[#7A6B5F] flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#8B1E13]" />
            <span>Essays on Indian Food Culture</span>
          </div>
        </div>

        {/* Editorial Layout: Large Featured Article + Two Stacked Articles */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Featured Article (7 cols) */}
          <article
            onClick={() => setSelectedArticle(featuredArticle)}
            className="lg:col-span-7 group cursor-pointer space-y-6 bg-[#F5EFEB] p-6 sm:p-8 border border-[#E0D4C5] shadow-xs hover:border-[#8B1E13]/50 transition-all"
          >
            <div className="aspect-16/10 overflow-hidden bg-[#E8DFD5] border border-[#E0D4C5]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#7A6B5F]">
                <span className="text-[#8B1E13] uppercase tracking-wider font-semibold">
                  {featuredArticle.category}
                </span>
                <span className="font-mono text-[11px]">{featuredArticle.readTime}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241E1A] group-hover:text-[#8B1E13] transition-colors leading-tight">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed line-clamp-3">
                {featuredArticle.summary}
              </p>

              <div className="pt-4 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8B1E13] group-hover:translate-x-1 transition-transform">
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>

          {/* Right Column: Two Stacked Editorial Previews (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group cursor-pointer p-6 sm:p-7 bg-[#F5EFEB] border border-[#E0D4C5] shadow-2xs hover:border-[#8B1E13]/50 transition-all space-y-4"
              >
                <div className="aspect-16/9 overflow-hidden bg-[#E8DFD5] border border-[#E0D4C5]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7A6B5F]">
                    <span className="text-[#8B1E13] uppercase tracking-wider font-semibold">
                      {article.category}
                    </span>
                    <span className="font-mono text-[11px]">{article.readTime}</span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#241E1A] group-hover:text-[#8B1E13] transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#5A4E45] line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B1E13] group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>

      {/* Full-Screen Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs">
          <div
            className="relative w-full max-w-3xl bg-[#FAF7F2] shadow-2xl border border-[#E0D4C5] overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD5] bg-[#F5EFEB]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8B1E13] font-semibold">
                {selectedArticle.category} · {selectedArticle.readTime}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-[#5A4E45] hover:text-[#8B1E13] rounded-xs hover:bg-[#EAE0D3] transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241E1A] leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="text-xs text-[#7A6B5F] flex items-center gap-2 pt-1 font-mono">
                  <span>By {selectedArticle.author}</span>
                  <span>·</span>
                  <span>{selectedArticle.date}</span>
                </div>
              </div>

              <div className="aspect-16/9 overflow-hidden border border-[#E0D4C5]">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#3A3027] leading-relaxed">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E8DFD5] flex items-center justify-between">
                <span className="font-serif italic text-xs text-[#7A6B5F]">
                  Munjoy Archive of traditional Indian culinary wisdom.
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-[#241E1A] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold"
                >
                  Close Essay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
