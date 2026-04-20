"use client";

import { useState } from "react";

export default function FIPSection() {
    // 30% default fund return (matching example row 1)
    const [investmentAmount, setInvestmentAmount] = useState<number>(10000000);
    const [portfolioReturn, setPortfolioReturn] = useState<number>(18);

    // Formatter for Indian Rupees
    const formatINR = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(Math.round(value));
    };

    // Formatter for Crores/Lakhs display
    const formatAmountDisplay = (value: number) => {
        if (value >= 10000000) {
            const cr = value / 10000000;
            return `₹${Number.isInteger(cr) ? cr : cr.toFixed(2)} Cr`;
        } else if (value >= 100000) {
            const lk = value / 100000;
            return `₹${Number.isInteger(lk) ? lk : lk.toFixed(2)} L`;
        }
        return `₹${value.toLocaleString('en-IN')}`;
    };

    // --- Calculations ---
    const totalReturnAmount = investmentAmount * (portfolioReturn / 100);
    const endingGrossValue = investmentAmount + totalReturnAmount;

    // SRE Tiger Fee Calculation (from SRE PDF Structure)
    const tigerFixedFeeRate = 0;
    const tigerPerformanceRate = 0.15;
    const tigerHurdleRate = 0.075;

    const tigerFixedFee = investmentAmount * tigerFixedFeeRate;
    const tigerPostFixedReturnAmount = totalReturnAmount - tigerFixedFee;
    
    const tigerHurdleAmount = investmentAmount * tigerHurdleRate;

    // Alpha is the excess return above the 7.5% fixed hurdle
    const alphaAmount = Math.max(0, tigerPostFixedReturnAmount - tigerHurdleAmount);
    const tigerFulcrumFee = alphaAmount * tigerPerformanceRate;
    const tigerTotalFee = tigerFixedFee + tigerFulcrumFee;
    const tigerNetReturn = totalReturnAmount - tigerTotalFee;
    const endingNetValueTiger = investmentAmount + tigerNetReturn;

    // Industry Standard Fee Calculation
    const indFixedFeeRate = 0.01; // 1%
    const indPerformanceRate = 0.20; // 20%
    const indHurdleRate = 0.08; // 8%

    const indFixedFee = investmentAmount * indFixedFeeRate;
    const indPostFixedReturnAmount = totalReturnAmount - indFixedFee;
    const indHurdleAmount = investmentAmount * indHurdleRate;
    const indPerformanceFee = Math.max(0, indPostFixedReturnAmount - indHurdleAmount) * indPerformanceRate;
    const indTotalFee = indFixedFee + indPerformanceFee;
    const indNetReturn = totalReturnAmount - indTotalFee;
    const endingNetValueInd = investmentAmount + indNetReturn;

    const extraWealthCreated = indTotalFee - tigerTotalFee;

    const getInsight = (savings: number) => {
        if (savings <= 0) return "Optimize your returns.";
        if (savings <= 50000) return "Enough for a premium weekend getaway.";
        if (savings <= 150000) return "Equivalent to a high-end luxury smartphone or watch.";
        if (savings <= 300000) return "Could fund an international family vacation.";
        if (savings <= 1000000) return "Equivalent to a down payment on a premium car.";
        if (savings <= 2500000) return "Substantial capital for a new side business or venture.";
        if (savings <= 5000000) return "Could significantly fund a prestigious Ivy League education.";
        return "Generation-changing wealth retained to grow exponentially.";
    };

    const tableData = [
        {
            label: "Initial Investment",
            tigerValue: formatINR(investmentAmount),
            indValue: formatINR(investmentAmount),
        },
        {
            label: "Index Return / Hurdle",
            tigerValue: `7.5% Hurdle`,
            indValue: "8% Hurdle",
        },
        {
            label: "Fixed Fees",
            tigerValue: formatINR(tigerFixedFee),
            tigerSubtext: `(Nil)`,
            indValue: formatINR(indFixedFee),
            indSubtext: `(${indFixedFeeRate * 100}%)`,
        },
        {
            label: "Performance / Fulcrum Fee",
            tigerValue: formatINR(tigerFulcrumFee),
            tigerSubtext: `(${tigerPerformanceRate * 100}% on Alpha)`,
            indValue: formatINR(indPerformanceFee),
            indSubtext: `(${indPerformanceRate * 100}% above 8%)`,
            highlightTiger: true,
            tooltip: `Tiger Alpha Amount: ${formatINR(alphaAmount)}`
        },
        {
            label: "Total Fees",
            tigerValue: formatINR(tigerTotalFee),
            indValue: formatINR(indTotalFee),
            isTotal: true,
            highlightIndRed: indTotalFee > tigerTotalFee,
        },
        {
            label: "Net Ending Value",
            tigerValue: formatINR(endingNetValueTiger),
            indValue: formatINR(endingNetValueInd),
            isFinal: true,
            highlightIndRed: endingNetValueInd < endingNetValueTiger,
        }
    ];

    return (
        <section id="fip" className="py-20 bg-orange-50/30 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 mb-4 inline-block">Transparent Structure</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                        Fees Based on True Alpha
                    </h2>
                    <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto font-medium leading-relaxed">
                        We charge zero fixed fees. You only pay a 15% performance fee when your returns exceed our strict 7.5% hurdle rate. Meaning we win only when you win.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Calculator Controls Panel */}
                    <div className="lg:col-span-4 bg-white border border-slate-200 p-8 flex flex-col h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                            <div className="size-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[20px]">tune</span>
                            </div>
                            Parameters
                        </h3>

                        <div className="space-y-8 flex-grow">
                            {/* Investment Input */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Initial Investment</label>
                                <div className="flex flex-col xl:flex-row gap-3">
                                    <div className="text-primary text-xs font-bold bg-orange-50 w-fit px-4 py-2 rounded-full border border-orange-100/50 self-start xl:self-center">
                                        {formatAmountDisplay(investmentAmount)}
                                    </div>
                                    <div className="relative flex-grow">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                                        <input
                                            type="number"
                                            value={investmentAmount || ''}
                                            onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                                            className="w-full text-right pl-8 pr-4 py-2.5 text-sm font-bold text-slate-900 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                            placeholder="10000000"
                                        />
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="5000000"
                                    max="250000000"
                                    step="500000"
                                    value={investmentAmount}
                                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary mt-4"
                                />
                                <div className="flex justify-between mt-1 text-[10px] text-slate-400 font-medium tracking-wide">
                                    <span>₹50 L</span>
                                    <span>₹25 Cr+</span>
                                </div>
                            </div>

                            {/* Fund Return Rate Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Fund Return</label>
                                    <span className="text-sm font-bold text-primary">{portfolioReturn}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="50"
                                    step="1"
                                    value={portfolioReturn}
                                    onChange={(e) => setPortfolioReturn(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between mt-1 text-[10px] text-slate-400 font-medium tracking-wide">
                                    <span>5%</span>
                                    <span>50%</span>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Results / Comparison Panel */}
                    <div className="lg:col-span-8 flex flex-col h-full gap-6">
                        {/* Summary Header Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Starting Gross Value</h3>
                                <p className="text-3xl font-bold text-slate-900">{formatINR(investmentAmount)}</p>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl shadow-sm">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Ending Gross Value</h3>
                                <p className="text-3xl font-bold text-slate-900">{formatINR(endingGrossValue)}</p>
                            </div>
                        </div>

                        {/* Detailed Comparison Table Map */}
                        <div className="bg-white border border-slate-200 flex-grow overflow-hidden rounded-2xl shadow-sm">
                            {/* Desktop Header */}
                            <div className="hidden md:grid grid-cols-[1.5fr_1fr_1fr] bg-slate-50/50 border-b border-slate-200">
                                <div className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-slate-500">Parameter</div>
                                <div className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-[#e98300] border-x border-orange-100 bg-orange-50/50 text-center flex items-center justify-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#e98300]"></span> Tiger Fund
                                </div>
                                <div className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-slate-500 text-center">Industry Standard</div>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col text-sm">
                                {tableData.map((row, idx) => (
                                    <div key={idx} className={`flex flex-col md:grid md:grid-cols-[1.5fr_1fr_1fr] border-b border-slate-100 hover:bg-slate-50 transition-colors ${row.isTotal ? 'bg-orange-50/10' : ''}`}>
                                        <div
                                            className={`py-3 px-4 sm:px-6 md:py-4 text-slate-600 ${row.isTotal || row.isFinal ? 'font-bold text-slate-900 bg-slate-50 md:bg-transparent' : 'font-bold md:font-normal bg-slate-50 md:bg-transparent'} border-b md:border-b-0 border-slate-100 flex items-center gap-1 ${row.tooltip ? 'cursor-help' : ''}`}
                                            title={row.tooltip || ""}
                                        >
                                            {row.label} {row.tooltip && <span className="material-symbols-outlined text-[14px] text-slate-400">info</span>}
                                        </div>
                                        <div className="flex justify-between md:contents">
                                            <div className={`py-3 px-4 sm:px-6 md:py-4 ${row.highlightTiger ? 'font-bold text-primary' : row.isTotal ? 'font-bold text-[#e98300] bg-orange-50/50' : 'font-bold text-slate-900'} md:border-x border-slate-100 md:text-center w-1/2 md:w-auto relative border-r md:border-r-0 border-slate-100`}>
                                                <div className="md:hidden text-[10px] uppercase text-[#e98300] font-bold mb-1 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#e98300] inline-block"></span> Tiger Fund
                                                </div>
                                                <div className={`${row.isFinal ? 'text-lg' : ''}`}>{row.tigerValue}</div>
                                                {row.tigerSubtext && <div className="text-[11px] text-slate-400 font-normal mt-0.5">{row.tigerSubtext}</div>}
                                            </div>
                                            <div className={`py-3 px-4 sm:px-6 md:py-4 font-medium text-slate-600 md:text-center w-1/2 md:w-auto`}>
                                                <div className="md:hidden text-[10px] uppercase text-slate-400 font-bold mb-1">Industry Standard</div>
                                                <div className={`${row.highlightIndRed ? 'text-red-500 font-bold' : ''} ${row.isFinal && row.highlightIndRed ? 'bg-red-50 py-1 border border-red-100 px-2 rounded-md block w-fit md:mx-auto ml-0' : ''} ${row.isFinal && !row.highlightIndRed ? 'text-base font-bold' : ''} ${row.isTotal ? 'text-base font-bold' : ''}`}>{row.indValue}</div>
                                                {row.indSubtext && <div className="text-[11px] text-slate-400 font-normal mt-0.5">{row.indSubtext}</div>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Extra Wealth Created Highlight */}
                        <div className={`mt-2 ${extraWealthCreated >= 0 ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-slate-200'} border p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6`}>
                            <div>
                                <h4 className={`font-bold text-sm uppercase tracking-widest mb-2 ${extraWealthCreated >= 0 ? 'text-primary' : 'text-slate-700'}`}>
                                    Alpha Generated
                                </h4>
                                <p className="text-slate-600 text-sm max-w-sm mb-4">
                                    The additional wealth generated by choosing Tiger PMS over a traditional mutual fund strategy.
                                </p>
                                <div className="flex items-center gap-2 text-primary text-sm font-medium bg-white px-4 py-2 rounded-full border border-orange-100 w-fit">
                                    <span className="material-symbols-outlined text-[18px]">verified</span>
                                    After all typical fees
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`block text-4xl font-bold tracking-tight ${extraWealthCreated >= 0 ? 'text-primary' : 'text-slate-900'}`}>
                                    {extraWealthCreated >= 0 ? '+' : ''}{formatINR(extraWealthCreated)}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-12 text-center border-t border-slate-200/60 pt-8">
                    <p className="text-xs text-slate-500 max-w-4xl mx-auto leading-relaxed">
                        *Assuming investment of 1 Cr and invested for full 1 year. The High Watermark Principle is your shield against double dipping. Fees apply only to fresh profits, ensuring you pay for performance, not repeats. Post-fixed-fee performance fee calculations are standard. Actual figures may vary based on exact daily performance NAV calculations over time.
                    </p>
                </div>
            </div>
        </section>
    );
}
