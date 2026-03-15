"use client";

import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";
import { products } from "@/data/products";

const STAGGER: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const FADE_UP: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProductsOverview() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 z-10 w-full overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-white shadow-sm mb-6"
                    >
                        <span className="material-symbols-outlined text-primary text-sm">view_comfy_alt</span>
                        <span className="text-orange-900 text-sm font-bold">Offerings</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-black tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl"
                    >
                        Tailored Investment <br className="hidden md:block" />
                        <span className="text-primary italic">Strategies.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl font-medium leading-relaxed"
                    >
                        From high-conviction PMS models to exclusive SME advisory, we engineer portfolios designed to thrive in India's structural growth phase.
                    </motion.p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={STAGGER}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={FADE_UP}>
                            <Link href={`/products/${product.slug}`} className="block h-full">
                                <div className="group h-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 flex flex-col relative overflow-hidden">
                                    {/* Background Accent */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="size-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary border border-orange-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <span className="material-symbols-outlined text-[24px]">
                                                    {product.theme === 'pms' ? 'moving' :
                                                        product.theme === 'sme' ? 'storefront' :
                                                            product.theme === 'hni' ? 'diamond' : 'account_balance'}
                                                </span>
                                            </div>
                                            <span className="flex items-center justify-center size-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300 pointer-events-none">
                                                <span className="material-symbols-outlined text-[20px] -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span>
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                                            {product.name}
                                        </h3>
                                        <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                                            {product.shortDescription}
                                        </p>

                                        {product.minimumTicketSize && (
                                            <div className="mt-auto py-3 border-t border-slate-100 flex items-center gap-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Min. Ticket:</span>
                                                <span className="text-sm font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded-md">{product.minimumTicketSize}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
