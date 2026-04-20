import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, RefreshCw, ShieldCheck, Target, TrendingUp, HelpCircle, Layers } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "First Principles Allocation: Rebuilding Your Portfolio From the Ground Up",
    description: "Break through industry cliches and retail bias. A high-authority guide for ₹1Cr+ investors on building a portfolio based on fundamental truths.",
};

export default function FirstPrinciplesGuide() {
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
                        <span className="text-primary">First Principles</span> <br />
                        Wealth Allocation
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Stop copying what "every other HNI" is doing. Strip investment logic down to its fundamental truths and rebuild your portfolio for absolute resilience.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 11 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Methodology: Structural Rebuild</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: ₹1Cr+ Strategic Design</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "First principles is a physics way of looking at the world. You boil things down to the most fundamental truths and reason up from there."  Elon Musk
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Benchmarking Trap</h2>
                    <p>
                        Most HNI portfolios in India are built by <strong>analogy</strong>. An investor looks at what their peers are doing, what the most popular mutual funds are holding, or what the 60/40 allocation model suggests. This leads to "closet indexing"where you pay high fees for a portfolio that essentially mimics the index, including all its inefficiencies and risks.
                    </p>
                    <p>
                        <strong>First Principles Allocation</strong> is the antidote. It ignores industry cliches and traditional asset categories. Instead, it asks: "What is a business?", "What is the true source of return?", and "What are the irreducible risks?". Reasoning from these truths allows us to build portfolios that are truly unique and structurally superior.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Boiling Down the Truth</h2>
                    <p>
                        A first-principles approach to wealth starts with three irreducible facts:
                    </p>
                    <ol>
                        <li><strong>Value is the present value of future cash flows.</strong> Everything else (PE multiples, charts, news) is just noise. If a company cannot generate cash, its valuation is speculative.</li>
                        <li><strong>Risk is the probability of permanent capital loss.</strong> Volatility is just price fluctuationit is only a risk if you are forced to sell.</li>
                        <li><strong>Wealth is a function of Net CAGR.</strong> Gross returns mean nothing if fees and taxes destroy the compounding engine.</li>
                    </ol>
                    <p>
                        When you rebuild from these truths, you realize that many "conservative" investments are actually risky, and many "volatile" investments are actually safe.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Layers className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Unbiased Asset Selection</h4>
                            <p className="text-base text-slate-600">We don't buy "Real Estate" or "Equity" because they are categories. We buy specific assets that exhibit high ROIC and durable moats, regardless of their label.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Customized Risk Design</h4>
                            <p className="text-base text-slate-600">By understanding your specific "survival needs," we build a portfolio from first principles that ensures you never reach your "Point of Ruin."</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: The Rebuild Process</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                Stage 1: The Liquidation Audit
                            </h3>
                            <p>Assume your entire portfolio is converted to cash today. Now, with a clean slate, would you buy back every single stock or fund you currently own? If the answer is "no" for any asset, that asset is a legacy of inertia, not strategy. Sell it.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-950 text-white border-none">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                Stage 2: The Cash Flow Yield Filter
                            </h3>
                            <p className="text-slate-300">Evaluate every holding not on its "potential price gain," but on its <strong>Cash Flow Yield</strong>. If the business were to stop growing today, how much cash would it return to you? This is the floor of your return. Rebuild your core around high-floor assets.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Social Proofing:</strong> Investing in what is "socially acceptable" for an HNI. In first principles, the popular path is often the most dangerous because it is the most crowded.</li>
                        <li><strong>Confusing Complexity with Depth:</strong> Thinking that a portfolio with 50 stocks, 10 MFs, and 3 AIFs is "sophisticated." Real depth is having 10-15 high-conviction positions that you understand from first principles.</li>
                        <li><strong>Ignoring the "Why":</strong> Investing because an asset class "did well last decade." Past performance is an analogy; fundamental cash flow is a first principle.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we utilize <strong>First Principles Design</strong> in our <strong>SME Advisory</strong>. We don't look at the SME sector as "risky" because of its label. We look at the underlying unit economics of the specific manufacturer. If they have a 30% ROIC and a 10-year supply lock-in, they are structurally safer than many "Large Cap" utilities with high debt and zero growth.
                    </p>
                    <p>
                        We help you move from <strong>analogy-based investing</strong> to <strong>truth-based allocation</strong>.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <RefreshCw className="text-primary" />
                            First Principles Checklist
                        </h3>
                        <ul className="space-y-4 text-slate-800">
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Does this asset generate <strong>positive free cash flow</strong>?
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                If the market closed for 10 years, would I still want to own this business?
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Is my reason for holding derived from <strong>data</strong> or from a <strong>consensus opinion</strong>?
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is first-principles thinking too slow for current market speeds?</h4>
                            <p className="text-slate-600">It is slower to build, but it lasts much longer. While "fast" analogy-based portfolios crumble during a regime change, a first-principles portfolio is designed for the fundamental physics of money, which never change.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Can I apply this to my fixed-income portfolio too?</h4>
                            <p className="text-slate-600">Absolutely. Strip away the "safety" label and look at the credit-default probability and the <strong>Inflation-Adjusted Real Yield</strong>. Often, you'll find that "safe" debt is a first-principle destroyer of purchasing power.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Master the physics of wealth.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Stop following the crowd and start building a portfolio that stands on fundamental truth. Consult our wealth strategists for a first-principles audit.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/framework">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">The TIGER Framework</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">Request a Portfolio Audit</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
