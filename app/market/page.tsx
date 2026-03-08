"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const FADE_UP = {
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
        <div className="absolute inset-0 pointer-events-none opacity-50">
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

export default function MarketIntelligence() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-500/20 overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-orange-50 via-white to-white blur-3xl opacity-80"></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 z-10 w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50/80 shadow-sm mb-6 md:mb-8"
                    >
                        <span className="material-symbols-outlined text-primary text-sm">public</span>
                        <span className="text-orange-900 text-sm font-medium">Inside Tiger Assets</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl"
                    >
                        Live Intelligence <br className="hidden md:block" />
                        <span className="text-primary italic">for you.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl font-medium leading-relaxed"
                    >
                        Proprietary macro indicators, sector heatmaps, and signal trackers powering our institutional research desk. Unvarnished. Open.
                    </motion.p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-16">

                    {/* Sector Momentum - Large Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="lg:col-span-2 relative group rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-6 md:p-10 flex flex-col hover:border-orange-200 transition-colors duration-500 overflow-hidden"
                    >
                        {/* Abstract Gradient Background */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 z-0 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex justify-between items-center mb-10 relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-slate-800">
                                <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary border border-orange-100">
                                    <span className="material-symbols-outlined text-[20px]">insights</span>
                                </div>
                                Sector Momentum
                            </h3>
                            <span className="flex items-center gap-2 text-xs font-bold bg-green-50 border border-green-100 px-3 py-1.5 rounded-full text-green-700">
                                <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Live Tracker
                            </span>
                        </div>

                        <div className="flex-1 flex flex-col gap-5 relative z-10">
                            {[
                                { name: "Information Technology", val: "84", width: "84%", trend: "up" },
                                { name: "Financial Services", val: "72", width: "72%", trend: "up" },
                                { name: "Consumer Discretionary", val: "58", width: "58%", trend: "down" },
                                { name: "Healthcare & Pharma", val: "45", width: "45%", trend: "down" },
                                { name: "Energy & Materials", val: "32", width: "32%", trend: "down" },
                            ].map((sector, i) => (
                                <div key={i} className="flex flex-col gap-2.5">
                                    <div className="flex justify-between text-sm md:text-base font-bold text-slate-700">
                                        <span>{sector.name}</span>
                                        <span className={`flex items-center gap-1 ${sector.trend === 'up' ? 'text-green-600' : 'text-slate-400'}`}>
                                            {sector.val}
                                            <span className="material-symbols-outlined text-[16px]">
                                                {sector.trend === 'up' ? 'north_east' : 'south_east'}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: sector.width }}
                                            transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className={`h-full rounded-full relative overflow-hidden ${sector.trend === 'up' ? 'bg-primary' : 'bg-slate-300'}`}
                                        >
                                            {sector.trend === 'up' && (
                                                <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Macro Signals - Small Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={STAGGER}
                        className="flex flex-col gap-4"
                    >
                        <motion.div variants={FADE_UP} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col justify-center h-full group pb-10">
                            <h3 className="text-lg font-bold flex items-center gap-2 mb-6 text-slate-800">
                                <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                                Key Macro Signals
                            </h3>

                            <div className="space-y-4 relative z-10">
                                {[
                                    { name: "Credit Growth (YoY)", val: "16.4%", trend: "up", status: "green", desc: "Expansion" },
                                    { name: "Capacity Utilization", val: "74.2%", trend: "up", status: "green", desc: "Solid" },
                                    { name: "Inflation (CPI)", val: "4.8%", trend: "down", status: "orange", desc: "Cooling" },
                                    { name: "FII Flows (MTD)", val: "-₹4.2k", trend: "down", status: "red", desc: "Outflow" }
                                ].map((signal, i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0 group/row cursor-default">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-700 group-hover/row:text-primary transition-colors">{signal.name}</span>
                                            <span className="text-xs text-slate-400 font-medium">{signal.desc}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-black text-slate-900">{signal.val}</span>
                                            <div className={`p-1.5 rounded-lg bg-${signal.status}-50 text-${signal.status}-600 flex items-center justify-center`}>
                                                <span className="material-symbols-outlined text-[16px]">
                                                    {signal.trend === 'up' ? 'trending_up' : 'trending_down'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Spectacular Newsletter CTA - Matching Homepage style */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden mt-10 md:mt-24 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-primary z-0"></div>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-0"></div>

                    {/* Abstract waves inside the box */}
                    <div className="absolute inset-0 opacity-20 z-0">
                        <FloatingPaths position={1} />
                    </div>

                    <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-white/10 to-transparent border border-white/20">
                        <div className="max-w-xl text-center md:text-left">
                            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">Get the weekly memo.</h3>
                            <p className="text-orange-50 font-medium text-lg leading-relaxed opacity-90">
                                Join 15,000+ top-tier institutional investors receiving our unvarnished views on market cycles, macro shifts, and pricing anomalies every Sunday.
                            </p>
                        </div>

                        <div className="w-full md:w-auto flex flex-col gap-3 max-w-sm">
                            <input
                                type="email"
                                placeholder="Institutional Email Address"
                                className="w-full px-5 py-4 rounded-xl text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white font-medium shadow-inner"
                            />
                            <button className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-black/20 flex items-center justify-center gap-2">
                                Subscribe to Newsletter
                            </button>
                            <p className="text-xs text-orange-200 text-center font-medium mt-1">No spam. Unsubscribe anytime.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
