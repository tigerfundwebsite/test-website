import React from "react";
import { Metadata } from "next";
import ToolsHub from "@/components/tools/ToolsHub";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Investment Tools & Calculators | SRE Tiger PMS",
    description: "Institutional-grade investment calculators including CAGR, Drawdown analysis, Portfolio Beta, and XIRR. Precision tools for informed investors.",
    openGraph: {
        title: "Investment Tools | Institutional Wealth Creation",
        description: "Precision tools for the informed investor. Six institutional-grade calculators built to quantify compounding and stress-test drawdowns.",
    }
};

export default function ToolsPage() {
    return (
        <>
            <main className="min-h-screen bg-slate-50 flex flex-col items-center pt-40 pb-16">
                <ToolsHub />
            </main>
            <Footer />
        </>
    );
}
