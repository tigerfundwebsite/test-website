"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="rgb(234,88,12)"
                        strokeWidth={path.width}
                        strokeOpacity={0.03 + path.id * 0.006}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.7, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + (path.id % 5) * 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const SLIDER_TEXTS = [
    "Institutional-grade wealth creation",
    "Data-driven insights",
    "Disciplined capital allocation",
    "High-trust, alpha-focused",
    "Risk-adjusted compounding",
    "Unlocking long-term value",
    "Strategic portfolio management",
    "Precision in every investment",
    "Navigating volatility with expertise",
    "Empowering financial futures"
];

const HERO_HEADINGS = [
    { part1: "Consistent Returns.", part2: "Alpha-Driven Approach." },
    { part1: "Strategic Capital.", part2: "Accelerated Growth." },
    { part1: "Data-Driven Insights.", part2: "Proven Results." },
    { part1: "Disciplined Investing.", part2: "Maximum Alpha." },
    { part1: "Unlocking Value.", part2: "Empowering Wealth." },
    { part1: "Elite Strategies.", part2: "Superior Outcomes." },
    { part1: "Navigating Markets.", part2: "Delivering Alpha." },
    { part1: "Precision Investing.", part2: "Exponential Compounding." },
    { part1: "Institutional Edge.", part2: "Focused Returns." },
    { part1: "Risk-Adjusted Alpha.", part2: "Unmatched Growth." }
];

