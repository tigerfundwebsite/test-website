"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "@/components/Footer";

export default function InteractiveFramework() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animate background color dynamically based on scroll
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        ["#ffffff", "#fff8f0", "#1e293b", "#0f172a"]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        ["#0f172a", "#0f172a", "#ffffff", "#ffffff"]
    );

    return (
        <motion.main
            style={{ backgroundColor, color: textColor }}
            className="min-h-screen transition-colors duration-500 ease-in-out"
        >
            <div ref={containerRef} className="relative">

                {/* Intro Height */}
                <div className="h-screen flex flex-col items-center justify-center sticky top-0 px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-8xl font-black font-serif tracking-tighter mb-6"
                    >
                        The Engine.
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-medium max-w-2xl opacity-70">
                        Scroll to unravel how we dissect businesses, assess risk, and isolate compounding machines.
                    </p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-12"
                    >
                        <span className="material-symbols-outlined text-[40px] opacity-50">south</span>
                    </motion.div>
                </div>

                {/* Step 1 */}
                <div className="h-screen flex items-center justify-center relative z-10 px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">01 / The Filter</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Eliminating the Un-investable.</h2>
                            <p className="text-lg opacity-80 leading-relaxed">
                                We start with 5,000+ listed companies. We immediately eliminate 90% based on poor governance, weak unit economics, leveraged balance sheets, and cyclical vulnerability. The remaining 500 form our primary hunting ground.
                            </p>
                        </div>
                        <div className="aspect-square bg-slate-100 rounded-[3rem] shadow-2xl overflow-hidden relative flex items-center justify-center border border-slate-200">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-transparent opacity-50"></div>
                            <span className="material-symbols-outlined text-[120px] text-slate-300 relative z-10">filter_list_off</span>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="h-screen flex items-center justify-center relative z-10 px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 aspect-square bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden relative flex items-center justify-center border border-slate-700">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-50"></div>
                            <span className="material-symbols-outlined text-[120px] text-slate-600 relative z-10">business_center</span>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">02 / The Moat</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Identifying Pricing Power.</h2>
                            <p className="text-lg opacity-80 leading-relaxed">
                                Among the survivors, we look for monopolies, duopolies, or businesses with insurmountable competitive advantages. Can they pass on raw material inflation to the consumer without losing market share? If yes, it&apos;s a compounder.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="h-screen flex items-center justify-center relative z-10 px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-4 block">03 / The Valuation</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Margin of Safety.</h2>
                            <p className="text-lg opacity-80 leading-relaxed">
                                A great business at a terrible price is a terrible investment. We deploy capital only when the market offers a deep discount to the intrinsic value, providing a cushion against unforeseen macroeconomic shocks.
                            </p>
                        </div>
                        <div className="aspect-square bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden relative flex items-center justify-center border border-slate-800">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700/30 to-transparent opacity-50"></div>
                            <span className="material-symbols-outlined text-[120px] text-slate-800 relative z-10">scale</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-white text-slate-900">
                <Footer />
            </div>
        </motion.main>
    );
}
