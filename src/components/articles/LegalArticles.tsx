import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Clock, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  X,
  Sparkles,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { LEGAL_ARTICLES, ARTICLE_CATEGORIES } from '../../data/articlesData';
import { LegalArticle } from '../../types/article';

interface LegalArticlesProps {
  initialTopic?: string;
}

export const LegalArticles: React.FC<LegalArticlesProps> = ({ initialTopic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialTopic || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<LegalArticle | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['art-1']);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredArticles = LEGAL_ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesQuery = searchQuery.trim() === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keyTakeaways.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl shadow-trust border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800">
                Verified Legal Intelligence
              </span>
              <span className="text-xs text-slate-500">• Grounded in Case Law & Official Acts</span>
            </div>
            <h2 className="text-2xl font-bold text-legal-900 tracking-tight flex items-center gap-2">
              <FileText className="w-6 h-6 text-rose-600" />
              Legal Articles, Precedents & Regulatory Updates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Stay ahead with practical legal insights authored by senior advocates and cited with official docket records.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-trust border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 text-xs">
          {ARTICLE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full font-medium transition ${
                selectedCategory === cat.id
                  ? 'bg-legal-900 text-amber-300 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full md:w-72 flex items-center gap-2 bg-slate-50 rounded-xl border border-slate-200 px-3 py-1.5 text-xs">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles & legal cases..."
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => {
          const isBookmarked = bookmarkedIds.includes(article.id);
          return (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-trust border border-slate-200 p-6 flex flex-col justify-between hover:border-rose-400 transition space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTimeMinutes} min read
                    </span>
                    <button
                      onClick={() => toggleBookmark(article.id)}
                      className="text-slate-400 hover:text-amber-500 transition"
                      aria-label="Bookmark article"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <h3 
                  onClick={() => setSelectedArticle(article)}
                  className="font-bold text-slate-900 text-lg group-hover:text-rose-600 transition cursor-pointer line-clamp-2"
                >
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                {/* Key takeaway preview */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                  <strong className="text-slate-900 block font-semibold mb-1">
                    Key Practical Takeaway:
                  </strong>
                  <p className="line-clamp-2">{article.keyTakeaways[0]}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-slate-800">{article.author.name}</div>
                  <div className="text-[10px] text-slate-400">{article.author.role}</div>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1 font-bold text-rose-600 hover:text-rose-800 transition"
                >
                  Read Full Guide <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full p-6 sm:p-8 space-y-6 my-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-500">
                  Published {selectedArticle.publishedDate} • {selectedArticle.readTimeMinutes} min read
                </span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
              <div>
                <strong>Author:</strong> {selectedArticle.author.name} ({selectedArticle.author.role})
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-xs sm:text-sm">
              <strong className="text-emerald-950 font-bold block text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Executive Practical Takeaways:
              </strong>
              <ul className="list-disc pl-5 space-y-1 text-emerald-900">
                {selectedArticle.keyTakeaways.map((takeaway, i) => (
                  <li key={i}>{takeaway}</li>
                ))}
              </ul>
            </div>

            {/* Markdown Body */}
            <div className="text-sm text-slate-800 space-y-3 whitespace-pre-wrap leading-relaxed">
              {selectedArticle.fullBodyMarkdown}
            </div>

            {/* Official Source Citations */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" /> Reliable Statutory Authorities & Citations
              </h4>

              <div className="space-y-2">
                {selectedArticle.sourceCitations.map((cite, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">{cite.title}</div>
                      <div className="text-slate-500 mt-0.5">
                        Authority: {cite.authorityOrAct} • Docket/Enactment: {cite.yearOrDocket}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
