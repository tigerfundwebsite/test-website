import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, BarChart3, ShieldCheck, Target, TrendingUp, HelpCircle, Activity } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sharpe Ratio & Beta: Measuring Risk-Adjusted Alpha for HNIs",
    description: "Beyond raw returns. A professional's guide to understanding risk-adjusted performance and volatility in large-scale portfolios.",
};

export default function SharpeRatioGuide() {
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
                        <span className="text-primary">Sharpe & Beta</span>: <br />
                        Quantifying Alpha
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Gross returns are only half the story. To understand if your wealth manager is generating skill or just taking reckless risk, you must master the metrics of risk-adjustment.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 11 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Focus: Performance Attribution</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Level: Institutional Grade</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Risk comes from not knowing what you're doing. Risk-adjustment comes from knowing how you're being paid for it."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Quality of Returns</h2>
                    <p>
                        In a bull market, many investors feel like geniuses. However, for an HNI managing ₹1Cr+ in capital, the <strong>source of the return</strong> is more important than the return itself. Did your portfolio beat the market because your manager identified hidden gems (Alpha), or simply because they took on 2x the market's volatility (Beta)?
                    </p>
                    <p>
                        Two metrics stand at the center of institutional-grade performance attribution: <strong>Sharpe Ratio</strong> and <strong>Beta</strong>. This guide explains how to use these tools to audit your wealth manager and ensure your compounding engine is built on skill, not just luck.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept 1: Beta – The Market Shadow</h2>
                    <p>
                        Beta measures how much your portfolio moves relative to the broader market (e.g., the Nifty 50).
                    </p>
                    <ul>
                        <li><strong>Beta = 1.0:</strong> Your portfolio moves exactly with the market. When the Nifty goes up 10%, you go up 10%.</li>
                        <li><strong>Beta &gt; 1.0:</strong> Your portfolio is "Aggressive." A Beta of 1.5 means you expect to go up 15% when the market goes up 10%, but also fall 15% when the market falls 10%.</li>
                        <li><strong>Beta &lt; 1.0:</strong> Your portfolio is "Defensive." It provides a smoother ride but might lag in a runaway bull market.</li>
                    </ul>
                    <p>
                        For an HNI, the goal is not necessarily a low Beta, but an <strong>Appropriate Beta</strong>—one that aligns with your specific risk capacity and time horizon.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept 2: Sharpe Ratio – The Efficiency Metric</h2>
                    <p>
                        If Beta measures the "size" of the waves, the Sharpe Ratio measures the "efficiency" of your engine. It tells you how much <strong>excess return</strong> you are generating for every unit of volatility you endure.
                    </p>
                    <div className="my-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Interpreting the Sharpe Ratio:</h4>
                        <ul className="space-y-4">
                            <li><strong>&lt; 1.0:</strong> Sub-optimal. You are taking on significant volatility without being compensated with high returns.</li>
                            <li><strong>1.0 to 2.0:</strong> Good. This indicates a professionally managed portfolio where risk is being rewarded.</li>
                            <li><strong>&gt; 2.0:</strong> Exceptional. This level is rare and usually indicates a high-conviction manager with a significant informational edge (Alpha).</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Activity className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Volatility Budgeting</h4>
                            <p className="text-base text-slate-600">We help our clients set a "Volatility Budget." If you cannot tolerate a 15% drawdown, your portfolio's Beta must be managed down, even if it means sacrificing some upside.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Skill Verification</h4>
                            <p className="text-base text-slate-600">A high return with a low Sharpe Ratio is just "Leveraged Beta." We prioritize managers (and our own strategies) that maintain high Sharpe Ratios across market cycles.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Auditing Your Portfolio</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The "Top-Performing" Mid-Cap Fund
                            </h3>
                            <p>You see a fund that grew 40% last year. You check its Beta: it's 1.8. You check its Sharpe: it's 0.8. **Conclusion:** The fund isn't "smart"; it’s just heavily weighted in a volatile sector during a boom. When the cycle reverses, this fund will crash harder than the market.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary text-xl">The Tiger Edge</span>
                            </h3>
                            <p className="text-slate-300">In our <strong>SRE Tiger PMS</strong>, we don't just solve for returns. We solve for <strong>Maximum Risk-Adjusted Alpha</strong>. Our goal is to maintain a Sharpe Ratio above 1.5, ensuring that for every unit of "market stress" you experience, you are being paid an outsized premium in wealth growth.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Ignoring the Risk-Free Rate:</strong> Forgetting that Sharpe is calculated *after* subtracting the risk-free rate (G-Sec yield). If the bank pays 7%, a 10% risky return is only providing 3% of real "Sharpe" yield.</li>
                        <li><strong>Obsessing over Beta in a Crash:</strong> Thinking that a 'Low Beta' portfolio won't fall during a systemic crash. In a crash, correlation often goes to 1.0 (everything falls together). Beta is a long-term average, not a short-term guarantee.</li>
                        <li><strong>Treating Past Metrics as Future Guarantees:</strong> Both Sharpe and Beta are backward-looking indicators. A structural change in a company (like a new debt-heavy factory) can change its Beta overnight.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we provide our clients with a <strong>Performance Attribution Report</strong> that goes beyond the standard NAV updates. We show you exactly how much of your gain came from the market tailwinds (Beta) and how much came from our stock selection (Alpha). Transparency in risk-adjustment is the hallmark of a professional fiduciary.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < BarChart3 className="text-primary" />
                            The Risk Audit Checklist
                        </h3>
                        <ul className="space-y-6 text-slate-800">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="font-medium">What is the 3-year rolling Sharpe Ratio of your largest fund holding?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="font-medium">Is your portfolio Beta aligned with your appetite for a <strong>20% market correction</strong>?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="font-medium">Are you paying 'Performance Fees' on Beta (market movement) or only on Alpha (outperformance)?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is a negative Sharpe Ratio possible?</h4>
                            <p className="text-slate-600">Yes. If your portfolio returns less than the risk-free rate (e.g., you earn 5% while G-Secs are at 7%), your Sharpe is negative. This is a clear signal to rethink your strategy immediately.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Which is more important: Sharpe or Alpha?</h4>
                            <p className="text-slate-600">Alpha measures the amount of outperformance; Sharpe measures the *quality* of that outperformance. A high-net-worth investor should prioritize high quality (Sharpe) to ensure compounding is sustainable.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Master the metrics. Audit the skill.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore how we utilize institutional metrics to optimize your portfolio's risk-return profile. Consult our strategists for a professional attribution audit.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/framework">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Our Strategic Framework</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Request a Risk Audit</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
