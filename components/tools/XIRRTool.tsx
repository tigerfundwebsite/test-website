"use client";

import React, { useState } from "react";
import { ResultCard, fmt, fmtCrore } from "./SharedAtoms";

interface CashFlow { date: string; amount: string; }

function computeXIRR(cashflows: { date: Date; amount: number }[]): number | null {
    if (cashflows.length < 2) return null;
    const start = cashflows[0].date;
    const days = cashflows.map((c) => (c.date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365));
    const npv = (r: number) => cashflows.reduce((acc, c, i) => acc + c.amount / Math.pow(1 + r, days[i]), 0);
    const dnpv = (r: number) => cashflows.reduce((acc, c, i) => acc - (days[i] * c.amount) / Math.pow(1 + r, days[i] + 1), 0);
    let r = 0.1;
    for (let iter = 0; iter < 1000; iter++) {
        const fn = npv(r);
        const dfn = dnpv(r);
        if (Math.abs(dfn) < 1e-12) break;
        const rNew = r - fn / dfn;
        if (Math.abs(rNew - r) < 1e-8) return rNew;
        r = rNew;
    }
    return null;
}

export default function XIRRTool() {
    const [cashflows, setCashflows] = useState<CashFlow[]>([
        { date: "2020-01-01", amount: "-100000" },
        { date: "2021-06-01", amount: "-50000" },
        { date: "2022-03-15", amount: "-75000" },
        { date: "2025-01-01", amount: "350000" },
    ]);
    const updateCF = (i: number, f: keyof CashFlow, v: string) => setCashflows((p) => p.map((cf, idx) => idx === i ? { ...cf, [f]: v } : cf));
    const addCF = () => setCashflows((p) => [...p, { date: new Date().toISOString().slice(0, 10), amount: "" }]);
    const removeCF = (i: number) => setCashflows((p) => p.filter((_, idx) => idx !== i));
    const parsed = cashflows.map((cf) => ({ date: new Date(cf.date), amount: parseFloat(cf.amount) })).filter((cf) => !isNaN(cf.date.getTime()) && !isNaN(cf.amount));
    const xirr = parsed.length >= 2 ? computeXIRR(parsed) : null;
    const totalInvested = Math.abs(parsed.filter((c) => c.amount < 0).reduce((s, c) => s + c.amount, 0));
    const totalReturned = parsed.filter((c) => c.amount > 0).reduce((s, c) => s + c.amount, 0);
    return (
        <div className="flex flex-col gap-6">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b-2 border-slate-200">
                            <th className="text-left py-2 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">Date</th>
                            <th className="text-left py-2 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">Amount (−ve = outflow)</th>
                            <th className="w-10" />
                        </tr>
                    </thead>
                    <tbody>
                        {cashflows.map((cf, i) => (
                            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="py-2 px-3"><input type="date" className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-primary" value={cf.date} onChange={(e) => updateCF(i, "date", e.target.value)} /></td>
                                <td className="py-2 px-3">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm font-bold ${parseFloat(cf.amount) < 0 ? "text-red-500" : "text-green-600"}`}>₹</span>
                                        <input type="number" className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-bold text-slate-800 focus:outline-none focus:border-primary w-40" value={cf.amount} onChange={(e) => updateCF(i, "amount", e.target.value)} placeholder="Amount" />
                                    </div>
                                </td>
                                <td className="py-2 px-1"><button onClick={() => removeCF(i)} className="text-slate-300 hover:text-red-400 transition-colors p-1 rounded-lg"><span className="material-symbols-outlined text-[18px]">close</span></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={addCF} className="flex items-center gap-2 text-sm font-bold text-primary border border-primary/30 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-xl transition-colors w-fit"><span className="material-symbols-outlined text-[18px]">add</span>Add Cash Flow</button>
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
                <ResultCard label="XIRR" value={xirr !== null && isFinite(xirr) ? `${fmt(xirr * 100)}%` : "—"} highlight />
                <ResultCard label="Total Invested" value={totalInvested > 0 ? fmtCrore(totalInvested) : "—"} />
                <ResultCard label="Total Returned" value={totalReturned > 0 ? fmtCrore(totalReturned) : "—"} />
            </div>
            <p className="text-xs text-slate-400 italic">Enter negative values for outflows (purchases) and positive for inflows (redemptions).</p>
        </div>
    );
}
