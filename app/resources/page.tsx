"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Resources() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-32 md:pt-48 pb-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-6 inline-block"
                    >
                        Tools & Materials
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Investor Resources
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        Everything you need to understand our process, compliance frameworks, and onboarding procedures.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Fee Structure", desc: "Transparent breakdown of our performance hurdle rates and fixed fees.", icon: "account_balance_wallet" },
                        { title: "Disclosure Document", desc: "Current SEBI mandated disclosure document for Portfolio Managers.", icon: "description" },
                        { title: "Taxation Primer", desc: "Overview of capital gains taxation for PMS investors in India.", icon: "request_quote" },
                        { title: "Quarterly Updates", desc: "A compendium of our most recent quarterly macro updates.", icon: "library_books" },
                        { title: "FAQs", desc: "Answers to common questions about lock-ins, withdrawals, and reporting.", icon: "help" }
                    ].map((res, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all group flex flex-col h-full cursor-pointer">
                            <div className="size-12 bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-primary rounded-xl flex items-center justify-center mb-6 transition-colors">
                                <span className="material-symbols-outlined">{res.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{res.title}</h3>
                            <p className="text-slate-600 font-medium mb-6 flex-1">{res.desc}</p>
                            <span className="text-sm font-bold text-primary flex items-center gap-1 mt-auto w-fit">
                                Download / View
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
