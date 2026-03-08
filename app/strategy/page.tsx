"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function StrategyExplorer() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="relative pt-32 md:pt-48 pb-20 bg-white border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-wave-pattern opacity-30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-6 inline-block"
                    >
                        Interactive Explorer
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Visualizing The Strategy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        Explore our dynamic approach to portfolio construction: balancing Core Compounders with high-conviction Catalyst Plays.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 mb-16 h-[500px] flex flex-col justify-center items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-orange-50/20 z-0"></div>
                    <div className="relative z-10 text-center">
                        <div className="size-20 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-inner">
                            <span className="material-symbols-outlined text-[40px]">architecture</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Interactive Strategy Module</h2>
                        <p className="text-slate-500 font-medium max-w-md mx-auto">
                            [Placeholder for D3.js or Framer Motion interactive diagram showing risk vs reward tiers, correlation matrix, and tactical allocation flows.]
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="size-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center"><span className="material-symbols-outlined">anchor</span></span>
                            Tier 1: Core Stabilizers
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed mb-6">
                            60% allocation. Extremely low beta, robust cash free-flow yields, market leaders. Built to withstand sudden index corrections.
                        </p>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-orange-500 w-[60%] h-full rounded-full"></div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="size-10 rounded-lg bg-orange-50 text-primary flex items-center justify-center"><span className="material-symbols-outlined">rocket_launch</span></span>
                            Tier 2: Alpha Generators
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed mb-6">
                            40% allocation. Special situations, turnaround stories, and high-growth midcaps experiencing structural tailwinds.
                        </p>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary w-[40%] h-full rounded-full"></div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
