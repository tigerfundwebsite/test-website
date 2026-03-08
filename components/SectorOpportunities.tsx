"use client";

import { motion } from "framer-motion";

const sectors = [
    { icon: "solar_power", name: "Energy Transition", desc: "Renewables, Green Hydrogen, and Power Transmission infrastructure." },
    { icon: "precision_manufacturing", name: "Manufacturing Renaissance", desc: "China+1 strategy, PLI schemes, and defence indigenization." },
    { icon: "currency_rupee", name: "Financialization", desc: "Wealth management, insurance, and credit growth in underpenetrated markets." },
];

export default function SectorOpportunities() {
    return (
        <section className="py-20 bg-accent-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">Themes Focus</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">
                        Megatrends We Are Betting On
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 cursor-default"
                        >
                            <div className="size-14 bg-orange-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[28px]">{s.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                            <p className="text-slate-600 text-base font-medium leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
