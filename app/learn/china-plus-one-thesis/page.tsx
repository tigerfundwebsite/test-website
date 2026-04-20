import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Globe, Factory, BarChart3, ShieldCheck, HelpCircle, Lightbulb } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "China+1 Strategy: Macro Allocation for India's ₹1Cr+ Portfolios",
    description: "Explore the tectonic shift in global manufacturing. A deep dive into the China+1 thesis and how to position your portfolio for India's industrial renaissance.",
};

export default function ChinaPlusOneGuide() {
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
                        The <span className="text-primary">China+1</span> Paradigm: <br />
                        India's Industrial Renaissance
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Global supply chains are decoupling. For the sophisticated investor, this represents the most significant macro-economic opportunity of the decade.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 15 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Theme: Institutional Macro</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: ₹1Cr+ Strategic Allocation</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "The world's manufacturing blueprint is being redrawn. India is no longer an alternative; it is the necessity."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Decoupling of Global Supply</h2>
                    <p>
                        For three decades, China was the undisputed "Factory of the World." However, a combination of rising labor costs, geopolitical friction, and the fragility exposed by the COVID-19 pandemic has forced global conglomerates to seek a "China+1" strategy. This isn't just about moving factories; it's about the fundamental re-allocation of global capital and manufacturing IP.
                    </p>
                    <p>
                        For investors with a ₹1Cr+ portfolio, the China+1 thesis is not a speculative trade. It is a structural megatrend that requires a long-term, high-conviction allocation. This guide dissects the strategic importance of this shift and how sophisticated investors should position their capital.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: The China+1 Mechanism</h2>
                    <p>
                        The "Plus One" in China+1 signifies <strong>Resilience Through Diversification</strong>. Companies like Apple, Samsung, and Tesla are not leaving China entirely, but they are ensuring that their next growth phase happens elsewhere. India, with its corporate tax reforms, the PLI (Production Linked Incentive) scheme, and a burgeoning workforce, has emerged as the primary beneficiary.
                    </p>
                    <p>
                        Sophisticated investors look beyond the factory floors. The opportunity lies in the <strong>entire ecosystem</strong>: Chemicals, Electronics, Auto-Ancillaries, and Industrial Logistics.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Factory className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Import Substitution</h4>
                            <p className="text-base text-slate-600">Companies that are replacing Chinese imports with domestic manufacturing possess a "defensive growth" moat. They benefit from government incentives and domestic demand protection.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Globe className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Export Orientation</h4>
                            <p className="text-base text-slate-600">The true alpha lies in Indian firms becoming global suppliers to MNCs. This provides dollarindexed revenue and institutional-grade scale.</p>
                        </div>
                    </div>
                    <p>
                        In a large portfolio, the China+1 allocation serves as a "Structural Growth" engine. While consumer tech and credit are cyclical, the industrialization of India is a decade-long play that is relatively uncorrelated to short-term interest rate movements.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Allocation Logic</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">₹50L</span>
                                The Sectoral Focus
                            </h3>
                            <p>Identify the "Top 3" sectors benefiting from PLIElectronics, Chemicals, and Renewables. Allocate 20% of your growth capital to the leadership names in these spaces.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-orange-50/30">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">₹1Cr+</span>
                                The Value Chain Integration
                            </h3>
                            <p>Move beyond the primary manufacturers. Invest in the "Enablers"the logistics giants, infrastructure developers, and component manufacturers who sit 2-3 layers deep in the supply chain. These often trade at lower PE multiples than the final product makers.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Chasing the Label:</strong> Investing in any company that mentions "China+1" in an earnings call. Real winners must have the <i>capacity</i> and <i>capex</i> to absorb global orders.</li>
                        <li><strong>Underestimating Capex Lags:</strong> Manufacturing wealth is built in years, not quarters. Expecting immediate quarterly spikes from a long-term supply chain shift is a retail mistake.</li>
                        <li><strong>Ignoring Global Volatility:</strong> A global recession could delay China+1 shifts. Investors must focus on companies with strong enough domestic demand to bridge the gap.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we utilize our <strong>SME Advisory</strong> and <strong>SRE Tiger PMS</strong> to capture the China+1 theme at different levels. While the PMS identifies the large-cap structural winners, our SME Advisory focuses on the hidden gemsthe niche component manufacturers who are getting fresh contracts from global OEMs.
                    </p>
                    <p>
                        The key to a macro thesis like this is <strong>selection, not just participation</strong>.
                    </p>

                    <div className="bg-slate-900 p-10 rounded-[40px] text-white my-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            < Lightbulb className="text-primary" />
                            Strategic Takeaways
                        </h3>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <span className="font-bold text-white underline decoration-primary/30 text-lg">Focus on the PLI Multiplier.</span> Incentives create a floor for earnings.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <span className="font-bold text-white underline decoration-primary/30 text-lg">Capacity is King.</span> Only companies with active Capex are true China+1 plays.
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <span className="font-bold text-white underline decoration-primary/30 text-lg">Look for Specialized Chemicals.</span> This sector has the highest "Plus One" inertia.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is China+1 a sustainable trend or a short-lived fad?</h4>
                            <p className="text-slate-600">It is structural. The diversification of supply chains is now a board-level mandate for almost every Fortune 500 company to mitigate geopolitical risk.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Which sectors are the most "China-vulnerable" for India?</h4>
                            <p className="text-slate-600">While Electronics and Pharma APIs are winning, Textile and Footwear still face significant competition on labor costs. We prefer technology-intensive manufacturing.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-orange-50 rounded-3xl border border-orange-100 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Position your capital for the industrial shift.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore our SME Advisory deals focused on niche manufacturers or discuss macro-allocation with our strategists.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sme-advisory">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">Explore SME Advisory</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">Our Strategic Framework</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
