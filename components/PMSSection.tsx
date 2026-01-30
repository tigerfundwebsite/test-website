"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import InvestmentStats from "./InvestmentStats";

const features = [
    {
        icon: <TrendingUp className="w-6 h-6 text-brand-orange" />,
        title: "Structural Growth",
        desc: "Focusing on sectors with multi-year policy support and structural demand tailwinds."
    },
    {
        icon: <Zap className="w-6 h-6 text-brand-orange" />,
        title: "High Conviction",
        desc: "A concentrated portfolio of 15-20 stocks, straddling the entire market cap curve."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
        title: "Risk Mitigation",
        desc: "Multi-factor risk management matrix with strict sell disciplines and governance filters."
    }
];

export default function PMSSection() {
    return (
        <section id="pms" className="py-32 px-6 bg-brand-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-20 items-center mb-20">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                            Equity Portfolio
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Tiger PMS: Investing in <span className="text-brand-orange">Emerging Leaders</span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-xl">
                            Our flagship Portfolio Management Service combines bottom-up research with a robust, process-driven framework to target superior risk-adjusted returns.
                        </p>

                        <div className="space-y-6">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                    <div className="mt-1">{f.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{f.title}</h4>
                                        <p className="text-zinc-500 text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 relative w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Dashboard Mockup - Mobile Native Style */}
                        <div className="relative z-10 p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <div className="h-10 w-32 bg-white/5 rounded-xl border border-white/10 flex items-center px-3 gap-2">
                                    <div className="w-4 h-1 bg-brand-orange rounded-full" />
                                    <div className="w-12 h-1 bg-white/10 rounded-full" />
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-md bg-brand-orange/40" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="p-6 rounded-[24px] bg-brand-orange text-black flex flex-col justify-between h-32">
                                    <div className="text-[10px] font-black uppercase tracking-tighter opacity-60">Real-time Alpha</div>
                                    <div className="text-4xl font-black leading-none">+25.4%</div>
                                </div>
                                <div className="hidden sm:flex p-6 rounded-[24px] bg-zinc-800 border border-white/10 text-white flex flex-col justify-between h-32">
                                    <div className="text-[10px] font-black uppercase tracking-tighter text-zinc-500">Benchmark</div>
                                    <div className="text-4xl font-black leading-none text-zinc-300">NIFTY</div>
                                </div>
                            </div>

                            <div className="space-y-3 mt-auto">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-14 w-full bg-white/5 rounded-[20px] flex items-center justify-between px-5 border border-white/5">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-8 h-8 rounded-xl bg-brand-orange/20 border border-brand-orange/20" />
                                            <div className="h-2 w-20 md:w-32 bg-white/10 rounded-full" />
                                        </div>
                                        <div className="h-2 w-10 md:w-16 bg-brand-orange/40 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Glowing Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-orange/10 rounded-full animate-spin-slow pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none" />
                    </motion.div>
                </div>

                <InvestmentStats />
            </div>
        </section>
    );
}
