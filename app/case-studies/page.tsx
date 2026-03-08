"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-32 md:pt-48 pb-24 bg-slate-900 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-orange-300 font-bold tracking-wider uppercase text-sm mb-6 inline-block"
                    >
                        Real-World Results
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
                    >
                        Investment Case Studies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Detailed autopsies of our biggest winners and our most valuable mistakes. Radical transparency in action.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16">

                    {/* Featured Case Study */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:border-orange-200 transition-colors">
                        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">Multi-Bagger Win</span>
                                <span className="text-slate-400 text-sm font-bold">2022 - 2024</span>
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">Shakti Pumps: Riding the Solar Wave</h2>
                            <p className="text-slate-600 leading-relaxed font-medium mb-8">
                                How we identified a massive policy tailwind (PM-KUSUM scheme) resulting in a staggering 560% return over two years by backing a market leader in agricultural solar pumps.
                            </p>
                            <div className="flex items-center gap-6 mt-auto">
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Entry</p>
                                    <p className="text-xl font-bold text-slate-900">₹670</p>
                                </div>
                                <div className="h-8 w-px bg-slate-200"></div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Exit</p>
                                    <p className="text-xl font-bold text-slate-900">₹4,420</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-slate-50 relative min-h-[300px] border-l border-slate-100 flex items-center justify-center p-8">
                            {/* Placeholder for SVG chart or Graphic */}
                            <div className="w-full max-w-sm aspect-video bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-orange-500">
                                <span className="material-symbols-outlined text-[64px]">trending_up</span>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Case Studies Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">Post-Mortem</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Hindware: Where the cycle turned</h3>
                            <p className="text-slate-600 font-medium mb-6">A breakdown of why we triggered our stop-loss protocols to protect capital when the home building cycle thesis cracked.</p>
                            <p className="text-red-500 font-bold text-sm">-23% Capital Preserved via strict exit</p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">Thesis Playing Out</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Frontier Springs: Railway Ancillary</h3>
                            <p className="text-slate-600 font-medium mb-6">Capitalizing on the massive railway modernization capex through a high-margin, duopoly ancillary supplier.</p>
                            <p className="text-orange-500 font-bold text-sm">+514% Return Generated</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
