"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function InsightsHub() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-32 md:pt-48 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-wave-pattern opacity-30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block"
                    >
                        Research Hub
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Market Insights & Analysis
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Deep dives into sector trends, macroeconomic shifts, and institutional-grade research reports defining the Indian growth story.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Placeholder content cards */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-orange-50 opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-300 text-6xl group-hover:scale-110 transition-transform duration-500">query_stats</span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wide">Sector Report</span>
                                    <span className="text-xs text-slate-400 font-medium">• Q3 2026</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">The Manufacturing Renaissance: China+1 Dynamics</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">An in-depth analysis of capital expenditure cycles and PLI scheme beneficiaries across industrial hubs.</p>
                                <button className="text-primary font-bold text-sm tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all mt-auto w-fit">
                                    Read Analysis <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
