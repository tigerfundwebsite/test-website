"use client";

import React, { useState } from "react";
import { Field, ResultCard, fmt } from "./SharedAtoms";

export default function DrawdownTool() {
    const [drawdown, setDrawdown] = useState("40");
    const [cagr, setCagr] = useState("15");
    const dd = parseFloat(drawdown) || 0;
    const r = (parseFloat(cagr) || 0) / 100;
    const requiredReturn = dd > 0 && dd < 100 ? (1 / (1 - dd / 100) - 1) * 100 : null;
    const recoveryYears = requiredReturn !== null && r > 0 ? Math.log(1 + requiredReturn / 100) / Math.log(1 + r) : null;
    const milestones = requiredReturn !== null && r > 0
        ? [25, 50, 75, 100].map((pct) => ({ pct, yrs: (Math.log((1 - dd / 100) * (1 + pct / 100) / (1 - dd / 100)) / Math.log(1 + r)).toFixed(1) }))
        : [];
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
                <Field label="Portfolio Drawdown" value={drawdown} onChange={setDrawdown} suffix="%" min="1" max="99" />
                <Field label="Expected Recovery CAGR" value={cagr} onChange={setCagr} suffix="%" min="1" max="50" step="0.5" />
                <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Key Insight</p>
                    <p className="text-sm text-red-700 font-medium">A {dd}% fall requires a <strong>{requiredReturn !== null ? fmt(requiredReturn) : "—"}%</strong> gain just to break even. Recovery is asymmetric.</p>
                </div>
                {milestones.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Recovery Milestones (yrs)</span>
                        <div className="grid grid-cols-4 gap-2">
                            {milestones.map((m) => (
                                <div key={m.pct} className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                                    <div className="text-xs text-slate-500 font-bold">+{m.pct}%</div>
                                    <div className="text-sm font-bold text-slate-800">{m.yrs}y</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <ResultCard label="Required Return to Break Even" value={requiredReturn !== null ? `${fmt(requiredReturn)}%` : "—"} highlight />
                <ResultCard label="Recovery Time (at CAGR)" value={recoveryYears !== null ? `${fmt(recoveryYears, 1)} Years` : "—"} />
                <ResultCard label="Portfolio Left" value={`${fmt(100 - dd, 0)}%`} />
            </div>
        </div>
    );
}
