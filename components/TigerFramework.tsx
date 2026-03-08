"use client";

import { motion } from "framer-motion";

const steps = [
    { letter: "T", title: "Tailwinds", desc: "Identifying sectors with structural growth drivers and policy support." },
    { letter: "I", title: "In-Depth", desc: "Forensic accounting and rigorous ground-level scuttlebutt." },
    { letter: "G", title: "Growth", desc: "Focus on companies with sustainable 20%+ earnings growth." },
    { letter: "E", title: "Execution", desc: "Management quality, capital allocation history, and integrity." },
    { letter: "R", title: "Risk", desc: "Strict valuation discipline and liquidity constraints." },
];

export default function TigerFramework() {
    return (
        <section id="framework" className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">Our Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">The TIGER Framework</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.letter}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-slate-50 p-8 shadow-sm border border-slate-200 hover:border-primary hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="text-8xl font-black text-slate-200 absolute -right-4 -top-6 select-none group-hover:text-primary/10 transition-colors">
                                {step.letter}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 text-primary">{step.title}</h3>
                            <p className="text-base text-slate-600 relative z-10 font-medium leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
