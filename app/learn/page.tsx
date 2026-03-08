"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InvestmentKnowledgeCenter() {
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
                            <span className="text-primary italic">Wealth Creation</span>
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
                                {['Beginner Guides', 'Mental Models', 'Myths vs Reality', 'Financial Glossary'].map((item, i) => (
                                    <button key={item} className={`text-left px-4 py-3 rounded-xl font-bold transition-all ${i === 0 ? 'bg-orange-50 text-orange-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Understanding Compounding", desc: "Why time in the market beats timing the market, mathematically proven.", icon: "function" },
                                { title: "The China+1 Thesis", desc: "A beginner's guide to the tectonic shift in global manufacturing.", icon: "public" },
                                { title: "Valuation Basics", desc: "PE, PB, and EV/EBITDA explained for the non-finance professional.", icon: "calculate" },
                                { title: "Risk vs Volatility", desc: "Why price fluctuations are not the same as permanent capital loss.", icon: "balance" }
                            ].map((guide, i) => (
                                <Link href="#" key={i}>
                                    <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all h-full flex flex-col cursor-pointer">
                                        <div className="size-12 bg-slate-50 group-hover:bg-orange-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors mb-6">
                                            <span className="material-symbols-outlined">{guide.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{guide.title}</h3>
                                        <p className="text-slate-600 font-medium leading-relaxed">{guide.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
