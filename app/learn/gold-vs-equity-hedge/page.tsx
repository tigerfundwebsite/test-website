import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Coins, ShieldCheck, Target, TrendingUp, HelpCircle, BarChart2 } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gold vs. Equity: A Multi-Decade Reality Check for HNIs",
  description: "Explore the real performance of gold as an inflation hedge. A high-authority guide for ₹50L+ investors on asset allocation for wealth preservation.",
};

export default function GoldHedgeGuide() {
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
                        <span className="text-primary">Gold</span> vs. Equity: <br />
                        The Alchemy of Hedging
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        In many Indian households, gold is the "ultimate" insurance. But for an HNI managing a multi-decade compounding engine, is gold a protector or a drag?
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 12 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Focus: Asset Allocation</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: Preservation vs. Growth</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Gold is a great way to preserve wealth, but a poor way to create it. Equity is a poor way to preserve wealth, but the greatest way to create it."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Emotional Anchor</h2>
                    <p>
                        For generations of Indian investors, gold has been the primary hedge against inflation, political instability, and currency devaluation. It is the "physical" asset that provides psychological comfort when equity markets are volatile. However, for a sophisticated HNI with a ₹50L+ portfolio, the role of gold needs to be quantified, not just felt.
                    </p>
                    <p>
                        Does gold truly hedge inflation? Does it provide a meaningful non-correlation to equities? Or is it a "dead asset" that drains your long-term CAGR? This guide provides a multi-decade reality check on the alchemy of hedging.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: The Zero-Yield Conundrum</h2>
                    <p>
                        The fundamental difference between gold and equity is <strong>Productivity</strong>. Equity is a claim on the future earnings of a productive business. Gold is a metal that sits in a vault. It does not innovate, it does not pay dividends, and it does not hire employees. It only has value because others believe it has value (the "Greater Fool" theory applied to a millennia-old store of value).
                    </p>
                    <div className="my-12 overflow-hidden rounded-3xl border border-slate-200">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 font-bold text-slate-900">Feature</th>
                                    <th className="px-6 py-4 font-bold text-slate-700">Gold</th>
                                    <th className="px-6 py-4 font-bold text-primary">Equity (Companies)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Compounding</td>
                                    <td className="px-6 py-4 text-slate-600">Purely Price-Based</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium font-serif text-lg decoration-primary underline decoration-2 underline-offset-4">Earnings Multiplier</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Inflation Hedge</td>
                                    <td className="px-6 py-4 text-slate-600">Yes (Historically)</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium">Yes (Superior via Pricing Power)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Correlation to USD</td>
                                    <td className="px-6 py-4 text-slate-600">Low/Negative</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium">Neutral (in India)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < ShieldCheck className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">The "Crisis" Correlation</h4>
                            <p className="text-base text-slate-600">Historically, during global systemic crises (like 2008 or 2020), gold has exhibited low correlation to equities, providing a small buffer during a crash. However, an 80% equity / 20% gold portfolio still crashes when the 80% does.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < BarChart2 className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">The Taxation Friction</h4>
                            <p className="text-base text-slate-600">In India, physical gold and gold ETFs are taxed at the marginal rate (if held &lt;3 years) or 20% with indexation. Sovereign Gold Bonds (SGBs) have massive tax advantages that every HNI must consider.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Strategic Sizing</h2>
                    
                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The 10% Insurance Mandate
                            </h3>
                            <p>For a ₹5Cr portfolio, we often recommend a maximum of 5-10% in gold, preferably through **Sovereign Gold Bonds (SGBs)**. This provides the hedge without the "storage costs" and with an additional 2.5% annual interest. Any more than 10% starts to significantly drag down the overall CAGR.</p>
                        </div>
                        
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary text-xl">The Real Hedge: Pricing Power</span>
                            </h3>
                            <p className="text-slate-300">If you want to hedge inflation, the better asset is not gold; it is **High-Moat Equity**. A company like a dominant paint maker or a bank has the "Pricing Power" to raise prices along with inflation, effectively protecting your purchasing power <i>while</i> generating profit growth. Gold cannot do this.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Physical vs. Digital:</strong> Still holding a major portion of wealth in jewelry. Physical gold has "making charges," storage risks, and lower purity transparency. For wealth management, digital/sovereign is the only professional choice.</li>
                        <li><strong>Chasing the "End of the World":</strong> Buying gold because they fear a total collapse of the financial system. In a total collapse, food and water are the currency, not bars of yellow metal. Diversification into global equities is a better systemic hedge.</li>
                        <li><strong>Ignoring the 10-Year Flat Periods:</strong> Gold can stay flat for a decade (as it did between 2011 and 2019). If your portfolio is too heavy in gold, you lose the "Time Value" of your compounding years.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we treat gold as the **"Psychological Insurance."** We understand that it helps our clients sleep better during an equity winter. However, we guide you to treat it as a **cost of insurance**, not a source of alpha. Our focus remains on the SRE Tiger PMS and SME Advisory, where we find the real wealth creators that will outperform both inflation and gold over the long arc of compounding.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                            <Coins className="text-primary" />
                        <ul className="space-y-4 text-slate-800">
                           <li className="flex gap-3">
                               <ArrowRight className="text-primary shrink-0" size={20} />
                               Is your total gold exposure more than <strong>15% of your net worth</strong>? (If yes, you are over-hedged).
                           </li>
                           <li className="flex gap-3">
                               <ArrowRight className="text-primary shrink-0" size={20} />
                               Are you utilizing <strong>Sovereign Gold Bonds</strong> to capture the 2.5% yield and tax exemption?
                           </li>
                           <li className="flex gap-3">
                               <ArrowRight className="text-primary shrink-0" size={20} />
                               Are you using gold as a tactical trade or a passive store of value? (Tactical trading in gold requires high macro expertise).
                           </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Does gold hedge a falling Rupee?</h4>
                            <p className="text-slate-600">Yes. Since gold is globally priced in USD, a depreciation of the Indian Rupee automatically increases the local price of gold. It is an effective hedge for currency risk.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Should I use Gold as a collateral for investing?</h4>
                            <p className="text-slate-600">Generally, no. Leveraging a non-productive asset to buy a productive one (like equity) increases your systemic risk. We prefer liquid, debt-free portfolios.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Preserve the principal. Compound the growth.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Learn how we integrate asset-allocation strategies to protect your hard-earned wealth while staying focused on high-conviction growth themes.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/framework">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Our Strategic Framework</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Consult our Strategists</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
