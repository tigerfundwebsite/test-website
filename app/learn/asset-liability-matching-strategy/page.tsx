import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Scale, ShieldCheck, Target, TrendingUp, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Asset-Liability Matching: The Structural Secret of Multi-Generational Wealth",
    description: "Why volatility is only a risk if you don't match your assets to your needs. A high-authority guide for ₹1Cr+ investors on building a resilient family office.",
};

export default function AssetLiabilityGuide() {
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
                        <span className="text-primary italic">Asset-Liability</span> Matching: <br />
                        Weaponized Duration
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Real risk is not market volatility; it's the risk of not having cash when you need it. Strategic matching is how Family Offices protect wealth across cycles.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 13 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Theme: Risk Architecture</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Level: Family Office Grade</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif italic mb-16 border-l-4 border-primary pl-8">
                        "Investing without matching your assets to your liabilities is like sailing a ship without knowing when you need to reach land."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Liquidity Panic</h2>
                    <p>
                        Most investment errors happen during a market crash. Why? Because that is usually when an investor realizes they need cash for a down payment, a business expansion, or a family commitment, and their portfolio is down 30%. They are forced to sell at the bottom, turning a paper loss into a permanent capital loss.
                    </p>
                    <p>
                        <strong>Asset-Liability Matching (ALM)</strong> is the institutional framework used by pension funds and family offices to ensure this never happens. It involves mapping out exactly when you need money in the future and choosing assets with "Durations" that match those needs. For an HNI with ₹1Cr+, ALM is the foundation of structural peace of mind.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: The Bucket Strategy</h2>
                    <p>
                        In ALM, we divide your wealth into buckets based on the <strong>Time Horizon of the Liability</strong>:
                    </p>
                    <ol>
                        <li><strong>Short-Term Bucket (0-2 Years):</strong> Tax payments, vacations, emergency fund. <br /><i>Matched Assets:</i> Liquid funds, Arbitrage, Savings.</li>
                        <li><strong>Medium-Term Bucket (3-7 Years):</strong> Child’s higher education, car upgrades, business Capex. <br /><i>Matched Assets:</i> High-grade Debt, Hybrid funds, Blue-chip equity.</li>
                        <li><strong>Long-Term Bucket (&gt;7 Years):</strong> Retirement, estate planning, multi-generational wealth. <br /><i>Matched Assets:</i> High-conviction SME equity, SRE Tiger PMS, Real Estate.</li>
                    </ol>
                    <p>
                        <strong>The Golden Rule:</strong> You never fund a short-term liability with a long-term (volatile) asset.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Scale className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Volatility Immunity</h4>
                            <p className="text-base text-slate-600">When your near-term needs are already covered by safe, liquid assets, you can ignore market crashes. Volatility becomes an opportunity to buy more, not a reason to panic sell.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Briefcase className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Multi-Generational Transition</h4>
                            <p className="text-base text-slate-600">ALM allows us to separate "Personal Needs" from "Legacy Capital." Legacy capital can be invested in much higher-growth themes with much higher variance.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Identifying Mismatches</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The Property Down Payment (₹1Cr)
                            </h3>
                            <p>An HNI plans to buy a second home in 18 months. They keep the ₹1Cr in an Equity Savings fund. <br /><strong>The Risk:</strong> If the market corrects 15% next year, the investor loses ₹15 Lakhs of their principal right when they need to sign the deed. <br /><strong>The Correct ALM:</strong> Move the ₹1Cr into a combination of Liquid and Arbitrage funds. The potential "extra gain" in equity is not worth the risk of missing the property purchase.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary text-xl">Weaponizing Duration</span>
                            </h3>
                            <p className="text-slate-300">At Tiger Assets, we encourage our clients to identify their "Forever Capital"—money they won't need for 10+ years. We match this capital with our <strong>SME Advisory</strong> and <strong>SRE Tiger PMS</strong> strategies. Because the duration is matched, we can stomach 30% volatility in exchange for the 20%+ CAGR potential.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Underestimating "Emotional Liabilities":</strong> Thinking you can handle a crash. Often, the 'liability' is our own fear. ALM provides a mechanical reason to stay the course.</li>
                        <li><strong>Over-Liquidity:</strong> Keeping ₹2Cr in a savings bank "just in case." This is a massive opportunity cost mismatch. Use a "Tiered Liquidity" approach instead.</li>
                        <li><strong>Neglecting Tax Duration:</strong> Not matching the exit time of an asset with the best tax regime (e.g., selling a debt fund after 2.9 years and missing the LTCG benefit by 1 month).</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, our first engagement with a new client is never about "Top Stock Picks." It is an <strong>Asset-Liability Mapping Session</strong>. We build a mathematical model of your future cash needs and then design a portfolio where every rupee has a specific "time-stamp." This structural integrity is what allows our clients to compound wealth with zero stress across decades.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Target className="text-primary" />
                            Liability Matching Audit
                        </h3>
                        <ul className="space-y-6 text-slate-800">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="font-medium">Can you list every major expense (&gt; ₹10 Lakhs) you expect in the next 3 years?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="font-medium">Is the capital for those expenses currently in assets with <strong>less than 5% annual volatility</strong>?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="font-medium">Is at least 40% of your wealth in "Long-Duration" assets that you <strong>will not touch for a decade</strong>?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is ALM the same as diversification?</h4>
                            <p className="text-slate-600">No. Diversification reduces risk across *sectors*; ALM reduces risk across *time*. You can be diversified and still have a major ALM mismatch if all your money is in 20 different equity stocks but you need cash next month.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How often should I update my ALM map?</h4>
                            <p className="text-slate-600">Annually, or whenever a major life event occurs (marriage, business sale, inheritance). Your liabilities change as you age, so your asset duration must follow.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Structure your wealth. Secure your peace.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Get a professional Asset-Liability audit and learn how to align your portfolio with your family's actual timeline for wealth usage.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/framework">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Our Strategic Framework</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Request a Mapping Session</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
