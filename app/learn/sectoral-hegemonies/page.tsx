import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, ShieldCheck, Trophy, Target, TrendingUp, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sectoral Hegemonies: Identifying Monopoly Moats in India",
    description: "How to identify companies with untouchable pricing power and high entry barriers. A strategic guide for HNI investors seeking generational wealth.",
};

export default function HegemonyGuide() {
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
                        Sectoral <span className="text-primary">Hegemonies</span>: <br />
                        Investing in Untouchable Moats
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        In a hyper-competitive economy, the highest alpha is found in companies that simply cannot be replaced. We call these Sectoral Hegemonies.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 12 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Strategy: Core Compounding</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: Generational Wealth</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Your premium is my opportunity."  Jeff Bezos
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Monopoly Advantage</h2>
                    <p>
                        Capitalism is a war of attrition. Most companies spend their entire lives fighting for a 1% improvement in margin or a tiny increase in market share. However, a rare subset of businessesSectoral Hegemoniesoperates with such dominant pricing power and structural barriers that they effectively become "tax collectors" for their respective industries.
                    </p>
                    <p>
                        For an HNI managing a ₹50L+ portfolio, identifying these hegemonies is the ultimate shortcut to generational wealth. These aren't just market leaders; they are companies with "moats" so deep that they can withstand incompetent management, adverse economic cycles, and technological disruptions.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Anatomizing the Moat</h2>
                    <p>
                        A true hegemony is built on four distinct structural pillars:
                    </p>
                    <ol>
                        <li><strong>High Switching Costs:</strong> When it is too painful for a customer to move to a competitor (e.g., core banking software or specialized technical services).</li>
                        <li><strong>Network Effects:</strong> The "more users, more value" loop (e.g., payment gateways or exchange platforms).</li>
                        <li><strong>Intangible Assets:</strong> Brands that have become nouns or patents that grant a legal monopoly.</li>
                        <li><strong>Cost Advantages:</strong> Scale or access to unique resources that competitors simply cannot match.</li>
                    </ol>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for ₹50L+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Trophy className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Sustainable Returns</h4>
                            <p className="text-base text-slate-600">Hegemonies don't just grow; they protect the growth. Their High ROIC is sustainable over decades, not just seasons.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < ShieldCheck className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Inflation Hedge</h4>
                            <p className="text-base text-slate-600">Because they have pricing power, these firms can pass on raw material inflation to customers effortlessly, protecting your real returns.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Identifying India's Hegemons</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                The Master of Distribution
                            </h3>
                            <p>Look at India's largest FMCG or Paint companies. They haven't won because of a better "product" alone, but because of a massive, unreachable distribution network that touches every village in Bharat. That is a structural hegemony.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                The Digital Toll-Gates
                            </h3>
                            <p>As India digitizes, look for the companies that provide the "Plumbing." These are the back-end platforms for registries, digital KYC, and exchange connectivity. They aren't in the limelight, but every bit of the digital economy passes through their toll-gates.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Confusing Size with Dominance:</strong> A huge company without pricing power is just a large utility. Real hegemony is about <i>profit</i> share, not just market share.</li>
                        <li><strong>Ignoring the "Disruption" Fuse:</strong> Every hegemony has a fuse. If a company's moat is purely technological, the fuse is short. If it's based on physical networks or regulatory licenses, the fuse is long.</li>
                        <li><strong>Refusing to Pay Up:</strong> Hegemonies rarely trade at "cheap" valuations. Professional investors understand that a 30x PE for a monopoly is often cheaper than a 10x PE for a commodity business.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, identifying hegemonies is the "Core" of our <strong>Core & Satellite</strong> strategy. We believe that 60-70% of a long-term HNI portfolio should be anchored in these "Unstoppable Businesses." Our research focuses recursively on one question: <i>"If this company decided to double its price tomorrow, would its customers leave?"</i>
                    </p>
                    <p>
                        If the answer is "No," we've found a Hegemony.
                    </p>

                    <div className="bg-slate-900 p-10 rounded-[40px] text-white my-16">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                            < Target className="text-primary" />
                            The Hegemony Scan
                        </h3>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Does the company have <strong>Pricing Power</strong>?
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Is the <strong>ROIC consistently above 20%</strong> for 5+ years?
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Are there significant <strong>Entry Barriers</strong> (Licenses, Scale, or Branding)?
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Can a small-cap company be a hegemony?</h4>
                            <p className="text-slate-600">Typically, hegemonies are large-cap, as dominance requires scale. However, niche hegemonies exist in the SME spacecompanies that dominate a tiny but critical link in a massive global supply chain.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How do regulators affect hegemonies?</h4>
                            <p className="text-slate-600">Regulatory risk is the primary "Anti-Hegemony" force. We closely monitor antitrust sentiments in India, although the current policy environment is generally supportive of large-scale industrial leaders.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-white rounded-3xl border border-slate-200 text-center relative shadow-2xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Invest in winners, not just participants.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Discover the Sectoral Hegemonies we are currently backing in the SRE Tiger PMS.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all">Explore SRE Tiger PMS</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-slate-100 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all">How We Value Moats</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
