"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Manifesto() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-32 md:pt-48 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
                    >
                        The Tiger Manifesto
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 font-medium"
                    >
                        Our enduring beliefs on capital preservation, deep conviction, and the compounding engine of India.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
                <h2>I. The Preservation Prerogative</h2>
                <p>
                    Most market participants fail because they seek the thrill of returns before calculating the risk of ruin. We believe the first and most critical duty of a fund manager is not to make you rich quickly, but to ensure you are never poor permanently.
                </p>
                <p>
                    Capital preservation is the foundation upon which the edifice of compounding is built. If a business lacks clean governance or a sustainable moat, it does not enter our portfoliono matter the expected return.
                </p>

                <h2>II. Radical Conviction</h2>
                <p>
                    Diversification is often a substitute for knowledge. At Tiger Assets, we run highly concentrated portfolios. When we find a business that clears our stringent filters, we back our research with deep, meaningful capital allocation. We do not fear volatility; we use it to buy great businesses at reasonable prices.
                </p>

                <h2>III. The Indian Decade</h2>
                <p>
                    We are witnessing a structural, multi-decade expansion of the Indian economy. From the Renaissance in domestic manufacturing to the formalization of the economy and a digital revolution, the tailwinds are unprecedented. Our mandate is simple: position our partners to capture this generational wealth creation.
                </p>

                <div className="mt-16 pt-12 border-t border-slate-200">
                    <p className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-2">Signed,</p>
                    <p className="font-serif text-3xl font-bold text-slate-900">Raghav Chaudhary</p>
                    <p className="text-primary font-bold">Founder, Tiger Assets</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
