"use client";

import { motion } from "framer-motion";
import { Factory, Wind, Laptop, HeartPulse, ShoppingCart } from "lucide-react";

const sectors = [
    { icon: <Factory />, name: "Manufacturing", desc: "Capitalizing on China+1 and PLI mandates." },
    { icon: <Wind />, name: "Renewables", desc: "Solar, wind, and green hydrogen supply chains." },
    { icon: <Laptop />, name: "Digital Tech", desc: "SaaS and deep-tech platforms scaling globally." },
    { icon: <HeartPulse />, name: "Healthcare", desc: "Diagnostic chains and API manufacturing leaders." },
    { icon: <ShoppingCart />, name: "Consumption", desc: "Premiumization play in the Indian middle class." },
];

export default function SectorOpportunities() {
    return (
        <section className="py-32 px-6 bg-brand-dark">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Sector <span className="text-brand-orange text-gradient">Opportunities</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto font-medium">
                        Identifying megatrends before they hit the mainstream. Our research desk is currently focused on these high-conviction clusters.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {sectors.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[40px] bg-zinc-900 border border-white/5 hover:border-brand-orange/30 transition-all text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange mx-auto mb-6 group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-black text-white mb-3">{s.name}</h3>
                            <p className="text-zinc-500 text-sm font-medium">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
