import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, Target, ShieldCheck, Search, TrendingUp, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Circle of Competence: The Discipline of Saying No in Portfolio Strategy",
    description: "Master the art of high-conviction investing by staying within your edge. A strategic guide for ₹50L+ investors on the 'Circle of Competence' mental model.",
};

export default function CircleOfCompetenceGuide() {
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
                        <span className="text-primary italic">Circle of Competence</span>: <br />
                        The Edge of Say-No
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        It’s not how big the circle is, but how well you define the perimeter. In high-stakes capital allocation, staying inside your edge is the only way to avoid catastrophic errors.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 9 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Theme: Risk Perimeter</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Level: High-Conviction Strategy</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif italic mb-16 border-l-4 border-primary pl-8">
                        "I’m no genius. I’m smart in spotsand I stay around those spots."  Tom Watson Sr. (founding CEO of IBM)
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Omniscience Illusion</h2>
                    <p>
                        The most dangerous moment for an HNI investor is during a bull market when they feel they understand *everything*. They start with a core portfolio of banks and FMCGs, but soon find themselves dabbling in complex biotech startups, obscure crypto-assets, or niche commodity derivatives. This "Style Drift" is the primary reason why many portfolios fail to beat the index over 10 years.
                    </p>
                    <p>
                        The <strong>Circle of Competence</strong> is a mental model used by the world's most successful capital allocators (Warren Buffett, Charlie Munger) to filter opportunities. It suggests that you only invest in businesses where you have a structural understanding of the economics, the competition, and the management.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Defining the Boundary</h2>
                    <p>
                        Your circle is built on your career, your personal interests, and your deep research. For a doctor, the circle might include healthcare and diagnostics. For a manufacturer, it might include supply chain logistics and industrial chemicals.
                    </p>
                    <p>
                        There are three distinct zones in every investor's universe:
                    </p>
                    <ol>
                        <li><strong>The Inner Circle:</strong> Businesses you understand so well you can predict their earnings trajectory with 80% confidence.</li>
                        <li><strong>The Watch List:</strong> Businesses you find interesting but have not yet mastered.</li>
                        <li><strong>The "Too Hard" Pile:</strong> Everything else. This pile should be the largest.</li>
                    </ol>
                    <p>
                        Alpha is not found in knowing more things; it’s found in <strong>operating closer to your boundary</strong> than your competitors.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">High Conviction Betting</h4>
                            <p className="text-base text-slate-600">When we identify a theme that sits in our 'Inner Circle' (like Indian SME manufacturing), we can allocate with size. Conviction requires competence.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            < Search className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Error Reduction</h4>
                            <p className="text-base text-slate-600">Most investment mistakes happen when you wander into someone else's circle of competence. Staying inside yours is the best defensive move.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Filtering the Noise</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The FOMO of the "Next Big App"
                            </h3>
                            <p>You hear about a disruptive new food-delivery app. You use it, you like it, but you don't understand the unit economics of hyper-local logistics. <strong>Decision:</strong> Place it in the "Too Hard" Pile. Admitting ignorance is a superpower in wealth management.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary">Scenario:</span> The Institutional Specialist
                            </h3>
                            <p className="text-slate-300">At our firm, we don't try to be experts in everything. Our <strong>SRE Tiger PMS</strong> focuses on a specific circle: high-growth Indian industrials and consumer hegemonies. By deepening our circle, we generate higher Alpha than a generalist fund.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Mistaking Use for Understanding:</strong> Thinking that because you use an iPhone, you understand Apple's global supply chain and semiconductor moat. Brand familiarity is not competence.</li>
                        <li><strong>The Guru Fallacy:</strong> Copying the "Small-Cap picks" of a famous investor without understanding their circle. Their edge might not be yours.</li>
                        <li><strong>Expanding the Circle too Fast:</strong> Feeling pressured by a bull market to "find new ideas." It is better to have 10 great ideas you understand than 50 you don't.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        A professional advisor's job is to <strong>act as the perimeter guard</strong> for your circle of competence. We help you identify when you are drifting into emotional bets or fad-based allocations. Our proprietary <strong>TIGER Framework</strong> is the tool we use to verify if a stock sits within our institutional circle of competence before it enters any client portfolio.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < TrendingUp className="text-primary" />
                            Finding Your Circle
                        </h3>
                        <ul className="space-y-4 text-slate-800">
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Which industry would you bet your own <strong>retirement</strong> on with ZERO outside advice?
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Can you explain the <strong>unit economics</strong> of the business to a 12-year-old?
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="text-primary shrink-0" size={20} />
                                Do you know the <strong>real replacement cost</strong> of the company's assets?
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Can a circle of competence be expanded?</h4>
                            <p className="text-slate-600">Yes, it must be, but through years of deep study, not a weekend of reading blogs. Expansion requires deliberate practice and observation across cycles.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">What if my circle is very narrow?</h4>
                            <p className="text-slate-600">A narrow circle is fine as long as you have the discipline to wait for opportunities that fall within it. Concentration in your edge is better than diversification in your ignorance.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Leverage an institutional-grade circle.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Learn more about our specialized SME and PMS strategies that stay focused on India's industrial renaissance.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sme-advisory">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">SME Advisory Strategy</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">How We Build High-Conviction</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
