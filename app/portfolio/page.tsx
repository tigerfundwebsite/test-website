"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import InvestmentStats from "@/components/InvestmentStats";

export default function InteractivePortfolio() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-32 md:pt-48 pb-20 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-orange-300 font-bold tracking-wider uppercase text-sm bg-orange-900/30 px-4 py-1.5 rounded-full border border-orange-500/30 mb-4 inline-block"
                    >
                        Active Allocations
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
                    >
                        Portfolio Dashboard
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Interactive breakdown of our live sector allocations, risk metrics, and compounding performance history.
                    </motion.p>
                </div>
            </section>

            {/* Reusing existing InvestmentStats for immediate value, to be upgraded with charts later */}
            <div className="bg-slate-50 py-12">
                <InvestmentStats />
            </div>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Sector Exposure</h2>
                    <p className="text-slate-600 font-medium">Strategic allocations capped against downside risk.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-center items-center h-[400px]">
                        <div className="absolute top-4 left-4 size-12 bg-orange-50 rounded-xl flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">donut_large</span>
                        </div>
                        <p className="text-slate-400 font-medium text-center max-w-xs mt-6">
                            [Interactive Chart Container - D3.js/Chart.js will render live portfolio distribution here]
                        </p>
                    </div>

                    <div className="space-y-6 flex flex-col justify-center">
                        {[
                            { name: "Manufacturing (China+1)", val: 32 },
                            { name: "Energy Transition", val: 28 },
                            { name: "Financialization", val: 20 },
                            { name: "Building Materials", val: 12 },
                            { name: "Cash / Liquid", val: 8 },
                        ].map((sector) => (
                            <div key={sector.name}>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-slate-700">{sector.name}</span>
                                    <span className="text-primary">{sector.val}%</span>
                                </div>
                                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${sector.val}%` }}
                                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-primary rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
