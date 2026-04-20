import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, RefreshCw, ShieldAlert, Target, TrendingUp, HelpCircle, AlertTriangle } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Inversion: The Strategic Mental Model for Capital Preservation",
    description: "Learn how to avoid capital destruction by planning for failure. A deep dive into the 'Inversion' mental model for India's ₹50L+ investors.",
};

export default function InversionGuide() {
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
                        The Power of <span className="text-primary">Inversion</span>: <br />
                        Plan for Failure to Succeed
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Instead of asking "How can I make money?", ask "How can I avoid losing it?" Inversion is the cornerstone of institutional-grade capital preservation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 11 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Mental Model: Strategic Thinking</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Tier: ₹50L - ₹5Cr Mandates</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Invert, always invert: Turn a situation or problem upside down. Look at it backward." — Carl Jacobi
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Optimism Trap</h2>
                    <p>
                        Most investors with ₹50L+ portfolio fall into the same trap: they obsess over "Top-Line" growth. They read reports about high-growth sectors, identify the "next big thing," and project double-digit returns into infinity. This forward-looking optimism is the primary cause of capital destruction.
                    </p>
                    <p>
                        Sophisticated wealth management requires <strong>Inversion</strong>. Instead of seeking the path to wealth, you seek the many paths to poverty and avoid them. By eliminating the ways you can fail, you leave behind the few paths to success.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: Turn the Problem Upside Down</h2>
                    <p>
                        Inversion is the practice of thinking about what you <strong>don't</strong> want to happen, and then planning carefully to avoid it.
                    </p>
                    <div className="my-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                        <h4 className="text-xl font-bold text-slate-900 mb-4">The Investor's Inversion Exercise:</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h5 className="font-bold text-slate-700 mb-2 uppercase text-xs tracking-widest">Normal Thinking</h5>
                                <p className="text-sm text-slate-600">"What are the best sectors for India's growth in 2024?"</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">Inversion Thinking</h5>
                                <p className="text-sm text-slate-900 font-medium">"What could happen that would permanently destroy my capital in 2024?"</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        By identifying potential "Kill-Points" (e.g., regulatory shifts, tech obsolescence, or leveraged debt), you build a portfolio that is <strong>antifragile</strong>.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's HNIs</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < ShieldAlert className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Pre-Mortem Analysis</h4>
                            <p className="text-base text-slate-600">Before making a high-conviction bet, we conduct a "Pre-Mortem." We assume the investment has failed two years from now and work backward to understand why. This uncovers hidden risks.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Style Consistency</h4>
                            <p className="text-base text-slate-600">Inversion helps prevent "Style Drift." By defining what we <i>won't</i> invest in, we keep our TIGER framework pure and disciplined.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Identifying Failure Paths</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> Evaluation of a High-Growth Tech IPO
                            </h3>
                            <p><strong>Inversion:</strong> "If this company goes to zero in 5 years, what will be the cause?" (Likely: Burning cash for customer acquisition with no path to profitability). If that failure path exists, the "upside" is irrelevant for a ₹50L+ mandate.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-950 text-white border-none">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary">Scenario:</span> Portfolio Asset Allocation Audit
                            </h3>
                            <p className="text-slate-300"><strong>Inversion:</strong> "How can I guarantee my portfolio loses 30% of its value?" (Answer: By being over-concentrated in one cyclical sector like Real Estate or Metals). Now, you have your diversification mandate defined by the negative, not the positive.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Confirmation Bias:</strong> Only seeking data that supports their "Buy" thesis. Inversion forces you to seek the data that kills your thesis.</li>
                        <li><strong>Ignoring the "Base Rate":</strong> Believing your stock will be the exception to the rule. If most companies in Sector X fail after 5 years, you must invert and ask why <i>yours</i> won't.</li>
                        <li><strong>The "Average" Fallacy:</strong> Relying on average returns while ignoring the risk of a "Total Loss" event. In inversion, we solve for survival first.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, the <strong>"Kill List"</strong> is as important as our "Buy List." We have strict exclusion criteria (e.g., negative free cash flow for 3+ years, high promoter pledge, or poor governance history). By inverting our search, we ensure that every stock in the SRE Tiger PMS has survived a rigorous "path to failure" audit.
                    </p>

                    <div className="bg-red-50 p-10 rounded-[40px] border border-red-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < AlertTriangle className="text-red-500" />
                            The Inversion Audit Questions
                        </h3>
                        <ol className="space-y-4 text-slate-800">
                            <li>What environmental or regulatory change would render this business model obsolete?</li>
                            <li>If my portfolio underperforms by 20% next year, what will be the primary cause?</li>
                            <li>Am I ignoring any "low-probability, high-impact" risks because they are uncomfortable to think about?</li>
                        </ol>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Does inversion make you too pessimistic and cause missed opportunities?</h4>
                            <p className="text-slate-600">It doesn't make you pessimistic; it makes you *robust*. You will miss some "high-risk, high-reward" bubbles, but you will also miss the catastrophic busts that reset the compounding clock.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How often should I "invert" my portfolio?</h4>
                            <p className="text-slate-600">Whenever you feel most confident. Overconfidence is the primary signal that you have stopped looking for the failure paths.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Eliminate the risk; Harvest the Alpha.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Learn how we apply Inversion through our institutional-grade SRE Tiger PMS to protect your capital while riding India's growth themes.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/framework">
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">Our Strategic Framework</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Consult our Principals</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
