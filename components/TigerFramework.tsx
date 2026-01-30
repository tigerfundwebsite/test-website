"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, BarChart3, ShieldAlert, LineChart } from "lucide-react";

const steps = [
    {
        letter: "T",
        title: "Tailwinds",
        desc: "Identifying sectors with structural policy support and long growth runways.",
        icon: <TrendingUp className="w-12 h-12" />
    },
    {
        letter: "I",
        title: "In-depth Research",
        desc: "Ground-level validation, plant visits, and channel checks before capital deployment.",
        icon: <Search className="w-12 h-12" />
    },
    {
        letter: "G",
        title: "Growth Potential",
        desc: "Preferred businesses with scalable models and clear levers for operating leverage.",
        icon: <BarChart3 className="w-12 h-12" />
    },
    {
        letter: "E",
        title: "Earnings Visibility",
        desc: "Strong order books, recurring revenues, and predictable quarterly cash flows.",
        icon: <LineChart className="w-12 h-12" />
    },
    {
        letter: "R",
        title: "Risk Mitigation",
        desc: "Protecting downside through diversification and strict sell disciplines.",
        icon: <ShieldAlert className="w-12 h-12" />
    }
];

export default function TigerFramework() {
    return (
        <section id="framework" className="py-20 md:py-32 px-4 md:px-6 bg-brand-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 uppercase"
                    >
                        The T.I.G.E.R <span className="text-brand-orange">Framework</span>
                    </motion.h2>
                    <p className="text-zinc-500 text-lg md:text-xl font-bold tracking-widest uppercase">
                        Our Disciplined Process for Stock Selection
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
                    {/* Vertical Connecting Line for Mobile */}
                    <div className="absolute left-10 top-20 bottom-20 w-px bg-brand-orange/20 md:hidden" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.letter}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-zinc-900 border border-white/5 hover:border-brand-orange/40 transition-all cursor-default overflow-hidden"
                        >
                            <div className="hidden md:block text-brand-orange/10 font-black text-[120px] absolute -top-10 -right-6 select-none group-hover:text-brand-orange/20 transition-colors">
                                {step.letter}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 md:block mb-8 md:mb-10">
                                    <div className="w-16 h-16 md:w-auto md:h-auto rounded-2xl bg-brand-orange/10 md:bg-transparent flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform flex-shrink-0">
                                        {step.icon}
                                    </div>
                                    <div className="md:hidden text-brand-orange font-black text-4xl opacity-40">
                                        {step.letter}
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-white mb-4">{step.title}</h3>
                                <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
