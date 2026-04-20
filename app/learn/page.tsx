"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ['Beginner Guides', 'Mental Models', 'Myths vs Reality', 'Financial Glossary'];

const articles = {
    'Beginner Guides': [
        { title: "Understanding Compounding", slug: "understanding-compounding", desc: "Why time in the market beats timing the market, mathematically proven.", icon: "function" },
        { title: "The China+1 Thesis", slug: "china-plus-one-thesis", desc: "A beginner's guide to the tectonic shift in global manufacturing.", icon: "public" },
        { title: "Valuation Basics", slug: "valuation-basics", desc: "PE, PB, and EV/EBITDA explained for the non-finance professional.", icon: "calculate" },
        { title: "Risk vs Volatility", slug: "risk-vs-volatility", desc: "Why price fluctuations are not the same as permanent capital loss.", icon: "balance" },
        { title: "Taxation Strategy", slug: "taxation-strategy", desc: "Optimizing for post-tax CAGR through institutional structuring.", icon: "receipt" },
        { title: "Sectoral Hegemonies", slug: "sectoral-hegemonies", desc: "Identifying and investing in companies with untouchable monopoly moats.", icon: "trophy" }
    ],
    'Mental Models': [
        { title: "Skin in the Game", slug: "skin-in-the-game", desc: "Why we prioritize promoter alignment and our own capital commitments.", icon: "verified_user" },
        { title: "Mental Model: Inversion", slug: "mental-model-inversion", desc: "Avoiding capital destruction by planning for what could go wrong first.", icon: "autorenew" },
        { title: "The Lindy Effect", slug: "lindy-effect-wealth", desc: "Why time-tested business models are more reliable than new-age tech.", icon: "hourglass_empty" },
        { title: "Circle of Competence", slug: "circle-of-competence", desc: "The discipline of saying no to opportunities outside our core expertise.", icon: "adjust" },
        { title: "Second-Order Thinking", slug: "second-order-thinking", desc: "Predicting the consequences of macro shifts beyond the immediate reaction.", icon: "psychology" },
        { title: "First Principles Allocation", slug: "first-principles-allocation", desc: "Rebuilding your portfolio logic from the ground up, not just copying peers.", icon: "rebase_edit" }
    ],
    'Myths vs Reality': [
        { title: "The SIP Myth", slug: "sip-vs-strategic-entry", desc: "Why periodic investing isn't always optimal for high-net-worth professionals.", icon: "history_toggle_off" },
        { title: "The Debt Safety Myth", slug: "debt-safety-myth", desc: "Uncovering the hidden credit and liquidity risks in retail debt funds.", icon: "gpp_maybe" },
        { title: "Indexing vs Active Alpha", slug: "indexing-vs-active-alpha", desc: "Why India's inefficient markets still reward deep on-ground research.", icon: "trending_up" },
        { title: "Over-Diversification", slug: "over-diversification-risk", desc: "How owning too many stocks dilutes your returns to average levels.", icon: "layers_clear" },
        { title: "Gold as a Hedge", slug: "gold-vs-equity-hedge", desc: "A comparative reality check on gold vs equity as a multi-decade inflation hedge.", icon: "toll" },
        { title: "Small-Cap 'Gambling'", slug: "small-cap-volatility-reality", desc: "Distinguishing high-risk bets from high-growth emerging mid-cap leaders.", icon: "rocket_launch" }
    ],
    'Financial Glossary': [
        { title: "Sharpe Ratio & Beta", slug: "sharpe-ratio-beta-explained", desc: "A professional's guide to measuring risk-adjusted performance properly.", icon: "query_stats" },
        { title: "Professional Valuation", slug: "professional-valuation-metrics", desc: "Beyond P/E: Understanding EV/EBITDA and Free Cash Flow Yields.", icon: "finance_mode" },
        { title: "CAGR vs XIRR", slug: "cagr-vs-xirr-comparison", desc: "Deciphering your actual returns in complex, multi-asset portfolios.", icon: "account_balance_wallet" },
        { title: "Turnover Ratio Costs", slug: "turnover-ratio-costs", desc: "The invisible friction of high-activity trading on your long-term wealth.", icon: "receipt_long" },
        { title: "Net-to-Investor Yield", slug: "net-to-investor-yield-explained", desc: "Calculating the structural costs of PMS, AIF, and Mutual Fund vehicles.", icon: "payments" },
        { title: "Asset-Liability Matching", slug: "asset-liability-matching-strategy", desc: "Aligning your liquidity needs with your portfolio's investment horizon.", icon: "calendar_month" }
    ]
};

export default function InvestmentKnowledgeCenter() {
    const [activeCategory, setActiveCategory] = useState('Beginner Guides');

    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-32 md:pt-48 pb-20 bg-accent-cream border-b border-orange-100/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100/40 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200 mb-6 inline-block"
                        >
                            Knowledge Center
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight"
                        >
                            Mastering the Art of <br />
                            <span className="text-primary font-serif">Wealth Creation</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
                        >
                            Learn the fundamental principles, mental models, and strategies we use to build enduring wealth over decades.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Curriculum</h3>
                            <div className="flex flex-col gap-2">
                                {categories.map((item) => (
                                    <button 
                                        key={item} 
                                        onClick={() => setActiveCategory(item)}
                                        className={`text-left px-4 py-3 rounded-xl font-bold transition-all ${activeCategory === item ? 'bg-orange-50 text-orange-700 shadow-sm border border-orange-100' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9">
                        <div className="grid sm:grid-cols-2 gap-6 items-stretch">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={activeCategory}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid sm:grid-cols-2 gap-6 col-span-2 w-full"
                                >
                                    {articles[activeCategory as keyof typeof articles].map((guide, i) => (
                                        <Link href={`/learn/${guide.slug}`} key={guide.slug}>
                                            <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all h-full flex flex-col cursor-pointer hover:-translate-y-1">
                                                <div className="size-12 bg-slate-50 group-hover:bg-orange-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors mb-6">
                                                    <span className="material-symbols-outlined">{guide.icon}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{guide.title}</h3>
                                                <p className="text-slate-600 font-medium leading-relaxed text-sm">{guide.desc}</p>
                                                <div className="mt-auto pt-6 flex items-center text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">
                                                    Read Article <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
