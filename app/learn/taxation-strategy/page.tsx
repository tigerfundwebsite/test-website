import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Receipt, Landmark, Scale, Percent, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tax-Efficient Compounding: Strategy for India's ₹1Cr+ Portfolios",
    description: "Master the art of post-tax yield. A sophisticated guide to LTCG optimization, dividend taxation, and tax-loss harvesting for the HNI investor in India.",
};

export default function TaxationGuide() {
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
                        The <span className="text-primary">Taxation</span> Alpha: <br />
                        Maximizing Post-Tax Yield
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Gross returns are for egos; Net returns are for wealth. For a ₹1Cr+ portfolio, tax efficiency is often the largest single contributor to Alpha.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 13 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Focus: Portfolio Optimization</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: ₹1Cr - ₹5Cr Mandates</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "It’s not what you earn, it’s what you keep."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Invisible Friction</h2>
                    <p>
                        In the Indian HNI landscape, taxation is the "silent friction" that slows down the compounding engine. While most investors obsess over stock picking, few understand that a poorly timed exit or a lack of tax-loss harvesting can drag down a portfolio's CAGR by 2-3%. Over a decade, this difference represents the gap between a comfortable retirement and a generational legacy.
                    </p>
                    <p>
                        This guide explores the strategic application of tax-efficient allocation for portfolios exceeding ₹1 Crore, where institutional-level structuring becomes mandatory.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Understanding Post-Tax Alpha</h2>
                    <p>
                        Post-Tax Alpha is the additional return generated merely by being smarter about when and how you realize gains. In India, the distinction between Short-Term Capital Gains (STCG) and Long-Term Capital Gains (LTCG) is a primary lever for the sophisticated investor.
                    </p>
                    <div className="my-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Key Tax Levers in India:</h4>
                        <ul className="space-y-4">
                            <li><strong>LTCG Optimization:</strong> Holding equity for 12+ months to qualify for the 10% tax rate (on gains over ₹1L) vs. the 15% STCG rate.</li>
                            <li><strong>Tax-Loss Harvesting:</strong> Strategically selling underwater positions before the end of the financial year to offset realized gains.</li>
                            <li><strong>Dividend Taxation:</strong> Moving from dividend-heavy portfolios to growth-oriented ones to avoid the high inclusive tax rate on dividends for high-income earners.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's HNIs</h2>
                    <p>
                        For an investor in the 30% tax bracket (plus surcharge), professional tax management isn't just a legal requirementit's a performance driver.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Receipt className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Deferred Liability</h4>
                            <p className="text-base text-slate-600">Every rupee not paid in taxes today is a rupee that stays in the portfolio to compound for tomorrow. We call this "interest-free leverage" from the government.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Scale className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Structure Selection</h4>
                            <p className="text-base text-slate-600">The choice between a direct equity portfolio, a PMS, and an AIF has massive tax implications regarding pass-through status and gain realization.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: High-Value Scenarios</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The ₹1Cr Portfolio Realignment
                            </h3>
                            <p>Utilizing the ₹1L annual LTCG exemption by "resetting" the cost basis of long-term holdings. This involves selling and immediately re-buying core holdings to "lock in" profits at the 10% threshold annually.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary">Scenario:</span> The ₹5Cr+ Estate Structuring
                            </h3>
                            <p className="text-slate-300">At this level, we introduce <strong>Family Trusts</strong> and <strong>Holding Companies</strong>. This allows for the segregation of tax liabilities and the efficient transmission of wealth to the next generation without triggering high-impact liquidation events.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Chasing Dividend Yield:</strong> HNIs often mistakenly buy dividend-paying stocks for "income," ignoring that dividends are now taxed at the marginal rate, making them highly inefficient compared to capital gains for large portfolios.</li>
                        <li><strong>Missing the Harvesting Window:</strong> Waiting until March 31st to check for tax losses. Institutional managers monitor harvesting opportunities <i>year-round</i> as part of trade execution.</li>
                        <li><strong>Ignoring the 12-Month Rule:</strong> Selling a stock at month 11.5 for a quick gain, triggering 15% STCG when a two-week wait would have dropped the tax cost to 10%.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, tax considerations are baked into our <strong>Tiger Framework</strong>. We don't just ask if a stock is a buy; we ask how it fits into your overall tax-asset-allocation map. For our PMS clients, we provide detailed tax-ready reporting that simplifies the filing process while ensuring every opportunity for harvesting has been exploited.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Landmark className="text-primary" />
                            Post-Tax Optimization Checklist
                        </h3>
                        <ul className="space-y-4 text-slate-800">
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <strong>Consolidate accounts</strong> to view unified tax liability.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <strong>Audit dividend exposure</strong> and shift towards growth where necessary.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <strong>Execute annual LTCG resetting</strong> through cost-basis management.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <strong>Review PMS vs Direct Equity</strong> for structural tax efficiency.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is Tax-Loss Harvesting legal under Indian Tax Laws?</h4>
                            <p className="text-slate-600">Yes, it is a standard portfolio management practice. It involves realizing actual losses to offset actual gains. However, "wash sales" (selling for a loss and buying back) should be done with careful adherence to the economic substance of the trade.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How does a PMS help with taxation?</h4>
                            <p className="text-slate-600">A PMS manager executes harvesting and optimization at the portfolio level, ensuring you don't have to manually track holding periods and realized gains throughout the year.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Optimize your net worth, not just your returns.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Get a professional audit of your portfolio's tax efficiency and learn how we could improve your post-tax CAGR.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/disclosures/pms-disclosure">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all text-sm uppercase tracking-widest px-10">Read Disclosures</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Consult our Strategists</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
