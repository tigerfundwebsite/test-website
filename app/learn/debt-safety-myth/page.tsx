import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, ShieldAlert, Gavel, Scale, TrendingDown, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Debt Safety Myth: Uncovering Credit & Liquidity Risks",
  description: "Why fixed-income isn't always 'safe'. A high-authority guide for ₹50L+ investors on identifying hidden risks in Indian debt markets.",
};

export default function DebtSafetyMythGuide() {
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
                        The <span className="text-primary">Debt Safety</span> Myth: <br />
                        Beyond the Yield
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Fixed income is often sold as a "safe haven," but for the uninformed investor, it can be a minefield of credit defaults and liquidity traps.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 14 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Focus: Risk Mitigation</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: ₹50L - ₹5Cr Mandates</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "The quality of a debt instrument is not found in the interest it pays, but in the certainty of the principal it returns."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Yield Illusion</h2>
                    <p>
                        In a market obsessed with "returns," the debt portfolio is often neglected. Retail investors see an NCD (Non-Convertible Debenture) or a Corporate Bond Fund offering 9-10% yield and assume it is a "better fixed deposit." This misunderstanding of <strong>Credit Risk</strong> and <strong>Interest Rate Risk</strong> has led to significant capital destruction in the Indian HNI space over the last decade.
                    </p>
                    <p>
                        Debt is not meant to be a high-growth engine; its primary job in a ₹50L+ portfolio is <strong>Asset-Liability Matching</strong> and <strong>Liquidity Provision</strong>. When you stretch for yield in debt, you are often taking equity-like risks without the equity-like upside. This guide deconstructs the "Safety Myth" of fixed income.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Understanding the Triad of Debt Risk</h2>
                    <p>
                        There are three distinct ways a "safe" debt investment can fail you:
                    </p>
                    <ol>
                        <li><strong>Credit Risk:</strong> The risk that the borrower (company or NBFC) simply cannot pay back the principal. In India, even AA-rated instruments have seen sudden defaults.</li>
                        <li><strong>Duration Risk:</strong> When interest rates rise, the market price of existing long-term bonds falls. If you need to sell before maturity, you will realize a loss on a "fixed" instrument.</li>
                        <li><strong>Liquidity Risk:</strong> The risk that you cannot find a buyer for your corporate bond when you need cash. In high-stress markets, the gap between "Buying" and "Selling" prices (the spread) can widen to 3-5%.</li>
                    </ol>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Gavel className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Purity of Debt</h4>
                            <p className="text-base text-slate-600">We prioritize "Purity" over "Yield." For our HNI clients, we prefer Sovereign (G-Sec) and AAA-rated Public Sector instruments where the credit risk is statistically near zero.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Scale className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Duration Matching</h4>
                            <p className="text-base text-slate-600">A sophisticated portfolio matches the maturity of the debt instrument to the timing of the investor's cash flow needs, eliminating interest rate volatility.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Identifying the Traps</h2>
                    
                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The 10.5% Corporate Bond Offering
                            </h3>
                            <p><strong>Myth:</strong> "It's a top-tier brand, and the yield is 3% higher than a FD." <br /><strong>Reality:</strong> If the risk-free rate is 7% and a company is paying 10.5%, the market is telling you there is a 3.5% probability of a credit event or extreme illiquidity. For an HNI, this 'extra' 3.5% is rarely worth the risk to the 100% of the principal.</p>
                        </div>
                        
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary">Scenario:</span> The Debt Fund Performance Chasing
                            </h3>
                            <p className="text-slate-300">Investors often buy debt funds based on last year's returns. In debt, high past returns usually mean the fund took on **high duration** (benefiting from falling rates) or **low credit quality** (benefiting from higher yields). Neither is a guarantee for the future.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Trusting Ratings Blindly:</strong> Credit ratings are "lagging" indicators. By the time a rating agency downgrades a company from AA to BB, the market price has already crashed. We look at <strong>Interest Coverage Ratios</strong> and <strong>Cash-to-Debt</strong> levels ourselves.</li>
                        <li><strong>Ignoring the "Haircut":</strong> Believing that if a company defaults, they will eventually get their money back. In the Indian insolvency process, "eventual" can mean 5-7 years, with a 60-80% loss (haircut) on the principal.</li>
                        <li><strong>Over-Concentration in Debt:</strong> Putting all "safe" money into one NBFC's bonds. Even if it's a blue-chip name, default is a "fat-tail" event that must be diversified against.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we treat debt as the <strong>defensive perimeter</strong> of your wealth. We advise our clients to keep their debt allocation "boring." If you want excitement and 15% returns, look at our SME Advisory or PMS mandates. If you want safety for your capital, look at our Sovereign and AAA debt recommendations. <strong>Mixing the two is the most common path to portfolio ruin.</strong>
                    </p>

                    <div className="bg-red-50 p-10 rounded-[40px] border border-red-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < ShieldAlert className="text-red-500" />
                            The Debt Risk Audit
                        </h3>
                        <ul className="space-y-6">
                           <li className="flex gap-4 text-slate-800">
                               <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                               <span>Is any single corporate house responsible for more than 15% of your debt portfolio?</span>
                           </li>
                           <li className="flex gap-4 text-slate-800">
                               <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                               <span>What is the <strong>Modified Duration</strong> of your debt holdings? (Are you exposed to interest rate spikes?)</span>
                           </li>
                           <li className="flex gap-4 text-slate-800">
                               <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                               <span>In a crisis, can you liquidate 50% of your debt holdings within 48 hours without a 5% loss in value?</span>
                           </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Are Bank Fixed Deposits (FDs) 100% safe?</h4>
                            <p className="text-slate-600">In India, deposits are insured up to ₹5 Lakhs per bank. For larger amounts, the safety depends on the systemic importance of the bank. We generally recommend large HDFC/ICICI/SBI/Kotak or the use of G-Secs for amounts over ₹1Cr.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Should I use Arbitrage Funds instead of Liquid Funds?</h4>
                            <p className="text-slate-600">Arbitrage funds are taxed like equity (15% STCG / 10% LTCG), making them very attractive for HNIs in the 30%+ tax bracket. However, their returns can fluctuate based on market sentiment. They are an efficiency tool, not a safety tool.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Insulate your capital. Shore up your defenses.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Get a professional credit audit of your debt portfolio and learn how to optimize for safety and tax efficiency through our Fixed Income strategy.</p>
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
