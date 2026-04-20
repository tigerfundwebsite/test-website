import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Target, Shield, Zap, TrendingUp, HelpCircle } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Art of Compounding: Strategic Growth for ₹50L+ Portfolios",
    description: "Master the institutional-grade compounding strategies used by HNIs to build generational wealth. Optimize your ₹50L+ portfolio for risk-adjusted returns.",
};

export default function CompoundingGuide() {
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
                        The Science of <br />
                        <span className="text-primary">High-Conviction Compounding</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        For the ₹50L+ investor, compounding is no longer an arithmetic curiosity  it is a discipline of variance reduction and institutional-grade capital allocation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 12 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Strategy: Long-Term Growth</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: HNI / UHNI</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "The first rule of compounding is to never interrupt it unnecessarily."  Charlie Munger
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Wealth Threshold</h2>
                    <p>
                        In the retail investment world, compounding is often reduced to a simple SIP calculator showing how small monthly sums grow over thirty years. However, when your investable capital crosses the ₹50L threshold, the nature of the game shifts. At this level, you are no longer just "saving"; you are managing a balance sheet. The challenge is not finding the next 100-bagger, but ensuring that your core capital is deployed in a manner that maximizes the <strong>probability of success</strong> while minimizing the <strong>intensity of drawdowns</strong>.
                    </p>
                    <p>
                        For a sophisticated investor, compounding is the silent engine of wealth preservation. It requires a mental shift from returns-maximization to risk-adjusted alpha. This guide explores how institutional-grade discipline transforms raw capital into an enduring legacy.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Compounding Beyond the Calculator</h2>
                    <p>
                        Most investors treat compounding as an additive process. In reality, it is a multiplicative survival game. If you have ₹1 Crore and suffer a 50% loss, you need a 100% gain just to get back to zero. This asymmetry is why the variance of your returns matters more than the average return itself.
                    </p>
                    <p>
                        Sophisticated investors understand that compounding is fueled by <strong>Time, Yield, and Discipline</strong>. While time is out of your control and yield is determined by the market, discipline—the ability to stay invested through technical drawdowns—is the only lever you can pull. In a ₹50L+ portfolio, the goal is to build an engine that requires the least amount of human intervention.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹50L+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Shield className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Capital Preservation</h4>
                            <p className="text-base text-slate-600">The "Volatility Drag" can destroy a large portfolio. We focus on stocks with high governance standards and clean balance sheets to ensure the engine doesn't break during crises.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Zap className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Alpha Generation</h4>
                            <p className="text-base text-slate-600">Passive index investing struggles with tracking errors and sector concentration. Active, high-conviction strategies are needed to outperform in India's inefficient markets.</p>
                        </div>
                    </div>
                    <p>
                        For Indian HNIs, the environment is unique. We are witnessing structural megatrendsfrom the "China+1" manufacturing shift to the massive digitization of the rural economy. Strategic compounding in this context means aligning your capital with these tectonic shifts rather than chasing seasonal momentum.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Allocation Logic by Portfolio Size</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">₹50L</span>
                                The Growth Engine Phase
                            </h3>
                            <p>At ₹50 Lakhs, your focus should be on <strong>high-conviction concentration</strong>. Aim for 12-15 stocks across 3-4 structural themes. This allows for significant alpha generation while maintaining enough liquidity to pivot if the investment thesis breaks.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">₹1Cr</span>
                                The Structural Optimization Phase
                            </h3>
                            <p>Here, we introduce the <strong>Core & Satellite</strong> model. 70% of the portfolio (Core) sits in steady compounders with predictable cash flows (Tiger Core Portfolio), while 30% (Satellite) captures opportunistic gains in SME/Midcap sectors where valuations are mispriced.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-950 text-white border-none">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="bg-white text-slate-950 w-10 h-10 rounded-full flex items-center justify-center text-sm">₹5Cr</span>
                                The Legacy Compounding Phase
                            </h3>
                            <p className="text-slate-300">At ₹5 Crores and above, the priority shifts to <strong>Asset Protection and Tax Efficiency</strong>. We utilize multi-cap frameworks and potentially look at private SME opportunities through advisory channels to diversify away from purely listed market volatility.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What Sophisticated Investors Get Wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>The "Boredom" Trap:</strong> Believing that "doing something" (trading) is better than "doing nothing" (waiting). For large portfolios, activity is often the enemy of returns.</li>
                        <li><strong>Over-Diversification:</strong> Owning 50+ stocks essentially turns your portfolio into a high-cost index fund. Real wealth is built through conviction in your best 20 ideas.</li>
                        <li><strong>Anchoring to Past Price:</strong> Refusing to buy a great compounder because it was 20% cheaper last year. In compounding, the future trajectory is all that matters.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we approach compounding through the lens of our proprietary <strong>TIGER Framework</strong>. We don't just look for growth; we look for the <i>durability</i> of that growth. When we manage a ₹1Cr+ mandate, our success is measured by how much "participation" we capture in the ups and how much "protection" we provide in the downs.
                    </p>
                    <p>
                        A professional wealth partner provides the <strong>behavioral bridge</strong> between your long-term goals and the short-term noise of the market.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Zap className="text-primary" />
                            Quick Takeaways for Decision Makers
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <span className="font-bold text-slate-800 underline decoration-primary/30">Variance is your enemy.</span> High volatility drags down long-term CAGR.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <span className="font-bold text-slate-800 underline decoration-primary/30">Concentrate to create; Diversify to protect.</span> Choose your 15-20 best ideas.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <span className="font-bold text-slate-800 underline decoration-primary/30">Taxes are part of the return.</span> Optimize for LTCG and holding periods.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <span className="font-bold text-slate-800 underline decoration-primary/30">Discipline is multiplicative.</span> One emotional exit can reset five years of growth.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is a 12% return better than a 15% return with higher volatility?</h4>
                            <p className="text-slate-600">Mathematically, yes. "Volatility drag" means that a steady 12% often ends up with a higher terminal value than a 15% return that includes a -40% year. We prioritize the "Sharpe Ratio" over absolute yield.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How often should I review a ₹1Cr+ portfolio?</h4>
                            <p className="text-slate-600">Quarterly for structure and risk; annually for fundamental thesis re-evaluation. Daily or weekly monitoring usually leads to sub-optimal behavioral decisions.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Should I use Index Funds instead of Active Management?</h4>
                            <p className="text-slate-600">In developed markets, yes. In India, active managers can still find massive Alpha due to information asymmetry and governance-led quality filters, especially in the Midcap and SME space.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to institutionalize your portfolio?</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore our high-conviction PMS strategies or schedule a confidential portfolio audit with our senior strategists.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">Explore SRE Tiger PMS</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">Schedule an Audit</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
