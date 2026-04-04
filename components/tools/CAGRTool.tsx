"use client";

import React, { useState } from "react";
import { Field, ResultCard, fmt, fmtCrore } from "./SharedAtoms";

export default function CAGRTool() {
    const [initial, setInitial] = useState("100000");
    const [final, setFinal] = useState("500000");
    const [years, setYears] = useState("7");
    const iv = parseFloat(initial) || 0, fv = parseFloat(final) || 0, yr = parseFloat(years) || 1;
    const cagr = iv > 0 && fv > 0 && yr > 0 ? (Math.pow(fv / iv, 1 / yr) - 1) * 100 : null;
    const abs = iv > 0 ? ((fv - iv) / iv) * 100 : null;
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
                <Field label="Initial Investment" value={initial} onChange={setInitial} prefix="₹" min="1" step="1000" />
                <Field label="Final Value" value={final} onChange={setFinal} prefix="₹" min="1" step="1000" />
                <Field label="Investment Period" value={years} onChange={setYears} suffix="Years" min="1" max="50" step="0.5" />
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <ResultCard label="CAGR" value={cagr !== null ? `${fmt(cagr)}%` : "—"} highlight />
                <ResultCard label="Absolute Return" value={abs !== null ? `${fmt(abs)}%` : "—"} />
                <ResultCard label="Total Gain" value={iv > 0 && fv > 0 ? fmtCrore(fv - iv) : "—"} />
                <p className="text-xs text-slate-400 italic">CAGR = (Final / Initial)^(1/Years) − 1</p>
            </div>
        </div>
    );
}
