"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function TheMarketJourney() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="relative pt-32 md:pt-48 pb-20 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-6 inline-block"
                    >
                        Historical Perspective
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        History Rhymes.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        A scroll-based narrative mapping the last 30 years of the Indian equity market cycles, crashes, and unprecedented bull runs.
                    </motion.p>
                </div>
            </section>

            {/* Timeline container */}
            <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6 relative">

                {/* Vertical Line */}
                <div className="absolute left-1/2 top-24 bottom-24 w-px bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-24">
                    {/* Event 1 */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full group">
                        <div className="md:w-5/12 text-right md:pr-12 md:pb-0 pb-8">
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">The 2008 GFC Crash</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Global liquidity dried up overnight. Retail panicked. Institutions dumped. Yet, this presented the greatest accumulation opportunity of the decade for high-quality Indian banks.</p>
                        </div>
                        <div className="size-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center font-bold text-slate-400 z-10 group-hover:border-primary group-hover:text-primary transition-colors shadow-sm">
                            &apos;08
                        </div>
                        <div className="md:w-5/12 md:pl-12 mt-8 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="bg-red-50 text-red-700 p-6 rounded-2xl border border-red-100 inline-block font-bold">
                                Sensex crashed 52% from peak.
                            </div>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full group">
                        <div className="md:w-5/12 text-left md:pl-12 md:pb-0 pb-8">
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">The 2013 Taper Tantrum</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">India was grouped in the &quot;Fragile Five&quot;. The Rupee plummeted. But underlying corporate fundamentals were quietly turning, setting the stage for the 2014-2017 mega-rally.</p>
                        </div>
                        <div className="size-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center font-bold text-slate-400 z-10 group-hover:border-primary group-hover:text-primary transition-colors shadow-sm">
                            &apos;13
                        </div>
                        <div className="md:w-5/12 text-right md:pr-12 mt-8 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity flex justify-end">
                            <div className="bg-orange-50 text-primary p-6 rounded-2xl border border-orange-100 inline-block font-bold">
                                Rupee hit 68/$ for the first time.
                            </div>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="flex flex-col md:flex-row justify-between items-center w-full group">
                        <div className="md:w-5/12 text-right md:pr-12 md:pb-0 pb-8">
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">The 2020 COVID Shock</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">A 40% vertical drop in 30 days. Total panic. However, it accelerated digital adoption and formalized the economy at an unprecedented pace.</p>
                        </div>
                        <div className="size-16 rounded-full bg-slate-900 border-4 border-slate-700 flex items-center justify-center font-bold text-white z-10 group-hover:border-primary group-hover:bg-primary transition-colors shadow-lg shadow-primary/20">
                            &apos;20
                        </div>
                        <div className="md:w-5/12 md:pl-12 mt-8 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="bg-orange-50 text-orange-700 p-6 rounded-2xl border border-orange-100 inline-block font-bold">
                                Sensex rebounded 100%+ in 18 months.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-32">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">The Lesson?</h3>
                    <p className="text-slate-600 font-medium max-w-xl mx-auto">
                        Cycles are inevitable. Volatility is the price of admission. The only variable you can control is the quality of the businesses you own when the storm hits.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
