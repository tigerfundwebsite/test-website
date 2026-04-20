import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, ShieldAlert, BarChart, Scale, Activity, HelpCircle, UserCheck } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Risk vs. Volatility: Strategy for HNI Portfolio Protection",
    description: "Master the distinction between price fluctuations and permanent capital loss. Institutional-grade risk management for India's ₹50L+ investors.",
};

export default function RiskVolatilityGuide() {
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
                        Risk vs. <span className="text-primary">Volatility</span>: <br />
                        The Art of Portfolio Survival
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Volatility is a feature of the market; Risk is a failure of the strategy. Distinguishing between the two is the hallmark of the professional investor.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 11 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Topic: Behavioral Discipline</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Target: Equity Mandates</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Volatility is merely the price you pay for admission to the greatest wealth-building machine in history."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Emotional Cost of Compounding</h2>
                    <p>
                        For most retail investors, any downward movement in a stock's price is categorized as "risk." This misunderstanding often leads to forced exits at the exact moment global institutional capital is "buying the dip." As an HNI managing a ₹50L+ portfolio, your primary defensive asset is not your diversificationit is your <strong>emotional temperament</strong>.
                    </p>
                    <p>
                        Real risk is the permanent impairment of capital. Volatility, on the other hand, is the temporary fluctuation of market prices. This guide explores how to build a portfolio that thrives on volatility while strictly insulating itself from catastrophic risk.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Defining the Enemy</h2>
                    <p>
                        In academic finance (Modern Portfolio Theory), risk is often defined as <strong>Standard Deviation</strong>—essentially, how much a price bounces around. For a wealth strategist, this definition is dangerously incomplete.
                    </p>
                    <div className="my-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 font-bold text-slate-900">Measure</th>
                                    <th className="px-6 py-4 font-bold text-slate-900">Volatility</th>
                                    <th className="px-6 py-4 font-bold text-slate-900">Risk</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Nature</td>
                                    <td className="px-6 py-4 text-slate-600">Temporary price movements</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium">Permanent capital loss</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Indicator</td>
                                    <td className="px-6 py-4 text-slate-600">Stock price charts / BETA</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium">Governance issues / Tech obsolescence</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Outcome</td>
                                    <td className="px-6 py-4 text-slate-600">An opportunity to buy cheaper</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium">Irreversible asset destruction</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹50L+ Portfolios</h2>
                    <p>
                        The Indian equity market is inherently volatile due to global FII (Foreign Institutional Investor) flows and domestic news cycles. For a large portfolio, this volatility can be psychologically draining. However, if your allocation logic is sound, volatility is actually <strong>the engine of long-term outperformance</strong>.
                    </p>
                    <p>
                        Risk management at our firm focuses on:
                    </p>
                    <ul>
                        <li><strong>Concentration Risk:</strong> Ensuring no single position exceeds 10-15% of the portfolio.</li>
                        <li><strong>Governance Risk:</strong> Eliminating firms with "promoter pledge" issues or complex related-party transactions.</li>
                        <li><strong>Survival Risk:</strong> Ensuring the company has a low Debt-to-Equity ratio to survive a "black swan" event.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Managing the Drawdown</h2>

                    <div className="space-y-12 my-12">
                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <ShieldAlert className="text-red-500" />
                                The 50/100 Rule
                            </h3>
                            <p className="text-slate-800 font-medium">Understand that a 50% loss requires a 100% gain to recover. This is the math of survival. At ₹50L+, the priority is to avoid the "Fat Tail" risks that cause deep absolute losses.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                Standard Portfolio Variance
                            </h3>
                            <p>An equity portfolio should expect two 10% corrections every year and one 20% correction every three years. If you cannot tolerate this "price of admission," your equity allocation is likely too high for your psychological risk capacity.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Selling into Panic:</strong> Treating a 10% market correction as a fundamental failure of the company. If the business is earning more money than last year, the price drop is an opportunity, not a warning.</li>
                        <li><strong>Lack of High Watermark:</strong> Not tracking the "all-time high" of their portfolio and feeling a "loss" every time it dips. This is a behavioral bias known as anchoring.</li>
                        <li><strong>Diversifying for the sake of it:</strong> Adding weak stocks to a strong portfolio to "reduce risk." In reality, this only reduces the quality of your compounding engine.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we manage risk through <strong>active monitoring of the business, not the ticker</strong>. We utilize our TIGER framework to ensure the fundamental tailwinds are intact. If the earnings visibility remains clear, we ignore the volatility. If the fundamental "risk" (e.g., a CEO change or a new competitor) increases, we exitregardless of whether the market price has moved.
                    </p>
                    <p>
                        We provide our clients with a <strong>Behavioral Buffer</strong>. We are the ones who answer the phone during a crash and explain why the thesis hasn't changed.
                    </p>

                    <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Activity className="text-primary" />
                            The HNI Risk Audit
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="text-slate-800">Is your portfolio concentrated in highly leveraged sectors?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="text-slate-800">Do you have enough liquidity in debt instruments to weather a 6-month equity winter?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="text-slate-800">Are you emotionally prepared for a -15% move in a single quarter?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Does active management reduce volatility?</h4>
                            <p className="text-slate-600">Active management aims to reduce *risk*, not necessarily volatility. In fact, to generate absolute alpha, a portfolio might sometimes have higher volatility than a blue-chip index. The key is the risk-adjusted return (Sharpe Ratio).</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Should I stop investing during a bear market?</h4>
                            <p className="text-slate-600">No. Bear markets are where the highest-conviction compounding begins. If you have the capital and the time horizon, bear markets are the ultimate wealth accelerators.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-950 text-white rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                    <h3 className="text-2xl font-bold mb-4 relative z-10">Protect your compounding engine.</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">Learn how our TIGER Framework mitigates tail risk while capturing high-growth opportunities.</p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <Link href="/framework">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">Our Risk Framework</button>
                        </Link>
                        <Link href="/disclosures/pms-disclosure">
                            <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all text-sm uppercase tracking-widest">Read PMS Disclosures</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
