"use client";

import { motion } from "framer-motion";

export default function PMSSection() {
    return (
        <div id="pms">
            <section className="py-20 bg-background-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-3xl">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">Methodology</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.1] mb-6 mt-4">Investment Philosophy</h2>
                            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">A balanced approach to constructing a resilient portfolio capable of withstanding market cycles.</p>
                        </div>
                        <div className="hidden md:block w-32 h-1 bg-primary"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                            <div className="size-14 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-[28px]">anchor</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Core Portfolio</h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                                Stable, high-quality businesses with predictable cash flows. These compounders form the bedrock of the portfolio, ensuring stability during volatility.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-emerald"></span> Large Cap Bias
                                </li>
                                <li className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-emerald"></span> Low Beta
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all relative z-10 ring-2 ring-orange-100 md:-translate-y-4">
                            <div className="size-14 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Catalyst Plays</h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                                Companies undergoing special situations: demergers, management change, or cyclical upturns. These provide the &apos;alpha&apos; kicker to returns.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-primary"></span> Mid &amp; Small Cap
                                </li>
                                <li className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-primary"></span> High Growth
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                            <div className="size-14 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-[28px]">shield</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Capital Protection</h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                                A rigorous exit framework prevents emotional decision making. We are quick to cut losses when the investment thesis breaks.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-slate-700"></span> Stop Loss Protocols
                                </li>
                                <li className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    <span className="size-1.5 rounded-full bg-slate-700"></span> Cash Calls
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative border-t border-slate-200">
                <div className="absolute inset-0 bg-wave-pattern opacity-30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 md:mb-10 text-slate-900 tracking-tight leading-[1.1]">Making Volatility <br className="hidden sm:block" /> Survivable</h2>
                            <div className="space-y-10">
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 size-14 rounded-xl bg-white flex items-center justify-center border border-orange-100 shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-[28px]">gavel</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Governance First</h3>
                                        <p className="text-slate-600 text-base font-medium leading-relaxed">We reject ~80% of ideas purely on governance filters. We look for clean balance sheets and shareholder-friendly management.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 size-14 rounded-xl bg-white flex items-center justify-center border border-orange-100 shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-[28px]">water_drop</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Liquidity Discipline</h3>
                                        <p className="text-slate-600 text-base font-medium leading-relaxed">We ensure minimum daily trading volumes to avoid impact costs during entry and exit.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex-shrink-0 size-14 rounded-xl bg-white flex items-center justify-center border border-orange-100 shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-[28px]">pie_chart</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Diversification Limits</h3>
                                        <p className="text-slate-600 text-base font-medium leading-relaxed">Maximum sector exposure capped at 30%. Single stock exposure capped at 10%.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-lg">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                                    <div className="size-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[20px]">monitoring</span>
                                    </div>
                                    Portfolio Snapshot
                                </h3>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between text-base font-bold mb-3">
                                            <span className="text-slate-600">Number of Stocks</span>
                                            <span className="text-primary">15 - 20</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-primary rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Market Cap Bias</p>
                                            <p className="font-bold text-xl text-slate-900">Multi-Cap</p>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Benchmark</p>
                                            <p className="font-bold text-xl text-slate-900">BSE 500</p>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Strategy</p>
                                            <p className="font-bold text-xl text-slate-900">Long Only</p>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Min Investment</p>
                                            <p className="font-bold text-xl text-slate-900">₹ 50 Lakhs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
