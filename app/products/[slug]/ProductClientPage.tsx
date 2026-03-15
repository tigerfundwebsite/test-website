"use client";

import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import { ProductDetails } from "@/data/products";
import Link from "next/link";

export default function ProductClientPage({ product }: { product: ProductDetails }) {
    const FADE_UP: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const STAGGER: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 z-10 w-full overflow-hidden bg-white border-b border-slate-200">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-60 z-0 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap justify-center items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50/50 shadow-sm mb-6"
                    >
                        <span className="material-symbols-outlined text-primary text-sm">rocket_launch</span>
                        <span className="text-orange-900 text-sm font-bold uppercase tracking-wider">{product.theme.replace('-', ' ')} Offering</span>
                        {product.minimumTicketSize && (
                            <>
                                <span className="w-1 h-1 rounded-full bg-orange-300 mx-1"></span>
                                <span className="text-orange-700 text-xs font-bold">Ticket: {product.minimumTicketSize}</span>
                            </>
                        )}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-black tracking-tight text-slate-900 mb-6 max-w-4xl"
                    >
                        {product.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl font-medium leading-relaxed"
                    >
                        {product.shortDescription}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center gap-4"
                    >
                        <Link href="/portfolio-review">
                            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 transform flex items-center justify-center gap-2">
                                Request Access <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        </Link>
                        <Link href="/products">
                            <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold shadow-sm transition-all hover:border-slate-300 flex items-center justify-center gap-2">
                                All Products
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Main Details */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={FADE_UP}
                        className="lg:col-span-2 space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-[28px]">description</span>
                                The Strategy
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                                {product.fullDescription}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-[28px]">featured_play_list</span>
                                Key Features
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -z-10 bg-opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                                        <div className="size-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary mb-4 border border-orange-100 shadow-inner">
                                            <span className="material-symbols-outlined">{feature.icon}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h4>
                                        <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Sidebar */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={STAGGER}
                        className="space-y-8"
                    >
                        {/* Highlights Card */}
                        <motion.div variants={FADE_UP} className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-8 relative overflow-hidden">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-500">check_circle</span>
                                Strategic Highlights
                            </h3>
                            <ul className="space-y-4">
                                {product.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-600 font-medium">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">noise_aware</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Specs Card */}
                        <motion.div variants={FADE_UP} className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            {/* Abstract Accent */}
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[60px] translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>

                            <h3 className="text-xl font-bold mb-6 text-slate-100 relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined text-orange-400">tune</span>
                                Parameters
                            </h3>
                            <div className="space-y-5 relative z-10">
                                {product.tenure && (
                                    <div className="flex flex-col gap-1 border-b border-slate-800 pb-4">
                                        <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Expected Tenure</span>
                                        <span className="text-lg font-bold text-white">{product.tenure}</span>
                                    </div>
                                )}
                                {product.fees && (
                                    <>
                                        <div className="flex flex-col gap-1 border-b border-slate-800 pb-4">
                                            <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Fixed Fee</span>
                                            <span className="text-lg font-bold text-white">{product.fees.fixed}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Variable/Performance Fee</span>
                                            <span className="text-lg font-bold text-white">{product.fees.performance}</span>
                                        </div>
                                    </>
                                )}
                                {!product.fees && !product.tenure && (
                                    <div className="text-slate-400 italic">Parameters tailored per mandate. Contact for details.</div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
