"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, ExternalLink } from "lucide-react";

const managers = [
    {
        name: "Raghav Chaudhary",
        role: "Founder, Tiger Assets",
        desc: "An alumnus of LLIM, Raghav has served over 1,500 investors. He specializes in investment banking and fund management with a digital presence of 70,000+ followers on X.",
        highlights: ["1,500+ Investors", "70k+ Finfluencer", "Lala Lajpatrai Alumnus"],
        twitter: "https://twitter.com"
    },
    {
        name: "Anshul Mittal",
        role: "Fund Manager",
        desc: "Anshul has played a pivotal role in scaling a leading PMS firm to over ₹800 crore in AUM. He specializes in GARP (Growth at a Reasonable Price) strategies.",
        highlights: ["₹800cr+ AUM Track Record", "GARP Specialist", "Small-Cap Expert"],
        linkedin: "https://linkedin.com"
    }
];

export default function TeamSection() {
    return (
        <section id="team" className="py-20 md:py-32 px-4 md:px-6 bg-brand-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
                    <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            The Minds <br className="hidden sm:block" /> Behind the <span className="text-brand-orange">Alpha</span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-500 font-medium">
                            Blending institutional-grade rigour with a modern, tech-enabled research execution style.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {managers.map((m, i) => (
                        <motion.div
                            key={m.name}
                            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[40px] bg-zinc-900/50 border border-white/10 hover:border-brand-orange/30 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-24 h-24 rounded-3xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-4xl font-black text-brand-orange">
                                    {m.name[0]}
                                </div>
                                <div className="flex gap-4">
                                    {m.twitter && <Twitter className="text-zinc-600 hover:text-brand-orange cursor-pointer transition-colors" />}
                                    {m.linkedin && <Linkedin className="text-zinc-600 hover:text-brand-orange cursor-pointer transition-colors" />}
                                    <ExternalLink className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
                                </div>
                            </div>

                            <h3 className="text-3xl font-black text-white mb-2">{m.name}</h3>
                            <div className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-6">{m.role}</div>

                            <p className="text-zinc-400 mb-10 leading-relaxed">{m.desc}</p>

                            <div className="flex flex-wrap gap-3">
                                {m.highlights.map(h => (
                                    <span key={h} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-300">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
