"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-brand-dark">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-orange/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[100px] rounded-full"
                />
            </div>

            <div className="w-full max-w-6xl flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="px-4 py-1.5 rounded-full border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-widest uppercase mb-8 inline-block bg-brand-orange/5">
                        Engineering Global Assets
                    </span>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight md:leading-[1.1] mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Engineering Wealth. <br className="hidden sm:block" />
                    <span className="text-brand-orange">Delivering Integrity.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Tiger Assets is an elite investment firm specialized in identifying emerging leaders
                    and engineering fixed-income strategies for sustainable wealth creation.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="#pms"
                        className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-brand-orange transition-all transform hover:scale-105"
                    >
                        Explore Tiger PMS
                    </a>
                    <a
                        href="#fip"
                        className="px-10 py-5 border border-white/20 text-white font-black rounded-2xl hover:bg-white/5 transition-all"
                    >
                        View Fixed Income
                    </a>
                </motion.div>
            </div>

            {/* Down Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
