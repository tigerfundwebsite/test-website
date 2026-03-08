"use client";

import { motion } from "framer-motion";

const performanceData = [
    { name: "Shakti Pumps India Ltd", theme: "Solar Pumps", investPrice: 670, cmpPrice: 4420, returns: 560 },
    { name: "Frontier Springs Ltd", theme: "Railways", investPrice: 685, cmpPrice: 4203, returns: 514 },
    { name: "Garware Hi Tech Films Ltd", theme: "Packaging", investPrice: 990, cmpPrice: 3444, returns: 248 },
    { name: "TARC Ltd", theme: "Real Estate", investPrice: 72, cmpPrice: 242, returns: 236 },
    { name: "Hindware Home Innnovation Ltd", theme: "Building Products", investPrice: 480, cmpPrice: 368, returns: -23 },
];

export default function InvestmentStats() {
    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">Track Record</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">
                        Recent Exits & Performance
                    </h2>
                </div>

                <div className="flex flex-col text-sm border-t border-slate-200">
                    {/* Desktop header */}
                    <div className="hidden md:grid md:grid-cols-[2fr_2fr_1fr_1fr_1fr] border-b-2 border-slate-300 bg-slate-50 rounded-t-xl">
                        <div className="py-3 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs">Stock</div>
                        <div className="py-3 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs">Theme</div>
                        <div className="py-3 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs text-center">Buy Price</div>
                        <div className="py-3 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs text-center">CMP/Exit</div>
                        <div className="py-3 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs text-center">Returns</div>
                    </div>
                    {performanceData.map((row, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: idx * 0.03 }}
                            key={idx}
                            className={`flex flex-col md:grid md:grid-cols-[2fr_2fr_1fr_1fr_1fr] border-b border-slate-200 hover:bg-orange-50/30 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                        >
                            {/* Mobile card layout */}
                            <div className="md:hidden p-4 flex flex-col gap-2">
                                <div className="font-bold text-[#e98300] text-base">{row.name}</div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Theme</span>
                                    <span className="font-medium text-slate-700">{row.theme}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Buy Price</span>
                                    <span className="font-medium text-slate-700">₹{row.investPrice}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">CMP / Exit</span>
                                    <span className="font-medium text-slate-700">₹{row.cmpPrice}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Returns</span>
                                    <span className={`font-bold ${row.returns >= 0 ? 'text-[#00a87a]' : 'text-red-500'}`}>{row.returns >= 0 ? '+' : ''}{row.returns}%</span>
                                </div>
                            </div>
                            {/* Desktop table layout */}
                            <div className="hidden md:block py-4 px-6 font-bold text-[#e98300] md:text-center md:border-r border-slate-200">{row.name}</div>
                            <div className="hidden md:block py-3 px-6 text-slate-700 font-medium md:text-center md:border-r border-slate-200">{row.theme}</div>
                            <div className="hidden md:block py-3 px-6 text-slate-600 font-medium md:text-center md:border-r border-slate-200">{row.investPrice}</div>
                            <div className="hidden md:block py-3 px-6 text-slate-600 font-medium md:text-center md:border-r border-slate-200">{row.cmpPrice}</div>
                            <div className={`hidden md:block py-4 px-6 font-bold md:text-center ${row.returns >= 0 ? 'text-[#00a87a]' : 'text-red-500'}`}>{row.returns}%</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center border-t border-slate-100 pt-6">
                <p className="text-xs text-slate-400 max-w-4xl mx-auto leading-relaxed italic">
                    *Note: Past performance is not indicative of future results. Securities quoted are for illustration only and are not recommendations.
                </p>
            </div>
        </section>
    );
}