export default function Hero() {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [headingIndex, setHeadingIndex] = useState(0);

    useEffect(() => {
        setSliderIndex(Math.floor(Math.random() * SLIDER_TEXTS.length));
        setHeadingIndex(Math.floor(Math.random() * HERO_HEADINGS.length));
        const interval = setInterval(() => {
            setSliderIndex((prev) => (prev + 1) % SLIDER_TEXTS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[90svh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-white py-24 md:py-32">
            {/* Floating SVG Paths  full section coverage, emanating from top */}
            <div className="absolute inset-0 pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Animated Glow Background */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.45, 0.2],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-orange-400 via-orange-200 to-transparent pointer-events-none blur-3xl origin-bottom"
                style={{ zIndex: 0 }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50/80 shadow-sm mb-6 md:mb-8"
                >
                    <span className="material-symbols-outlined text-primary text-sm flex-shrink-0">trending_up</span>
                    <div className="relative h-5 flex items-center justify-center min-w-[200px] w-auto px-1">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={sliderIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute text-orange-900 text-sm font-medium whitespace-nowrap"
                            >
                                {SLIDER_TEXTS[sliderIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4 md:mb-6 max-w-4xl"
                >
                    {HERO_HEADINGS[headingIndex].part1} <br className="hidden md:block" />
                    <span className="text-primary">{HERO_HEADINGS[headingIndex].part2}</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 max-w-xl md:max-w-2xl font-medium leading-relaxed"
                >
                    Institutional-grade wealth creation focusing on India&apos;s growth story. Catering exclusively to HNI &amp; UHNI investors with a disciplined, research-backed approach.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 mb-6 md:mb-8 w-full max-w-sm sm:max-w-none"
                >
                    <Link href="/portfolio-review">
                        <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 md:px-8 py-3.5 md:py-4 rounded-lg text-base font-bold transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 group">
                            Get Free Portfolio Audit
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                        </button>
                    </Link>
                    <Link href="/#pms">
                        <button className="w-full sm:w-auto bg-white hover:bg-orange-50 border border-slate-200 text-slate-700 px-6 md:px-8 py-3.5 md:py-4 rounded-lg text-base font-bold transition-all shadow-sm hover:shadow-md">
                            View Investment Approach
                        </button>
                    </Link>
                </motion.div>

                {/* Trust Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wide"
                >
                    <a href="https://enit.nseindia.com/MemDirWeb/brokerDetailPage_Beta?memID=281&h_MemType=members" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                        SEBI Registered
                    </a>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">groups</span>
                        1,500+ Investors Trusted
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">trending_up</span>
                        Risk-adjusted Compounding
                    </div>
                </motion.div>

                {false && (
                    <>
                        {/* Mockup Container */}
                        {/* Abstract Data Visualization */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 50 }}
                            className="relative w-full max-w-5xl mx-auto mt-4 md:mt-8 h-[280px] sm:h-[380px] md:h-[450px] flex justify-center perspective-[1000px]"
                        >
                            {/* Central Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-orange-200/40 to-primary/20 blur-[80px] -z-10 rounded-full"></div>

                            {/* Main Performance Card */}
                            <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col mt-10 shadow-slate-200/50">
                                {/* Header Area */}
                                <div className="p-8 flex items-start justify-between border-b border-slate-100">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="size-8 rounded-lg bg-orange-50 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-[18px]">show_chart</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800">Tiger Growth Strategy</h3>
                                        </div>
                                        <div className="flex items-end gap-3 mt-4">
                                            <span className="text-4xl font-serif font-black text-slate-900 tracking-tight">₹ 25.4<span className="text-2xl text-slate-500 font-medium ml-1">Cr</span></span>
                                            <span className="flex items-center text-primary bg-orange-50 text-sm font-bold px-2 py-1 rounded-md mb-1.5">
                                                <span className="material-symbols-outlined text-[16px]">arrow_drop_up</span>
                                                Risk-adjusted
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        {['1Y', '3Y', '5Y', 'MAX'].map((label, i) => (
                                            <div key={label} className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-default transition-all ${i === 3 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>
                                                {label}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Chart Area (Abstract CSS) */}
                                <div className="flex-1 w-full bg-slate-50/50 relative overflow-hidden flex items-end pt-12 text-slate-400">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pt-8 pb-4 px-8 border-b border-slate-100/50 opacity-40 mix-blend-multiply">
                                        <div className="w-full border-t border-dashed border-slate-300"></div>
                                        <div className="w-full border-t border-dashed border-slate-300"></div>
                                        <div className="w-full border-t border-dashed border-slate-300"></div>
                                    </div>

                                    {/* SVG Chart area */}
                                    <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#fca5a5" />
                                                <stop offset="40%" stopColor="#f87171" />
                                                <stop offset="60%" stopColor="#fbbf24" />
                                                <stop offset="100%" stopColor="#10b981" />
                                            </linearGradient>
                                            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M0 160 C100 150, 200 180, 300 130 C400 80, 500 110, 600 60 C700 10, 800 50, 900 20 L1000 0 L1000 200 L0 200 Z"
                                            fill="url(#gradientFill)"
                                        />
                                        <path
                                            d="M0 160 C100 150, 200 180, 300 130 C400 80, 500 110, 600 60 C700 10, 800 50, 900 20 L1000 0"
                                            fill="none"
                                            stroke="url(#gradientLine)"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Element 1 - Left  hidden on mobile */}
                            <motion.div
                                initial={{ opacity: 0, x: -40, y: 20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 1, type: "spring" }}
                                className="absolute left-0 top-20 z-20 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-5 shadow-xl w-64 hidden lg:block transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="size-10 rounded-full bg-orange-50 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[20px]">verified_user</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">Capital Preserved</h4>
                                        <p className="text-xs font-medium text-slate-500">During market corrections</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Element 2 - Right  hidden on mobile */}
                            <motion.div
                                initial={{ opacity: 0, x: 40, y: 20 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                                className="absolute right-0 bottom-16 z-20 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-5 shadow-xl w-72 hidden lg:block transform rotate-3 hover:rotate-0 transition-transform duration-300"
                            >
                                <h4 className="font-bold text-slate-800 text-sm mb-4">Top Sectors Focus</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-600">Manufacturing (China+1)</span>
                                        <span className="text-xs font-bold text-primary">32%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-primary h-full w-[32%] rounded-full"></div>
                                    </div>

                                    <div className="flex items-center justify-between pt-1">
                                        <span className="text-xs font-bold text-slate-600">Energy Transition</span>
                                        <span className="text-xs font-bold text-primary">28%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-primary h-full w-[28%] opacity-80 rounded-full"></div>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </>
                )}
            </div>
        </section>
    );
}

