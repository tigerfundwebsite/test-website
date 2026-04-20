import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronLeft, ArrowRight, BrainCircuit, ShieldCheck, Target, TrendingUp, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Second-Order Thinking: The Professional Edge in Macro Allocation",
    description: "Master the art of thinking ahead. A high-authority guide for ₹50L+ investors on identifying the long-term consequences of market shifts.",
};

export default function SecondOrderThinkingGuide() {
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
                        <span className="text-primary">Second-Order</span> Thinking: <br />
                        Beyond the Immediate
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                        First-order thinking says, "The price of oil is rising, let's sell transport stocks." Second-order thinking says, "Let's find the companies with the pricing power to pass this cost on."
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Reading Time: 13 Mins</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Skill: Strategic Macro</span>
                        <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-orange-100 text-slate-500 text-sm font-bold uppercase tracking-wider">Target: Equity Mandates</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="lead text-2xl text-slate-900 font-serif mb-16 border-l-4 border-primary pl-8">
                        "First-order thinking is simplistic and superficial... second-order thinking is deep, complex, and convoluted."  Howard Marks
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Introduction: The Crowd’s First Step</h2>
                    <p>
                        The stock market is a game of expectations. Most retail investors operate purely at the <strong>first-order level</strong>. They react to news: interest rate hikes mean stocks go down; high earnings mean stocks go up. Because everyone has access to the same news, first-order reactions are already priced into the market the moment they happen.
                    </p>
                    <p>
                        To generate Alpha—returns exceeding the market average—you must move to <strong>Second-Order Thinking</strong>. This is the ability to ask "And then what?" and identify the secondary and tertiary consequences of a change.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Concept Explained: The "And Then What?" Framework</h2>
                    <p>
                        First-order thinkers see consequences. Second-order thinkers see <strong>loops, feedback systems, and delayed effects</strong>.
                    </p>
                    <div className="my-12 overflow-hidden rounded-3xl border border-slate-200">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 font-bold text-slate-900">Event</th>
                                    <th className="px-6 py-4 font-bold text-slate-700">First-Order (Retail)</th>
                                    <th className="px-6 py-4 font-bold text-primary">Second-Order (Institutional)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Govt Increases PLI Scheme for Chemicals</td>
                                    <td className="px-6 py-4 text-slate-600">Buy Chemical Stocks</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium">Which companies have the spare Capex capacity to absorb new global orders *and* the tech IP to replace Chinese imports?</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-800">Rising Interest Rates</td>
                                    <td className="px-6 py-4 text-slate-600">Panic and sell all equity</td>
                                    <td className="px-6 py-4 text-slate-900 font-medium">Which debt-free companies will earn higher interest income on their cash reserves while their competitors struggle?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Strategic Importance for India's ₹1Cr+ Portfolios</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < BrainCircuit className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Identifying Structural Shifts</h4>
                            <p className="text-base text-slate-600">Second-order thinking allows us to separate cyclical "noise" from structural "shifts." While the crowd reacts to quarterly results, we analyze the shifting supply-chain maps of the next decade.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                            < Target className="text-primary mb-4" size={32} />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Unconventional Allocation</h4>
                            <p className="text-base text-slate-600">By predicting the secondary effects of policy or macro changes, we can position your portfolio *before* the market realizes the opportunity. This is where the highest conviction alpha is born.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Practical Application: Looking Ahead</h2>

                    <div className="space-y-12 my-12">
                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <span className="text-primary">Scenario:</span> The Rise of Indian Manufacturing
                            </h3>
                            <p><strong>First Order:</strong> Buy large-cap industrials. <br /><strong>Second Order:</strong> Identify the niche component manufacturers who have 10-year supply contracts with global OEMs. These often have higher margins and lower competitive intensity than the final product makers.</p>
                        </div>

                        <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-slate-900 text-white border-none relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                <span className="text-primary">Scenario:</span> Demographic Shifts & Housing
                            </h3>
                            <p className="text-slate-300"><strong>First Order:</strong> Buy real estate stocks. <br /><strong>Second Order:</strong> Buy the companies that provide the "plumbing" of the housing boompremium faucets, tiles, and electrical wires. These have "consumable" characteristics and better ROE than pure construction plays.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">What sophisticated investors get wrong</h2>
                    <ul className="space-y-4">
                        <li><strong>Paralysis by Analysis:</strong> Trying to think to the "10th order." Usually, by the 3rd order, the complexity makes the prediction unreliable. Focus on the high-probability 2nd order consequences.</li>
                        <li><strong>Ignoring Counter-Moves:</strong> Forgetting that every market shift has an opposing force. If a company raises prices (1st order), competitors might react by dropping theirs (2nd order).</li>
                        <li><strong>Overestimating Execution:</strong> Predicting a great 2nd order outcome but investing in a company with poor management that cannot execute on the shift.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8">Advisor’s Perspective</h2>
                    <p>
                        At Tiger Assets, we don't just consume financial news; we <strong>triangulate consequences</strong>. Our research team utilizes the <strong>TIGER Framework</strong> to map out various second-order scenarios for our portfolio companies. When we present a "High Conviction Opportunity" to our PMS clients, it is always backed by a clear second-order thesis—explaining not just what is happening, but why it will disproportionately benefit specific companies over time.
                    </p>

                    <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 my-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            < Briefcase className="text-primary" />
                            Second-Order Strategy Check
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">1</div>
                                <span className="text-slate-800 font-medium">What is the immediate consensus reaction to this news? (Avoid this).</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                <span className="text-slate-800 font-medium">How will the *competitors* of the winner react in 6 months?</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-white w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center font-bold text-primary shrink-0">3</div>
                                <span className="text-slate-800 font-medium">Who provides the essential 'tools' for this trend to happen? (The Picks and Shovels play).</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-16 mb-8 flex items-center gap-3">
                        <HelpCircle className="text-primary" size={32} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8 divide-y divide-slate-100">
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Does second-order thinking mean I should be a contrarian?</h4>
                            <p className="text-slate-600">Not always. Sometimes the first-order reaction is correct but incomplete. You don't have to be 'wrong' to be 'second-order'; you just have to be 'deeper' than the consensus.</p>
                        </div>
                        <div className="pt-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">How do I start applying this to my portfolio today?</h4>
                            <p className="text-slate-600">Start with your largest holding. List the top three things that could positively impact it next year. Then, write down the secondary effects of those things on the company's suppliers and customers. That’s where the next opportunity lies.</p>
                        </div>
                    </div>
                </div>

                {/* Internal Links CTA */}
                <div className="mt-20 p-12 bg-slate-50 rounded-3xl border border-slate-200 text-center relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Think ahead. Invest with depth.</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Explore how we utilize second-order analysis to identify niche winners in Indian manufacturing and services.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/products/sre-tiger-pms">
                            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all">Detailed PMS Strategy</button>
                        </Link>
                        <Link href="/framework">
                            <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">The TIGER Framework</button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
