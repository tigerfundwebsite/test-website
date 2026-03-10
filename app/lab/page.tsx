"use client";

import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const FADE_UP: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
            <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="rgb(234,88,12)"
                        strokeWidth={path.width}
                        strokeOpacity={0.03 + path.id * 0.006}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{ pathLength: 1, opacity: [0.3, 0.7, 0.3], pathOffset: [0, 1, 0] }}
                        transition={{ duration: 20 + (path.id % 5) * 4, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </svg>
        </div>
    );
}

export default function ExperimentalLab() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-500/20 overflow-hidden font-sans">
            {/* Minimal Header */}
            <header className="border-b border-slate-100 p-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">biotech</span>
                        <span className="text-sm font-bold text-slate-700">Tiger Assets Lab</span>
                    </div>
                    <span className="text-primary text-xs font-bold border border-orange-100 px-3 py-1 rounded-full bg-orange-50">BETA</span>
                </div>
            </header>

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/30 blur-3xl -z-10"></div>
            </div>

            <section className="relative pt-20 md:pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center justify-center p-4 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 mb-8 relative group"
                    >
                        <div className="absolute inset-0 bg-orange-100 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="material-symbols-outlined text-[40px] text-primary relative z-10">science</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tight text-slate-900"
                    >
                        Experimental Lab
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        Run interactive market event simulations, sandbox portfolio theory, and subject your portfolio to <span className="text-primary font-bold">AI-driven stress testing</span>.
                    </motion.p>
                </div>
            </section>

            <section className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-10">

                    {/* Tool 1 */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col gap-6 relative group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-orange-200"
                    >
                        {/* Background subtle icon */}
                        <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                            <span className="material-symbols-outlined text-[240px] text-primary">psychology</span>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                                    <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary border border-orange-100">
                                        <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                                    </div>
                                    AI Portfolio Critique
                                </h3>
                                <span className="text-xs font-bold bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                                    <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Live Version
                                </span>
                            </div>

                            <p className="text-slate-600 text-base leading-relaxed mb-10 font-medium">
                                Input 5 of your largest holdings. Our proprietary LLM will evaluate your <span className="text-slate-900 font-bold decoration-orange-200 underline underline-offset-4">concentration risk</span>, sector correlation, and point out glaring governance red flags using institutional frameworks.
                            </p>

                            <div className="mt-auto bg-slate-50 border border-slate-200 p-6 rounded-2xl group-hover:bg-white group-hover:border-orange-100 group-hover:shadow-[0_0_30px_-5px_rgba(234,88,12,0.1)] transition-all duration-500">
                                <div className="flex items-center gap-2 text-slate-700 font-bold mb-4">
                                    <span className="material-symbols-outlined text-primary">add_circle</span> Add Ticker Symbol
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        placeholder="e.g. RELIANCE, HDFC..."
                                        className="bg-white border border-slate-300 p-4 rounded-xl w-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-50 focus:border-orange-300 uppercase shadow-inner font-medium placeholder:normal-case placeholder:font-medium transition-all"
                                    />
                                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-2">
                                        ANALYZE
                                        <span className="material-symbols-outlined text-[18px]">temp_preferences_custom</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tool 2 */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-6 relative group overflow-hidden transition-all duration-300"
                    >
                        {/* Background shape */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors duration-700 pointer-events-none"></div>

                        <div className="absolute -right-6 -top-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none">
                            <span className="material-symbols-outlined text-[240px] text-white">crisis_alert</span>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                                    <div className="size-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
                                        <span className="material-symbols-outlined text-[20px]">warning</span>
                                    </div>
                                    Event Stress Tester
                                </h3>
                                <span className="text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-full shadow-sm">
                                    Sandboxed Mode
                                </span>
                            </div>

                            <p className="text-slate-300 text-base leading-relaxed mb-10 font-medium opacity-90">
                                Simulate how different portfolio allocations would react to historical Black Swan events. We map your current exposures against the <span className="text-white font-bold decoration-orange-500/50 underline underline-offset-4">COVID Crash of 2020</span>, 2008 Financial Crisis, and the Dot-Com burst.
                            </p>

                            <button className="mt-auto w-full py-5 bg-white text-slate-900 hover:bg-orange-50 font-black tracking-wide rounded-xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 flex justify-center items-center gap-2 group/btn">
                                Launch Simulation Engine
                                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">rocket_launch</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}
