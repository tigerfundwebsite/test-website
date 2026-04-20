import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, TrendingDown, ShieldCheck, Target, BarChart2, HelpCircle, Activity } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Turnover Ratio & Slippage: The Silent Wealth Eroder",
    description: "Why over-trading destroys compounding. A high-authority guide for ₹50L+ investors on identifying hidden transaction costs and tax leakage.",
};

export default function TurnoverRatioGuide() {
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
                        <span className="text-primary">Turnover Ratio</span>: <br />
                        The Tax of Activity
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        In investing, motion is often the enemy of progress. High portfolio turnover is a silent anchor that drags down your CAGR through taxes, impact costs, and slippage.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 9 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Theme: Efficiency Leakage</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Target: High-Conviction Mandates</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "The stock market is a device for transferring money from the active to the patient."  Warren Buffett
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Illusion of "Doing Something"</h2>
                    <p>
                        When markets are volatile, the natural human instinct is to react. Many wealth managers capitalize on this by frequently "rebalancing" portfolios or "rotating sectors." While this looks like active management, it often leads to a phenomenon called <strong>Portfolio Turnover</strong>.
                    </p>
                    <p>
                        For an HNI with ₹50L+, the costs of this activity are not just the small brokerage fees. The real costs are <strong>Short-Term Capital Gains Tax (STCG)</strong> and <strong>Slippage</strong>. Over a 10-year period, a high-turnover portfolio can underperform a low-turnover one by 20-30% in absolute wealth terms, even if they have the same gross returns.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Defining Turnover Ratio</h2>
                    <p>
                        The <strong>Portfolio Turnover Ratio (PTR)</strong> measures how much of the portfolio's holdings were replaced in a given year.
                    </p>
                    <ul>
                        <li><strong>PTR of 20%:</strong> The average stock is held for 5 years. This indicates a "Buy and Hold" high-conviction manager.</li>
                        <li><strong>PTR of 100%:</strong> The entire portfolio was replaced once this year. This is essentially trading, not investing.</li>
                    </ul>
                    <p>
                        <strong>Slippage and Impact Cost:</strong> When a large portfolio (e.g., ₹5Cr) tries to buy or sell a mid-cap stock, the mere act of trading can push the price up or down. This "Impact Cost" is invisible but deadly to Alpha.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < TrendingDown className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">The Tax Anchor</h4>
                            <p className="text-base text-slate-600">Every time you sell a winner to "book profit" within a year, you pay 15% STCG. If you held for 366 days, you pay 10% LTCG. Frequent churn turns the government into your biggest (and most expensive) partner.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Conviction over Churn</h4>
                            <p className="text-base text-slate-600">Low turnover is a signal of deep research. It means the manager didn't buy a stock for a "quick bounce," but because they believe in the 5-year structural moat.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Auditing Your Manager</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The Monthly Rebalancer
                            </h3>
                            <p>An advisor recommends "optimizing" your top 10 positions every month based on new chart patterns. <br /><strong>The hidden math:</strong> 12 trades a year with 0.5% impact cost and 15% tax on every gain. To beat a "Lazy" buy-and-hold portfolio, this advisor has to be 5-7% better *every single year* just to break even. Most aren't.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary text-xl">The Tiger Way</span>
                            </h3>
                            <p className="text-slate-300">In our <strong>SRE Tiger PMS</strong>, we aim for a multi-year holding period. We only sell when: <br />1. The structural thesis breaks (Management failure, Moat erosion). <br />2. The valuation becomes "Irrational" (PE &gt; 3x historical average without earnings support). <br />3. There is a significantly better opportunity that justifies the tax cost.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4 text-slate-700">
                        <li><strong>Mistaking "Booking Profit" for Wealth Building:</strong> Selling a winner at a 20% gain might feel good, but if that company goes on to grow 10x, you've made a catastrophic error. Compounding requires <strong>letting winners run</strong>.</li>
                        <li><strong>Ignoring the STI/STT:</strong> Securities Transaction Tax (STT) and other levies add up. For a high-frequency HNI trader, these can eat 1-2% of the total portfolio value annually.</li>
                        <li><strong>Thinking All Turnover is Bad:</strong> Occasional turnover is necessary for risk management. A portfolio with 0% turnover for 10 years might be holding onto "zombie" companies. The goal is **Optimization**, not stagnation.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we pride ourselves on being "Low Turnover" specialists. Our <strong>TIGER Framework</strong> performs the heavy lifting *before* the buy, so we don't have to scramble to sell. We help our clients cultivate the "Leitmotif" of institutional wealth: <strong>Violent research, followed by absolute stillness.</strong>
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Activity className="text-primary" />
                            Turnover & Tax Audit
                        </h3>
                        <ul className="space-y-6 text-slate-800">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="font-medium">What was the <strong>STCG Tax</strong> paid in your last Income Tax Filing? (If it's more than 2% of your net worth, you are over-trading).</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="font-medium">What is the <strong>Turnover Ratio</strong> of the mutual funds/PMS mandates you currently hold?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="font-medium">When was the last time you bought a stock and held it for <strong>more than 3 years</strong>?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is high turnover in a 'Liquid Fund' bad?</h4>
                            <p className="text-slate-600">No. In debt and liquid funds, turnover is natural as instruments mature and are replaced. This guide focuses on your **Growth/Equity** portfolio, where compounding is most sensitive.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Does rebalancing increase turnover?</h4>
                            <p className="text-slate-600">Yes, but rebalancing should be done annually or at major market shifts, not weekly. Efficient rebalancing keeps your risk in check without destroying your compounding.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Minimize the friction. Maximize the wealth.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Discover how our high-conviction, low-turnover PMS strategies protect your wealth from unnecessary tax and slippage leakage.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">SRE Tiger PMS Strategy</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Our Research Framework</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
