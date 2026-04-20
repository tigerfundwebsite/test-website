import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Hourglass, ShieldCheck, Target, TrendingUp, HelpCircle, History } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Lindy Effect: Predicting the Longevity of Your Investments",
    description: "Explore why time-tested business models are often the safest bet for ₹1Cr+ portfolios. High-authority guide on the Lindy Effect in Indian equities.",
};

export default function LindyEffectGuide() {
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
                        The <span className="text-primary">Lindy Effect</span>: <br />
                        Wealth and the Test of Time
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        For non-perishable ideas and businesses, the longer they have survived, the longer they are likely to survive. This is the ultimate heuristic for generational wealth.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 10 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Concept: Statistical Longevity</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Target: Blue-Chip Mandates</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "If a book has been in print for fifty years, it is likely to be read for another fifty. If a technology has been around for five, it is likely to be obsolete in five."  The Lindy Rule
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Chasing Discovery Bias</h2>
                    <p>
                        In the race for "the next big thing," HNI investors often over-allocate to unproven technology and business models with zero track record of survival. While these may offer high temporary growth, they lack the structural resilience to build generational wealth.
                    </p>
                    <p>
                        The <strong>Lindy Effect</strong> is a powerful mental model that suggests the future life expectancy of a non-perishable thing (like a brand, a business model, or a core sectoral demand) is proportional to its current age. In the Indian market, this means prioritizing companies that have survived multiple recessions, policy shifts, and demographic changes.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Survival is the Greatest Filter</h2>
                    <p>
                        Most people assume things have a finite "expiration date" (like a banana). But information and business systems act differently. Every year a core business survives, it proves its resilience and settles its competitive moats.
                    </p>
                    <div className="my-12 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                            < Hourglass className="text-primary" />
                            Lindy Applied to Equities
                        </h4>
                        <ul className="space-y-4 text-slate-300">
                            <li><strong>Proven Brands:</strong> A consumer brand that has been dominant for 30 years has a higher probability of being dominant 30 years from now than a new digital-only brand has of surviving 3 years.</li>
                            <li><strong>Financial Hygiene:</strong> A bank that has maintained a consistent CASA ratio and low GNPA through 3 major credit cycles is "Lindy-Proof" compared to a fintech with high growth but no cycle-testing.</li>
                            <li><strong>Governance:</strong> Promoters who have successfully transitioned leadership across generations possess a "Governance Lindy" that is invaluable.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < History className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Portfolio Anti-Aging</h4>
                            <p className="text-base text-slate-600">We anchor high-value portfolios in Lindy assets (FMCG leaders, large-cap industrials) to provide a "Defensive Core." This acts as the steady engine that funds tactical, high-growth "Satellite" bets.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">The 10-Year Test</h4>
                            <p className="text-base text-slate-600">If a sector (like specialized chemicals) has been a consistent Alpha generator for 10 years, the Lindy effect suggests it has structural tailwinds, not just a cyclical peak.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Core vs. Satellite</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> Allocating ₹1Cr to Banking
                            </h3>
                            <p><strong>Lindy Approach:</strong> Allocate 70% to the "Toll-Gate" banks that have survived 20+ years of regulatory shifts. Allocate 30% to the emerging tech-led banks. The 70% provides the "Survival" fuel; the 30% provides the "Growth" multiplier.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-orange-50/30 border-orange-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary text-xl">₹5Cr+</span> Generational Wealth Transmission
                            </h3>
                            <p className="text-slate-800">For legacy planning, we almost exclusively select Lindy assets. We look for companies with assets that *appreciate* with timesuch as real estate portfolios in Tier-1 cities or brands with massive emotional capital.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Mistaking Size for Lindy:</strong> A huge company that is only 5 years old (e.g., a massive tech unicorn) is *not* a Lindy asset. Survival time, not valuation size, is the metric.</li>
                        <li><strong>The Innovator's Hubris:</strong> Assuming that "this time it's different" and a new tech will render a 50-year-old consumer habit obsolete in 12 months. Habits are highly Lindy-consistent.</li>
                        <li><strong>Ignoring the Negative Lindy:</strong> A business that has been struggling for 20 years is likely to continue struggling. Inefficiency can be as Lindy as dominance.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we utilize the <strong>Tiger Framework</strong> to differentiate between "High Growth" and "High Conviction." While we tactical explore the China+1 thesis, our core conviction often rests in the Lindy-consistent leaders who have the capacity and the history to execute. We don't just ask about CAGR; we ask about <strong>Durable Competitive Advantage</strong> through multiple cycles.
                    </p>

                    <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < TrendingUp className="text-primary" />
                            Lindy Evaluation Checklist
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="text-slate-800">Has the company maintained market leadership across at least <strong>two market crashes</strong>?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="text-slate-800">Is the core product or service a <strong>non-perishable fundamental need</strong> (e.g., paint, banking, electricity)?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="text-slate-800">Does the management have a 10-year+ history of <strong>capital allocation discipline</strong>?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Does following the Lindy Effect mean I miss out on high-growth tech startups?</h4>
                            <p className="text-slate-600">Yes, it might. But for the ₹1Cr+ investor, the goal is often *prevention* of wealth destruction. We allocate to tech only when the platform exhibits network effects (which are itself a form of digital Lindy).</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is the Index a Lindy asset?</h4>
                            <p className="text-slate-600">The *concept* of the Index is Lindy. However, the constituents change. We prefer to identify the "Eternal Constituents"the companies that stay in the index across decades.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-950 text-white rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                    <h3 className="text-2xl font-bold mb-4 relative z-10">Anchor your wealth in time-tested themes.</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">Discover the Lindy-consistent leaders we are currently backing for generational wealth compounding.</p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white border border-primary px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">Explore Tiger PMS</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest text-xs">Our Strategy Framework</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
