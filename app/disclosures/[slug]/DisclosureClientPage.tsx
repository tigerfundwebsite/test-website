"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { DisclosureDetails, disclosures } from "@/data/disclosures";
import Link from "next/link";

export default function DisclosureClientPage({ document }: { document: DisclosureDetails }) {
    // Basic text formatting function
    const renderContent = (text: string) => {
        return text.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('•') || paragraph.startsWith('■') || paragraph.startsWith('✔')) {
                return (
                    <ul key={index} className="list-inside space-y-2 mb-6 ml-4 text-slate-600 font-medium leading-relaxed">
                        {paragraph.split('\n').map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )
            } else if (paragraph.match(/^[A-Z0-9.\s]+$/) && paragraph.length < 100) {
                return <h3 key={index} className="text-xl font-bold text-slate-800 mb-4 mt-8">{paragraph}</h3>
            } else {
                return <p key={index} className="text-slate-600 font-medium leading-relaxed mb-6">{paragraph}</p>
            }
        });
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <section className="pt-32 pb-12 bg-white border-b border-slate-200 shadow-sm relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary text-sm">gavel</span>
                        <span className="text-orange-900 text-sm font-bold uppercase tracking-wider">Legal & Compliance</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-slate-900 mb-4">
                        {document.title}
                    </h1>
                    <p className="text-slate-500 font-medium">Last updated: {document.lastUpdated}</p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 relative z-0">
                {/* Sidebar Navigation */}
                <aside className="lg:w-1/4 shrink-0">
                    <div className="sticky top-32 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">Disclosures Index</h4>
                        <nav className="flex flex-col space-y-2">
                            {disclosures.map((d) => (
                                <Link
                                    key={d.slug}
                                    href={`/disclosures/${d.slug}`}
                                    className={`px-4 py-3 rounded-xl transition-all font-medium text-sm border ${d.slug === document.slug
                                            ? "bg-orange-50 text-primary border-orange-200 shadow-inner"
                                            : "text-slate-600 border-transparent hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                >
                                    {d.title}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <h4 className="font-bold text-slate-800 mb-2">Need Guidance?</h4>
                            <p className="text-sm text-slate-500 mb-4">You can reach our compliance team directly for any legal inquiries.</p>
                            <a href="mailto:invest@tigerassets.in" className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                                <span className="material-symbols-outlined text-[18px]">mail</span> contact compliance
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <article className="lg:w-3/4 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
                    <div className="relative z-10">
                        {renderContent(document.content)}
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}
