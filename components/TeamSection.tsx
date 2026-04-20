"use client";

import { motion } from "framer-motion";

export default function TeamSection() {
    return (
        <section id="team" className="py-16 md:py-20 bg-accent-cream relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative lg:col-span-5"
                    >
                        <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                            <img alt="Portrait of Raghav Chaudhary, Founder of Tiger Assets" className="w-full h-auto object-cover aspect-square md:aspect-[4/5] object-top" src="/raghav.jpg" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 md:p-8 pt-12 md:pt-16">
                                <p className="text-white font-serif italic text-lg md:text-2xl leading-snug">&quot;Our primary duty is the preservation of capital, followed by its consistent growth.&quot;</p>
                                <p className="text-orange-200 text-xs md:text-sm mt-3 md:mt-4 font-bold tracking-wide uppercase"> Raghav Chaudhary, Founder</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <h2 className="text-slate-900 font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Raghav Chaudhary</h2>
                        <p className="text-primary font-bold tracking-wider uppercase text-sm mb-6 inline-block bg-orange-50 px-3 py-1 rounded-full border border-orange-100">Founder, Tiger Assets</p>

                        <div className="prose prose-slate max-w-none mb-8">
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                Raghav Chaudhary is the visionary Founder of Tiger Assets. Under his leadership, the Mumbai-based financial services firm has rapidly grown, proudly serving over <strong>1,500 investors</strong> in the past 5 years.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                An alumnus of the Lala Lajpatrai Institute of Management, Raghav specializes in investment banking and fundraising, having successfully closed more than a dozen pre and post-listing transactions. He is known for combining rigorous, data-driven research with ground-level validation.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition-all group">
                                <div className="size-10 bg-orange-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">campaign</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1.5 text-base">Recognized Finfluencer</h3>
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed">With 70,000+ followers on X, Raghav regularly shares actionable insights on equity markets.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md transition-all group">
                                <div className="size-10 bg-orange-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">handshake</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1.5 text-base">Strategic Mentorship</h3>
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed">He actively mentors founders to navigate markets and build long-term value.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
