import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Layers, ShieldCheck, Target, TrendingUp, HelpCircle, Search } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Over-Diversification: The Hidden Anchor on Your Wealth",
    description: "Why owning 50+ stocks is a recipe for mediocrity. A high-authority guide for ₹50L+ investors on building a concentrated, high-conviction portfolio.",
};

export default function OverDiversificationGuide() {
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
                        <span className="text-primary">Di-worsification</span>: <br />
                        The Cost of Safety
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Conventional wisdom says diversification is a free lunch. But in professional wealth management, over-diversification is the tax you pay for lack of conviction.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 11 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Topic: Portfolio Construction</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Level: Professional Grade</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Diversification is protection against ignorance. It makes little sense if you know what you are doing."  Warren Buffett
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The 1% Problem</h2>
                    <p>
                        The "Average HNI Portfolio" in India often consists of 40-60 stocks, 10 mutual funds, and various other fragmented assets. Each position represents 1-2% of the overall wealth. While this feels "safe," it is mathematically impossible for such a portfolio to significantly beat the market. Even if one of your 1% positions grows 10x (a "multibagger"), your overall portfolio only grows by 9%.
                    </p>
                    <p>
                        This is the trap of <strong>Over-Diversification</strong>. It ensures you never have a major loss, but it also ensures you never build serious wealth. For an investor with ₹50L+, the priority should be <strong>Concentrated Excellence</strong>—identifying the few best ideas and backing them with size. This guide explains why "less is more" in high-net-worth wealth management.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: The Law of Diminishing Returns</h2>
                    <p>
                        Statistically, once you own more than 15-20 stocks across different sectors, the volatility-reduction benefit of adding more stocks drops to near zero.
                    </p>
                    <div className="my-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                        <h4 className="text-xl font-bold text-slate-900 mb-4">The Portfolio Frontier:</h4>
                        <ul className="space-y-4">
                            <li><strong>1-5 Stocks:</strong> Extreme Risk (Concentration Danger).</li>
                            <li><strong>10-20 Stocks:</strong> The Strategic Sweet Spot. High enough for diversification, low enough for conviction.</li>
                            <li><strong>30+ Stocks:</strong> Closet Indexing. You are paying high fees for average returns.</li>
                        </ul>
                    </div>
                    <p>
                        In a large portfolio, every addition should have to "compete" for its place. If a new idea isn't better than your current top 10, it shouldn't be in your portfolio.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">High Conviction Multiplier</h4>
                            <p className="text-base text-slate-600">When your best idea is 10% of your portfolio and it doubles, your wealth grows by 10%. This is how real Alpha is captured.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Search className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Focused Due Diligence</h4>
                            <p className="text-base text-slate-600">It is impossible for a human or even a small team to deeply track 50 companies. Tracking 15 ensures you are never surprised by governance or macro shifts.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Cleaning the Clutter</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The Portfolio Audit
                            </h3>
                            <p>Look at your tail-end holdings. Most HNIs have 10-15 stocks they "forgot" they owned, each worth less than 0.5% of their net worth. <strong>Action:</strong> Sell all sub-1% positions. They add operational headache and zero return potential.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary text-xl">The Tiger Way</span>
                            </h3>
                            <p className="text-slate-300">Our <strong>SRE Tiger PMS</strong> mandates typically hold 15-20 stocks. We believe that if we have done our <strong>Tiger Framework</strong> research correctly, we don't need the "crutch" of 50 stocks to hide our mistakes.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Mistaking Asset Classes for Diversification:</strong> Owning 20 different mutual funds that all invest in the same 50 stocks. This is "Hidden Over-Diversification."</li>
                        <li><strong>The "Safety" Sentiment:</strong> Believing that "more is safer." Beyond 20 stocks, you aren't reducing risk; you are just increasing mediocrity.</li>
                        <li><strong>Sentiment over Strategy:</strong> Holding on to a stock because it was a 'gift' or a legacy holding. In a professional portfolio, every rupee must justify its presence.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        A wealth manager's job is to <strong>provide the conviction to stay concentrated</strong>. We act as the emotional buffer when one of your 8% positions is volatile. Retail investors sell during volatility; institutional investors use volatility to increase their conviction. Our role is to ensure your capital is continuously recycled into the <strong>Top 5% of opportunities</strong> in the Indian market.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Layers className="text-primary" />
                            Concentration Audit Checklist
                        </h3>
                        <ul className="space-y-6 text-slate-800">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span>Do your <strong>top 10 holdings</strong> constitute at least 60% of your equity portfolio? (If not, you are over-diversified).</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span>Are more than 5 of your mutual funds investing in the <strong>same top 20 Nifty stocks</strong>?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span>Can you state the <strong>top 3 risks</strong> for each of your top 10 positions? (If you can't, you don't have conviction).</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Isn't a concentrated portfolio more volatile?</h4>
                            <p className="text-slate-600">Yes, it can be. But volatility is the price you pay for outperformance. If your time horizon is &gt;5 years, temporary volatility in a high-quality concentrated portfolio is irrelevant to your final wealth outcome.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How do I narrow down from 50 stocks to 15?</h4>
                            <p className="text-slate-600">Force rank your holdings based on ROIC and Management Quality. Sell the bottom 30 and deploy that capital into the top 10. This process, while emotionally difficult, is the most powerful wealth-building move you can make.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Focus your capital. Amplify your results.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore our high-conviction PMS mandates designed to identify and back 15-20 of India's strongest wealth creators.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Explore SRE Tiger PMS</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">How We Filter Quality</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
