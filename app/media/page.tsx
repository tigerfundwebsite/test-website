"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function MediaRoom() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-32 md:pt-48 pb-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="size-16 bg-white border border-slate-200 shadow-sm rounded-2xl mx-auto flex items-center justify-center mb-6 text-primary"
                    >
                        <span className="material-symbols-outlined text-[32px]">podcasts</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
                    >
                        Media & Talks
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                    >
                        Catch Raghav and the team discussing markets, thesis development, and macroeconomic tailwinds across various platforms.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Recent Podcasts</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Placeholder Podcast Embeds / Cards */}
                    <div className="bg-white border text-center border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[250px] shadow-sm group hover:border-orange-200 transition-colors cursor-pointer">
                        <div className="size-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                            <span className="material-symbols-outlined text-3xl">play_arrow</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">The Unseen Tailwinds: Manufacturing</h4>
                        <p className="text-slate-500 font-medium">Guest Speaker • Capital Compounders Podcast</p>
                    </div>

                    <div className="bg-white border text-center border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[250px] shadow-sm group hover:border-orange-200 transition-colors cursor-pointer">
                        <div className="size-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                            <span className="material-symbols-outlined text-3xl">play_arrow</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Navigating Midcap Valuations</h4>
                        <p className="text-slate-500 font-medium">Panelist • Economic Times Summit</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Articles & Citations</h3>
                        <div className="space-y-6">
                            {[
                                { pub: "Mint", date: "Oct 2025", title: "Why Tiger Assets is betting big on rural consumption revival" },
                                { pub: "MoneyControl", date: "Aug 2025", title: "The anatomy of a multi-bagger in the capital goods space" },
                                { pub: "Bloomberg", date: "May 2025", title: " राघव चौधरी on the structural shift in Indian IT" }
                            ].map((article, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="w-24 shrink-0">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">{article.date}</span>
                                        <span className="font-bold text-primary">{article.pub}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 leading-snug">{article.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="bg-slate-900 rounded-3xl p-8 text-white sticky top-32 shadow-xl shadow-slate-900/20">
                            <h3 className="text-xl font-serif font-bold mb-4">Media Inquiries</h3>
                            <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                                For press comments, podcast appearances, or speaker requests regarding macroeconomics or equity markets.
                            </p>
                            <a href="mailto:media@tigerassets.in" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
                                Contact Press Team
                            </a>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
