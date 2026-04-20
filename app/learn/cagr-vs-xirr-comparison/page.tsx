import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, TrendingUp, ShieldCheck, Target, BarChart, HelpCircle, Calendar } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CAGR vs. XIRR: The Truth About Your Portfolio Returns",
    description: "Why simple averages fail to show real performance. A professional guide for HNIs on calculating actual wealth growth in complex portfolios.",
};

export default function CAGRvsXIRRGuide() {
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
                        <span className="text-primary italic">CAGR vs. XIRR</span>: <br />
                        Wealth Measurement
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Returns are deceptive. For an HNI with multiple cash inflows and outflows, a single "Percentage Increase" is mathematically meaningless. You need a professional ledger.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 10 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Theme: Return Attribution</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Level: Strategic Audit</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif italic mb-16 border-l-4 border-primary pl-8">
                        "Price movements are noise. Compounding is the engine. But if you measure the engine with the wrong ruler, you will crash the car."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Return Trap</h2>
                    <p>
                        Most retail investors check their portfolio and see a "Total Return" of 50%. They assume their wealth has grown at a steady 50% pace. But if that 50% gain took 5 years to achieve, the annual growth is actually around 8.5%. Furthermore, if the investor added ₹1Cr halfway through those 5 years, the "Total Return" percentage becomes completely misleading.
                    </p>
                    <p>
                        For a sophisticated HNI, understanding <strong>CAGR</strong> (Compound Annual Growth Rate) and <strong>XIRR</strong> (Extended Internal Rate of Return) is the difference between a real strategy and a feeling of success. This guide deconstructs these metrics for large-scale capital management.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept 1: CAGR – The Point-to-Point Ruler</h2>
                    <p>
                        CAGR is the smoothed annual growth rate of an investment over a specific period of time. It assumes you invested a lump sum at the start and withdrew it at the end.
                    </p>
                    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-center">
                        CAGR = [(Ending Value / Beginning Value) ^ (1 / Number of Years)] - 1
                    </div>
                    <p>
                        <strong>When to use CAGR:</strong> Evaluating the long-term performance of a specific stock, a PMS strategy, or a sectoral index where you aren't considering your own cash flows.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept 2: XIRR – The Cash Flow Reality</h2>
                    <p>
                        Unlike CAGR, <strong>XIRR</strong> accounts for the timing and size of every single cash inflow and outflow. It is the "Internal Rate of Return" for non-periodic cash flows.
                    </p>
                    <p>
                        <strong>Why XIRR matters for HNIs:</strong> As a professional, you likely have bonuses, dividends, property sales, and quarterly taxes flowing in and out of your brokerage account. If you invest ₹50L in January and another ₹50L in June when the market is at a peak, your final year-end return will be lower than the market's CAGR. <strong>XIRR shows you the actual efficiency of your deployment timing.</strong>
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Calendar className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Timing Alpha</h4>
                            <p className="text-base text-slate-600">By comparing your portfolio XIRR to the market CAGR, we can measure the "Timing Alpha"whether your entries and exits added value or cost you wealth.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Tax planning</h4>
                            <p className="text-base text-slate-600">Sophisticated investors calculate "Post-Tax XIRR." A strategy with 18% CAGR but 30% tax leakage might be worse than a 15% CAGR strategy with 10% tax leakage.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Identifying Deceptive Gains</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The Bonus Deployment Trap
                            </h3>
                            <p>You invest ₹50L in 2020. By 2023, it's ₹1Cr. You see a 100% gain! <br />But wait, you added another ₹40L in late 2022. <br />First-order look: "I doubled my money." <br />Professional look (XIRR): Your actual annualized return is only 8% because you deployed most of the capital right before a market consolidation. Your wealth grew, but your efficiency was low.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary text-xl">Institutional Benchmark</span>
                            </h3>
                            <p className="text-slate-300">At Tiger Assets, we utilize <strong>Time-Weighted Rate of Return (TWRR)</strong> and XIRR to audit our <strong>SRE Tiger PMS</strong> performance. We want to ensure that our stock selection (CAGR) and our deployment strategy (XIRR) are both beating the benchmark significantly.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Mistaking Absolute Return for Success:</strong> Saying "I made ₹10 Lakhs" without mentioning that it took ₹2Cr to make it and 3 years to wait for it. ₹10L on ₹2Cr is a failing grade (5% absolute).</li>
                        <li><strong>Ignoring the Denominator:</strong> Not accounting for dividends and interest. A professional XIRR must include every rupee the portfolio generated, otherwise you are underestimating your wealth.</li>
                        <li><strong>Comparing Portfolio XIRR to Index CAGR:</strong> This is apples vs. oranges. You must compare your XIRR to what the Index XIRR would have been with the *same* cash flow timings.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        A wealth manager's first duty is to be an accurate record-keeper. At Tiger Assets, our client dashboards provide real-time XIRR calculations. We help you move past the "portfolio feeling" and toward <strong>quantified wealth management</strong>. If your current advisor only shows you "Total Gains," they are hiding the true efficiency of your capital.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < BarChart className="text-primary" />
                            Return Measurement Audit
                        </h3>
                        <ul className="space-y-6 text-slate-800">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="font-medium">Can your current dashboard show XIRR across all your bank and brokerage accounts?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="font-medium">What is your <strong>Net-to-Bank XIRR</strong> after all taxes and advisory fees?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="font-medium">Is your 5-year CAGR beating the <strong>S&P BSE 500</strong> by more than 3%?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Which is higher: CAGR or XIRR?</h4>
                            <p className="text-slate-600">Neither is inherently higher. If you add capital during a market bottom, your XIRR will be significantly higher than the market CAGR. If you add during a peak, your XIRR will lag. This shows your skill as a capital allocator.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is CAGR useful for short-term portfolios?</h4>
                            <p className="text-slate-600">No. For any period less than 12 months, "annualized" returns can be wildly misleading (e.g., 5% in a month is 80% CAGR). CAGR should only be used for multi-year horizons.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Measure with precision. Compound with depth.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Learn how we utilize institutional-grade reporting to track the real-world performance of our HNI portfolios.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/framework">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-dark transition-all">Our Strategic Framework</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Consult a Wealth Strategist</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
