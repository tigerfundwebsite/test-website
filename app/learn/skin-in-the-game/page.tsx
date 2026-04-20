import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Verified, ShieldCheck, Target, TrendingUp, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Skin in the Game: Why Alignment Matters for ₹1Cr+ Portfolios",
    description: "Promoter alignment and fiduciary commitment are the ultimate heuristics for risk management. A strategic guide for HNI investors on the power of Skin in the Game.",
};

export default function SkinInTheGameGuide() {
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
                        Skin in the <span className="text-primary">Game</span>: <br />
                        The Ultimate Heuristic
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Don't tell me what you think; show me what’s in your portfolio. For sophisticated investors, alignment of interest is the only true risk management.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 12 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Mental Model: Alignment</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: Institutional Due Diligence</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Never trust anyone who doesn't have skin in the game. Without it, the downside is yours, and the upside is theirs."  Nassim Taleb
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Ethical Asymmetry</h2>
                    <p>
                        In the financial services industry, advice is cheap because the consequences of being wrong are rarely shared by the advisor. This is the "Agency Problem." For an investor with ₹1Cr+, the most dangerous risk is not market volatilityit is being advised by individuals who collect fees regardless of your outcome.
                    </p>
                    <p>
                        "Skin in the Game" (SITG) is the mental model that solves this asymmetry. It demands that the decision-maker shares in the downside. At Tiger Assets, SITG is not just a philosophy; it is a mandatory requirement for our portfolio managers and the companies we invest in.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Alignment as a Filter</h2>
                    <p>
                        When a founder owns 60% of their company, their life’s work and net worth are tied to your success as a shareholder. They are less likely to over-leverage the balance sheet or chase vanity acquisitions. Contrast this with a professional CEO who has a 2-year contract and massive stock options that vest regardless of long-term survival.
                    </p>
                    <p>
                        SITG is the ultimate filter for:
                    </p>
                    <ol>
                        <li><strong>Governance:</strong> High skin in the game drastically reduces the probability of accounting fraud or related-party transactions.</li>
                        <li><strong>Resilience:</strong> Founders with significant ownership are often more willing to sacrifice short-term earnings for long-term compounding.</li>
                        <li><strong>Risk Appetite:</strong> SITG ensures that risk-taking is calculated, not reckless.</li>
                    </ol>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Verified className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Promoter Alignment</h4>
                            <p className="text-base text-slate-600">We prioritize 'Promoter-Led' companies where the family interests align with minority shareholders. This 'Owner-Operator' mindset is the strongest predictor of multi-decade outperformance.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < ShieldCheck className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Fiduciary Co-Investment</h4>
                            <p className="text-base text-slate-600">The most important question an HNI should ask their PMS manager is: "How much of your own money is in the same stocks you are recommending to me?"</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Due Diligence Scenarios</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario 1:</span> Evaluation of a New SME Listing
                            </h3>
                            <p>Before looking at the P&L, look at the lock-in period of the promoters. An IPO where promoters are offloading 40% of their stake is a red flag. An IPO where promoters are barely selling and the capital is going into Capex is a signal of confidence.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary">Scenario 2:</span> Choosing a Wealth Advisory Firm
                            </h3>
                            <p className="text-slate-300">Move beyond the pitch deck. Ask for the firm's balance sheet investment details. A firm that is 100% "fee-only" with no capital at risk in their own recommended ideas is providing "Skin in the game" for the fees, not the results.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Forcing Performance:</strong> Believing that a lack of SITG can be fixed with "better contracts." It can't. Internal motivation beats external incentives every time.</li>
                        <li><strong>Ignoring the "Downside Share":</strong> Only looking at how much an advisor earns in a boom. The real test of SITG is how much they lose with you in a bust.</li>
                        <li><strong>Chasing 'Professional' Management:</strong> Underestimating the "Founder's Mentality." While systems are important, the emotional ownership of a promoter is irreplaceable in India’s high-friction economy.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we implement SITG at the structural level. Our principals' capital is deployed alongside our clients. When we say a sectoral theme like "China+1 Electronics" is a 5-year play, we aren't just giving a recommendationwe are executing on our own holdings. This alignment removes the "Short-Termism" that plagues retail-centric advisory firms.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Target className="text-primary" />
                            The Alignment Checklist
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-slate-800">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <strong>Promoter Holding:</strong> Prefer companies with &gt;50% holding and low pledge.
                            </li>
                            <li className="flex gap-3 text-slate-800">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <strong>Remuneration Structure:</strong> Is the CEO's bonus linked to ROIC or just stock price?
                            </li>
                            <li className="flex gap-3 text-slate-800">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                <strong>Manager Co-Investment:</strong> Demand to see the "Skin" your advisor has in the game.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is high promoter holding always a good thing?</h4>
                            <p className="text-slate-600">Usually yes, but it must be paired with good governance. A promoter with 70% holding who uses the company as a personal piggy bank is the ultimate risk. We focus on the *quality* of the skin in the game.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How do I verify if an advisor has skin in the game?</h4>
                            <p className="text-slate-600">Ask for a disclosure of their direct holdings or their firm's proprietary book. In a PMS, this information is often available in the Disclosure Document under the "Related Party Transactions" or specialized disclosures.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Invest with a partner, not an agent.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore how our investment principals align their capital with yours through the SRE Tiger PMS mandates.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">Explore SRE Tiger PMS</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">Schedule a Consultation</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
