"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AnnualLetters() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="relative pt-32 md:pt-48 pb-20 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Annual Investor Letters
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        Transparent reviews of our performance, mistakes, and macro outlook distributed yearly to our partners.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
                {[
                    { year: "2025", title: "Navigating the Midcap Euphoria", desc: "Why we raised cash and avoided the frenzy in low-quality small caps." },
                    { year: "2024", title: "The Manufacturing Tailwind", desc: "Our early thesis on China+1 playing out across capital goods." },
                    { year: "2023", title: "Foundations & Frameworks", desc: "Establishing the core portfolio during global rate hike uncertainty." }
                ].map((letter) => (
                    <div key={letter.year} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer">
                        <div>
                            <span className="text-3xl font-bold text-primary opacity-50 block mb-2">{letter.year}</span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{letter.title}</h3>
                            <p className="text-slate-600 font-medium">{letter.desc}</p>
                        </div>
                        <button className="shrink-0 bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-primary p-4 rounded-xl border border-slate-200 transition-colors">
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
