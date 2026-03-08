"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import TigerFramework from "@/components/TigerFramework";

export default function InvestorJourney() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100">
            {/* Immersive Dark Hero for the Journey */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/30 via-slate-900 to-black z-0"></div>
                <div className="max-w-4xl mx-auto px-4 z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <span className="material-symbols-outlined text-[48px] text-orange-400 opacity-80">explore</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-black text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        The Path to <br /> Institutional Wealth.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto font-medium mb-12"
                    >
                        A methodical, step-by-step unravelling of how we transform market volatility into generational compounding.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="animate-bounce"
                    >
                        <span className="material-symbols-outlined text-orange-500/50 text-3xl">keyboard_arrow_down</span>
                    </motion.div>
                </div>
            </section>

            {/* Stage 1: The Why */}
            <section className="py-32 relative bg-slate-900 z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-orange-400 uppercase mb-4">Stage 01 — Philosophy</h2>
                            <h3 className="text-4xl font-serif font-bold text-white mb-6 leading-tight">Preservation precedes compounding.</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Most investors fail because they seek returns before defining risk. We invert the model. We spend 80% of our time rejecting ideas that pose a permanent loss of capital risk due to poor governance or structural decay.
                            </p>
                            <Link href="/manifesto" className="inline-flex items-center gap-2 text-white font-bold border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors">
                                Read the Manifesto <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-square rounded-full border border-slate-700/50 flex items-center justify-center p-8 bg-gradient-to-tr from-slate-800 to-slate-900/50 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 border-4 border-dashed border-slate-800 animate-[spin_60s_linear_infinite] rounded-full"></div>
                                <span className="material-symbols-outlined text-[100px] text-slate-700">security</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stage 2: Reusing existing Framework component directly in the scroll flow */}
            <div className="bg-white text-slate-900">
                <TigerFramework />
            </div>

            {/* Stage 3: The Call to Action */}
            <section className="py-32 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready to begin your journey?</h2>
                    <p className="text-xl text-orange-950 font-medium mb-12">
                        Get a complimentary portfolio audit. Let us analyze your existing holdings through the lens of institutional risk management.
                    </p>
                    <Link href="/portfolio-review">
                        <button className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl shadow-orange-900/20">
                            Request Portfolio Audit
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
