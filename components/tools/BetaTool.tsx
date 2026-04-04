"use client";

import React, { useState } from "react";
import { ResultCard, fmt } from "./SharedAtoms";

interface BetaHolding { name: string; weight: string; beta: string; }

export default function BetaTool() {
    const [holdings, setHoldings] = useState<BetaHolding[]>([
        { name: "Reliance Industries", weight: "20", beta: "0.85" },
        { name: "Infosys", weight: "15", beta: "0.75" },
        { name: "HDFC Bank", weight: "15", beta: "0.90" },
        { name: "Adani Ports", weight: "10", beta: "1.20" },
        { name: "Tata Motors", weight: "10", beta: "1.45" },
    ]);
    const totalWeight = holdings.reduce((s, h) => s + (parseFloat(h.weight) || 0), 0);
    const portfolioBeta = totalWeight > 0 ? holdings.reduce((s, h) => s + (parseFloat(h.weight) || 0) / totalWeight * (parseFloat(h.beta) || 0), 0) : null;
    const addRow = () => setHoldings((p) => [...p, { name: "", weight: "", beta: "" }]);
    const removeRow = (i: number) => setHoldings((p) => p.filter((_, idx) => idx !== i));
    const update = (i: number, f: keyof BetaHolding, v: string) => setHoldings((p) => p.map((h, idx) => idx === i ? { ...h, [f]: v } : h));
    const betaDesc = portfolioBeta === null ? "" : portfolioBeta < 0.8 ? "Defensive – less volatile than the market." : portfolioBeta < 1.1 ? "Neutral – moves in line with the market." : portfolioBeta < 1.5 ? "Aggressive – amplifies market moves." : "Highly Aggressive – extreme market sensitivity.";
    return (
        <div className="flex flex-col gap-6">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b-2 border-slate-200">
                            <th className="text-left py-2 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">Stock / Fund</th>
                            <th className="text-center py-2 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">Weight %</th>
                            <th className="text-center py-2 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">Beta</th>
                            <th className="w-10" />
                        </tr>
                    </thead>
                    <tbody>
                        {holdings.map((h, i) => (
                            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="py-2 px-3"><input className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-primary" value={h.name} onChange={(e) => update(i, "name", e.target.value)} placeholder="Stock name" /></td>
                                <td className="py-2 px-3"><input type="number" className="w-20 border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-bold text-center focus:outline-none focus:border-primary" value={h.weight} onChange={(e) => update(i, "weight", e.target.value)} placeholder="0" min="0" max="100" /></td>
                                <td className="py-2 px-3"><input type="number" step="0.01" className="w-20 border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-bold text-center focus:outline-none focus:border-primary" value={h.beta} onChange={(e) => update(i, "beta", e.target.value)} placeholder="1.0" min="0" /></td>
                                <td className="py-2 px-1"><button onClick={() => removeRow(i)} className="text-slate-300 hover:text-red-400 transition-colors p-1 rounded-lg"><span className="material-symbols-outlined text-[18px]">close</span></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={addRow} className="flex items-center gap-2 text-sm font-bold text-primary border border-primary/30 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-xl transition-colors"><span className="material-symbols-outlined text-[18px]">add</span>Add Holding</button>
                <span className={`text-sm font-bold ${Math.abs(totalWeight - 100) < 0.1 ? "text-green-600" : "text-amber-600"}`}>Total Weight: {fmt(totalWeight, 1)}%</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
                <ResultCard label="Portfolio Beta" value={portfolioBeta !== null ? fmt(portfolioBeta) : "—"} highlight />
                <ResultCard label="Market Sensitivity" value={portfolioBeta !== null ? `${fmt(portfolioBeta * 100 - 100, 1)}% vs Nifty` : "—"} />
                <div className="rounded-2xl p-5 bg-slate-50 border border-slate-200 flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Classification</span>
                    <span className="text-base font-bold text-slate-800 leading-snug">{betaDesc || "—"}</span>
                </div>
            </div>
        </div>
    );
}
