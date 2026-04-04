"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TOOLS = [
    { 
        id: "cagr-calculator", 
        title: "CAGR Calculator", 
        desc: "Calculate the precise compound annual growth rate of your historical investments.", 
        icon: "functions" 
    },
    { 
        id: "drawdown-analyzer", 
        title: "Drawdown Analyzer", 
        desc: "Visualise the time and return required to recover from massive capital loss.", 
        icon: "warning" 
    },
    { 
        id: "portfolio-beta", 
        title: "Portfolio Beta", 
        desc: "Estimate the aggregate volatility of multiple holdings versus the benchmark.", 
        icon: "compare_arrows" 
    },
    { 
        id: "xirr-calculator", 
        title: "XIRR Calculator", 
        desc: "Compute internal rate of return for portfolios with irregular cash flows.", 
        icon: "calendar_month" 
    },
];

export default function ToolsHub() {

    return (
        <section id="tools-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">All Tools</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-4">Pick a calculator, start in seconds.</h2>
                <p className="text-slate-500 font-medium mt-3 max-w-xl mx-auto">Each tool is interactive, runs entirely in your browser, and gives you instant results.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {TOOLS.map((tool, i) => (
                    <Link key={tool.id} href={`/tools/${tool.id}`} className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between cursor-pointer h-full"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="size-12 bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-primary rounded-xl flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined">{tool.icon}</span>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0">arrow_forward</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{tool.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{tool.desc}</p>
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                <span>Go to Calculator</span>
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
