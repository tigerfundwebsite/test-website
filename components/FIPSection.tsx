"use client";

import { motion } from "framer-motion";
import { Shield, Clock, LayoutGrid, Banknote } from "lucide-react";

const perks = [
    { icon: <Banknote />, label: "Target 16% p.a.", sub: "Net Yield (XIRR)" },
    { icon: <Clock />, label: "24-Month Horizon", sub: "Reliable Tenures" },
    { icon: <Shield />, label: "Security Stack", sub: "Escrow Control" },
    { icon: <LayoutGrid />, label: "Diversification", sub: "Strict Protocol" },
];

export default function FIPSection() {
    return (
        <section id="fip" className="py-20 md:py-32 px-4 md:px-6 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black mb-6"
                    >
                        F.I.P is the <span className="text-brand-orange underline">new S.I.P</span>
                    </motion.h2>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium">
                        Engineering stability through secured short-tenure transactions. Predictive income for elite family offices and UHNIs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[40px] bg-zinc-900 shadow-2xl border border-white/5 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-3xl font-black mb-6 text-white">Reliable Income Strategy</h3>
                            <p className="text-zinc-400 mb-10 leading-relaxed font-medium">
                                Our Fixed Income Product invests in secured transactions within the supply chains of Tier-1 corporates. Every invoice is verified and repayment is routed through third-party trustee managed Escrow accounts.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {perks.map((p, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                                        {p.icon}
                                    </div>
                                    <div>
                                        <div className="font-black text-lg text-white">{p.label}</div>
                                        <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{p.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-12 rounded-[40px] bg-brand-dark text-white shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Shield className="w-64 h-64" />
                        </div>

                        <h3 className="text-3xl font-black mb-10 relative z-10">The Security Stack</h3>

                        <div className="space-y-8 relative z-10">
                            {[
                                { t: "Escrow Control", d: "Managed by third-party trustee for direct repayment flow." },
                                { t: "Tier-1 Counterparties", d: "Pepsi, Red Bull, Apple, McDonald's supply chain partners." },
                                { t: "Forensic Audit", d: "Multi-layered invoice verification using external data points." },
                                { t: "Corporate Guarantees", d: "Additional layer of protection via corporate recourse." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 text-black font-black text-xs">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="font-black text-xl mb-1">{item.t}</div>
                                        <div className="text-zinc-500 font-medium">{item.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
