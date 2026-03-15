"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function InvestmentTools() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="relative pt-32 md:pt-48 pb-20 bg-white border-b border-slate-200 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="size-16 bg-orange-50 rounded-2xl mx-auto flex items-center justify-center mb-6 text-primary"
                    >
                        <span className="material-symbols-outlined text-[32px]">calculate</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Analytical Tools
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        Quantify the power of compounding and simulate portfolio trajectories over multi-decade horizons.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "CAGR Calculator", desc: "Calculate the precise compound annual growth rate of your historical investments.", icon: "functions" },
                        // title: "SIP Simulator", desc: "Model the impact of consistent, disciplined capital deployment over long periods.", icon: "history_toggle_off" },
                        { title: "Drawdown Analyzer", desc: "Visualize the time and return required to recover from massive capital loss.", icon: "warning" },
                        { title: "Portfolio Beta", desc: "Estimate the aggregate volatility of multiple holdings versus the benchmark.", icon: "compare_arrows" },
                        { title: "XIRR Calculator", desc: "Compute internal rate of return for portfolios with irregular cash flows.", icon: "calendar_month" },
                        // title: "Retirement Corpus", desc: "Factor in inflation and withdrawal rates to determine target wealth thresholds.", icon: "elderly" }
                    ].map((tool, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between cursor-pointer">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="size-12 bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-primary rounded-xl flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined">{tool.icon}</span>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100">open_in_new</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{tool.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
