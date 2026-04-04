import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CAGRTool from "@/components/tools/CAGRTool";
import DrawdownTool from "@/components/tools/DrawdownTool";
import BetaTool from "@/components/tools/BetaTool";
import XIRRTool from "@/components/tools/XIRRTool";
import Footer from "@/components/Footer";

// ─── Tool Route Config ───────────────────────────────────────────────────────

const TOOL_MAP = {
    "cagr-calculator": {
        title: "CAGR Calculator",
        description: "Calculate the precise compound annual growth rate of your historical investments with our institutional-grade CAGR tool.",
        component: <CAGRTool />,
        icon: "functions",
    },
    "drawdown-analyzer": {
        title: "Drawdown Analyzer",
        description: "Visualise the time and return required to recover from massive capital loss. Understand the asymmetry of investment risk.",
        component: <DrawdownTool />,
        icon: "warning",
    },
    "portfolio-beta": {
        title: "Portfolio Beta",
        description: "Estimate the aggregate volatility of multiple holdings versus the benchmark using our portfolio beta calculator.",
        component: <BetaTool />,
        icon: "compare_arrows",
    },
    "xirr-calculator": {
        title: "XIRR Calculator",
        description: "Compute internal rate of return for portfolios with irregular cash flows. The most accurate way to measure portfolio performance.",
        component: <XIRRTool />,
        icon: "calendar_month",
    },
};

type Params = { slug: string };

export async function generateStaticParams() {
    return Object.keys(TOOL_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const tool = TOOL_MAP[slug as keyof typeof TOOL_MAP];
    if (!tool) return { title: "Tool Not Found" };

    return {
        title: `${tool.title} | SRE Tiger PMS`,
        description: tool.description,
        openGraph: {
            title: tool.title,
            description: tool.description,
            type: "website",
        },
    };
}

export default async function ToolPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const tool = TOOL_MAP[slug as keyof typeof TOOL_MAP];

    if (!tool) notFound();

    return (
        <>
            <main className="min-h-screen bg-white">
                {/* Header / Breadcrumb */}
                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-12">
                    <div className="max-w-4xl mx-auto px-6">
                        <Link href="/tools" className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-6 hover:translate-x-[-4px] transition-transform">
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            Back to All Tools
                        </Link>
                        
                        <div className="flex items-center gap-5">
                            <div className="size-14 bg-orange-50 text-primary rounded-2xl flex items-center justify-center border border-orange-100">
                                <span className="material-symbols-outlined text-[28px]">{tool.icon}</span>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{tool.title}</h1>
                                <p className="text-slate-500 font-medium mt-1">{tool.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tool Content */}
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 text-left">
                        {tool.component}
                    </div>

                    {/* Footer Insight */}
                    <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4 text-left">
                        <span className="material-symbols-outlined text-slate-400 mt-0.5">info</span>
                        <div>
                            <p className="text-sm text-slate-600 leading-relaxed italic">
                                This calculator is designed for institutional-grade financial analysis. Values are illustrative and for educational purposes only. Always consult with a financial advisor before making investment decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
