import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Calculator, TrendingUp, Search, Percent, HelpCircle, Landmark } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Valuation Strategy: Quantifying Alpha for High-Conviction Portfolios",
    description: "Beyond PE multiples. A sophisticated guide to EV/EBITDA, Cash Flow Yields, and Capital Allocation for the ₹50L+ Indian investor.",
};

export default function ValuationGuide() {
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
                        Precision <span className="text-primary">Valuation</span>: <br />
                        Decoding the Price of Alpha
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        For the serious investor, price is what you pay; value is what you protect. Mastering valuation is the bridge between speculation and high-conviction allocation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 14 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Focus: Quantitative Analysis</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Level: Professional Grade</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Market value is the price at which a stock can be sold; intrinsic value is the price at which it should be bought."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Fallacy of the PE Multiple</h2>
                    <p>
                        In the retail finance discourse, valuation is often oversimplified to a single metric: the Price-to-Earnings (PE) ratio. However, for a professional wealth strategist managing a ₹50L+ mandate, a low PE is often a trap, while a high PE can sometimes represent generational value.
                    </p>
                    <p>
                        Valuation is not a static numberit is a dynamic assessment of a company's ability to generate cash and its efficiency in deploying capital. This guide moves beyond the basics to help sophisticated investors understand how we quantify "Alpha" in the Indian equity markets.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: The Multi-Dimensional Valuation Matrix</h2>
                    <p>
                        A professional valuation framework looks at three distinct pillars:
                    </p>
                    <ol>
                        <li><strong>Earnings Quality:</strong> Are the profits backed by actual cash flow (OCF) or just accounting entries?</li>
                        <li><strong>Capital Efficiency:</strong> What is the ROIC (Return on Invested Capital)? A 20% growth rate fueled by 10% ROIC is a value-destroyer.</li>
                        <li><strong>Growth Visibility:</strong> How long is the "runway" for compounding? High growth in a small addressable market (TAM) soon leads to a valuation ceiling.</li>
                    </ol>
                    <p>
                        We prioritize <strong>EV/EBITDA</strong> and <strong>Free Cash Flow (FCF) Yield</strong> over PE, as these provide a clearer picture of the business’s true earning power, independent of its debt structure.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹50L+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < TrendingUp className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Normalized Valuations</h4>
                            <p className="text-base text-slate-600">In a growth market like India, one-year forward PE is often misleading. We look at normalized earnings over a 3-5 year cycle to identify true value.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Landmark className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Moat Assessment</h4>
                            <p className="text-base text-slate-600">Premium valuations are only justified if the firm has a structural moat (pricing power, high switching costs, or regulatory barriers).</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Valuation Metrics</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                EV/EBITDA
                            </h3>
                            <p>Used predominantly for capital-intensive sectors. It accounts for debt and depreciation, giving you the multiplier on the operating cash power of the business. For the industrial "China+1" players, this is our go-to metric.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                Price to Book (P/B)
                            </h3>
                            <p>Critical for the Banking and Financial Services (BFSI) sector. A P/B below 1.5 for a high-quality bank with a strong CASA ratio often represents a massive opportunity for the ₹1Cr+ investor to build a defensive core.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-950 text-white border-none">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                FCF Yield
                            </h3>
                            <p className="text-slate-300">The ultimate "Truth Metric." It tells you exactly how much cash is left for shareholders after all Capex. An FCF yield higher than the 10-year G-Sec yield is usually a strong signal for aggressive allocation.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What Sophisticated Investors Get Wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>The "Cheap Stock" Illusion:</strong> Buying a stock because it's at a "52-week low." Price is not valuation. A stock down 50% can still be 100% overvalued.</li>
                        <li><strong>Comparing Apples to Oranges:</strong> Using the same PE benchmarks for a Tech high-growth firm and a Utility dividend-paying firm. Valuations must be peer-relative and industry-historical.</li>
                        <li><strong>Ignoring Net Debt:</strong> Focusing on Market Cap instead of Enterprise Value. Debt is a future claim on valuation that must be accounted for today.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we don't just calculate numbers; we evaluate <strong>management's capital allocation history</strong>. A CEO who misallocates capital on vanity projects will destroy a low-valuation stock faster than a high-valuation company with a disciplined leader can grow. Our valuation model builds in a "Governance Premium" or "Discount" based on proprietary checks.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Search className="text-primary" />
                            Valuation Checklist
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-slate-800">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Check <strong>Operating Cash Flow vs Net Profit</strong> over a 5-year period.
                            </li>
                            <li className="flex gap-3 text-slate-800">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Analyze <strong>Asset Turnover Ratio</strong> to gauge operational efficiency.
                            </li>
                            <li className="flex gap-3 text-slate-800">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Verify <strong>Interest Coverage Ratio</strong> for leveraged companies.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Should I sell if the PE of my stock reaches historic highs?</h4>
                            <p className="text-slate-600">Not necessarily. If the earnings growth (G) is accelerating faster than the PE expansion, the "PEG Ratio" might still be attractive. Focus on the earnings trajectory.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Why does Tiger Assets focus on ROIC?</h4>
                            <p className="text-slate-600">Because it measures how much profit a company generates for every rupee of capital (equity + debt) employed. ROIC is the primary driver of intrinsic value growth.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Leverage our analytical depth.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Get access to professional valuation reports and high-conviction ideas tailored for your capital profile.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">SRE Tiger PMS Strategy</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">Request a Valuation Audit</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
