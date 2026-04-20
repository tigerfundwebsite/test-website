import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Rocket, ShieldCheck, Target, TrendingUp, HelpCircle, Search } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Small-Cap Reality: Distinguishing Speculation from Emerging Leaders",
    description: "Why small-caps aren't 'gambles' for those with on-ground research. A high-authority guide for ₹50L+ investors on identifying the giants of tomorrow.",
};

export default function SmallCapRealityGuide() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* SEO Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 bg-accent-cream border-b border-orange-100/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100/40 to-transparent pointer-events-none"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all"
                    >
                        <ChevronLeft size={20} />
                        Back to Knowledge Center
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                        <span className="text-primary">Small-Cap</span> Reality: <br />
                        Hunt for the Tomorrow's Giants
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Small-caps are often branded as "high-risk gambling." For the uninformed, this is true. For the researcher, this is where the greatest informational edge exists.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 13 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Strategy: Emerging Moats</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-1.5 rounded-full border border-orange-100 text-primary text-sm font-bold uppercase tracking-wider">High Alpha Potential</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Every large-cap was once a small-cap that the market ignored. The trick is to find them before the index does."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Volatility Stigma</h2>
                    <p>
                        In the hierarchy of Indian investments, "Small-Caps" are often treated with suspicion by conservative HNIs. They are seen as opaque businesses, prone to management fraud and wild price swings. This stigma is understandablethe small-cap index can go through years of 40-50% drawdowns.
                    </p>
                    <p>
                        However, the <strong>reality of small-cap investing</strong> for a ₹50L+ portfolio is about <strong>Asymmetric Returns</strong>. Because these companies are too small for major foreign institutions to track, they often trade at deep discounts to their true intrinsic value. When a small-cap company successfully transitions into a mid-cap, the "re-rating" of its PE multiple creates generational wealth.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Variance vs. Default Risk</h2>
                    <p>
                        The primary misconception about small-caps is confusing <strong>Volatility</strong> with <strong>Risk</strong>. A small stock price might drop 30% in a month purely because one large investor sold. This is volatility. True risk is if the business goes bankrupt.
                    </p>
                    <div className="my-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                        <h4 className="text-xl font-bold text-slate-900 mb-4">The Tiger Filter for Small-Caps:</h4>
                        <ul className="space-y-4">
                            <li><strong>Clean Balance Sheet:</strong> Debt-to-Equity below 0.5. A small-cap with high debt is a gamble; a debt-free small-cap is a fortress.</li>
                            <li><strong>Niche Dominance:</strong> The company might be small, but it must be a "Big Fish in a Small Pond" (e.g., controlling 40% of a specific chemical component).</li>
                            <li><strong>Management Integrity:</strong> Zero related-party transactions and a clear history of fulfilling profit guidance.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹50L+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Search className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">The Information Gap</h4>
                            <p className="text-base text-slate-600">While 50+ analysts track Reliance, often zero analysts track a ₹1000Cr industrial company. This is where research pays the highest dividends.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Rocket className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Re-rating Potential</h4>
                            <p className="text-base text-slate-600">When a small-cap grows its market cap and becomes eligible for inclusion in the "Nifty Midcap 100," large mutual funds are *forced* to buy it, causing the final vertical spike in wealth.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Strategic Allocation</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The 20% "Satellite" Allocation
                            </h3>
                            <p>For an investor with ₹1Cr, we often recommend allocating 20% (₹20L) into a basket of 5-8 high-conviction emerging leaders. This 20% doesn't need to double every year; it just needs to survive and grow. One 10x winner in this basket can pay for the entire portfolio's performance over a decade.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-950 text-white border-none relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary">Scenario:</span> SME Advisory Entry
                            </h3>
                            <p className="text-slate-300">Through our <strong>SME Advisory</strong>, we give HNIs early-stage access to companies that are yet to be "discovered" by the main market. This is the purest form of "Anti-Gambling"—it is institutional due diligence applied to small-scale brilliance.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Mistaking Tips for Research:</strong> Buying a "penny stock" because of a WhatsApp group message. This is gambling. Buying a ₹1500Cr company after reading 5 years of annual reports is investing.</li>
                        <li><strong>Chasing Liquidity:</strong> Expecting small-caps to be as liquid as Large-caps. You must have at least a 5-year "lock-in" mindset for this sector.</li>
                        <li><strong>Ignoring the "Governance Discount":</strong> Thinking a stock is cheap at 5 PE. Often, it's at 5 PE for a reasonthe management cannot be trusted. In small-caps, governance is everything.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we don't fear volatility—we use it. Our <strong>TIGER Framework</strong> was specifically designed to handle the complexities of the Indian mid and small-cap ecosystem. We serve as your eyes and ears on the ground, conducting site visits and management calls to ensure that our recommendations are not "gambles," but high-probability bets on the <strong>Industrial Renaissance of India</strong>.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Target className="text-primary" />
                            Emerging Leader Checklist
                        </h3>
                        <ul className="space-y-6 text-slate-800">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="font-medium">Is the company a market leader in a niche segment?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="font-medium">Has the company grown its <strong>Free Cash Flow</strong> consistently for 3 years?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="font-medium">Is the promoter's skin in the game &gt; 50% with zero pledge?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">When should I sell a small-cap stock?</h4>
                            <p className="text-slate-600">The best small-cap companies should never be sold as long as their growth thesis is intact. Sell only if the company has reached its "valuation ceiling" as a large-cap, or if there is a governance failure.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is it safer to buy a small-cap mutual fund instead?</h4>
                            <p className="text-slate-600">Mutual funds are forced to diversify too much due to their large AUM. For an HNI, a concentrated PMS or direct advisory on 10-15 stocks is usually superior for generating real outperformance.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Identify the giants of 2030.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore our SME Advisory and SRE Tiger PMS options for high-conviction access to India's emerging industrial leaders.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sme-advisory">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Explore SME Advisory</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Our TIGER Framework</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
