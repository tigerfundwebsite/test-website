import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, TrendingDown, ShieldCheck, Target, Calculator, HelpCircle, Landmark } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Net-to-Investor Yield: The Real Math of HNI Wealth",
    description: "Why top-line returns are deceptive. A professional's guide to calculating profit after fees, taxes, and inflation for ₹50L+ mandates.",
};

export default function NetToInvestorGuide() {
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
                        <span className="text-primary">Net-to-Investor</span> Yield: <br />
                        Actual Wealth Growth
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        Gross returns are vanity; Net returns are sanity; Post-Tax returns are wealth. Learn how to calculate the only metric that actually determines your future purchasing power.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 11 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Concept: Net Real Returns</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Target: Post-Tax Optimization</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "Your bank doesn't care about your Gross CAGR. It cares about how many rupees you can actually withdraw after the taxman and the fund manager have taken their share."
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The 15% Fallacy</h2>
                    <p>
                        Many Indian HNIs see a portfolio return of 15% and feel satisfied. However, if they are in the 30% tax bracket, and their wealth manager charges 2.5% in fees (TER + Performance), their "Take-Home" return might be closer to 9%. If inflation is 6%, their real wealth is only growing at 3%.
                    </p>
                    <p>
                        This is the <strong>Net-to-Investor Yield</strong> gap. For high-net-worth mandates (₹50L - ₹5Cr+), managing the "leakages" is just as important as generating the "gains." This guide provides the professional math required to calculate your true wealth progression.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: The Waterfall of Erosion</h2>
                    <p>
                        Starting with your <strong>Gross Portfolio Return</strong>, several layers of "taxation" (both literal and metaphorical) occur before the money reaches your pocket:
                    </p>
                    <ol>
                        <li><strong>Gross Return (e.g., 18%):</strong> The raw appreciation of your assets.</li>
                        <li><strong>Advisory/Management Fees (e.g., -2%):</strong> Wealth management fees, brokerage, and TER.</li>
                        <li><strong>Transaction Leakage (Slippage):</strong> The hidden cost of trading (Impact cost).</li>
                        <li><strong>Tax realization (LTCG/STCG):</strong> The tax paid on booked profits.</li>
                        <li><strong>Inflation (The Silent Tax):</strong> The loss of purchasing power over time.</li>
                    </ol>
                    <p>
                        The remaining number is your <strong>Real Net-to-Investor Yield</strong>.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Calculator className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Efficiency Auditing</h4>
                            <p className="text-base text-slate-600">We audit the "Efficiency Ratio" of your current advisor. If they are generating 15% but charging 4% total (fees + turnover taxes), they are inefficient capital allocators.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Landmark className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Tax-Aware Structuring</h4>
                            <p className="text-base text-slate-600">Sophisticated investors use structures (like long-term equity mandates or tax-harvesting in PMS) to ensure that more of the return stays in the "Investor" column.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: The Comparison Test</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> Mutual Fund A vs. Private PMS B
                            </h3>
                            <p><strong>MF A:</strong> Gross 16%, Expense Ratio 1.2%, STCG/LTCG realization based on fund churn. <br /><strong>PMS B:</strong> Gross 18%, Fees 2.5%, Active Tax Harvesting. <br /><strong>Reality Check:</strong> While PMS B has higher fees, if its tax harvesting saves 2% in annual tax realization, its <strong>Net-to-Investor Yield</strong> is significantly higher than MF A.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary text-xl">The Real Goal: &gt; 5% Net Real Wealth</span>
                            </h3>
                            <p className="text-slate-300">Sustainable wealth creation (true compounding) only happens when your Net-to-Investor Yield exceeds inflation by at least 5%. For India, this means aiming for a <strong>Net-to-Bank XIRR of 12-14%</strong>. This is our primary benchmark at Tiger Assets.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Chasing Gross Returns:</strong> Investing in a high-yield instrument without checking the post-tax math. A 10% debt instrument taxed at 30% is effectively 7%less than some tax-free bonds.</li>
                        <li><strong>Ignoring the Frequency of Taxation:</strong> Not realizing that every "profit booking" reset the compounding clock and paid a chunk to the government. <strong>Deferred Tax is a zero-interest loan from the Govt.</strong></li>
                        <li><strong>Mental Accounting:</strong> Treating "fees" as separate from "returns." Fees are a direct subtraction from your future lifestyle and legacy. They must be scrutinized.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we utilize <strong>Tax-Loss Harvesting</strong> and <strong>Long-Term Orientation</strong> to maximize your Net-to-Investor Yield. We don't hide our fees; we justify them by identifying the 2-4% of extra Alpha that covers the costs and still leaves you with a superior net outcome. Our focus is on the <strong>bottom line of your bank statement</strong>, not just the top line of a presentation.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < TrendingDown className="text-primary" />
                            Wealth Efficiency Audit
                        </h3>
                        <ul className="space-y-6 text-slate-800">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="font-medium">What is your "Total Expense Ratio" (TER) plus advisory fees combined?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="font-medium">Do you practice <strong>Tax-Loss Harvesting</strong> every March to offset gains?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="font-medium">What is your actual <strong>XIRR since inception</strong> after all taxes have been paid?</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Is high performance worth high fees?</h4>
                            <p className="text-slate-600">Yes, but only if the "Net" result is better. If a manager charges 3% and gives you 18% (Net 15%), they are better than a manager who charges 0.5% and gives you 12% (Net 11.5%). Math, not emotion, should guide the choice.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Does holding for &gt;1 year significantly help Net Yield?</h4>
                            <p className="text-slate-600">In India, the move from STCG (15%) to LTCG (10%) is a massive 33% reduction in your tax bill. This is one of the easiest ways to boost your Net-to-Investor yield without taking any extra market risk.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Focus on the net. Build the legacy.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore our tax-efficient SRE Tiger PMS mandates and learn how we optimize every layer of your wealth for maximum take-home growth.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">SRE Tiger PMS Strategy</button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all font-serif">Request a Tax-Efficiency Audit</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
