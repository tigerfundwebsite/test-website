import { ReactNode } from 'react';

export type ProductTheme = 'pms' | 'sme' | 'hni' | 'fixed-income';

export interface ProductFeature {
    title: string;
    description: string;
    icon: string; // Material Symbols Outline icon name
}

export interface ProductDetails {
    id: string;
    name: string;
    slug: string;
    theme: ProductTheme;
    shortDescription: string;
    fullDescription: string;
    highlights: string[];
    features: ProductFeature[];
    minimumTicketSize?: string;
    tenure?: string;
    fees?: {
        fixed: string;
        performance: string;
    };
}

export const products: ProductDetails[] = [
    {
        id: "sre-tiger-pms",
        name: "SRE Tiger PMS",
        slug: "sre-tiger-pms",
        theme: "pms",
        shortDescription: "Investing in Emerging Leaders Across India’s Growth Sectors using our proprietary TIGER framework.",
        fullDescription: "Our listed equity offering targets superior risk-adjusted returns using a clear three-bucket approach – Diversified, Concentrated, and Thematic – combining growth, value, and contrarian ideas across cycles. With a disciplined process for stock selection and multi-factor risk management, the SRE Tiger PMS is engineered to ride India's structural megatrends.",
        minimumTicketSize: "₹50 Lakhs",
        tenure: "4-5 Years",
        fees: {
            fixed: "1.5% fixed fee",
            performance: "25% performance fee on alpha over benchmark (BSE 500 TRI)"
        },
        highlights: [
            "Concentrated portfolio of 15-20 stocks",
            "Focus on Core Compounders and Catalyst Triggers",
            "Alpha-driven with High Watermark shield",
            "Benchmark: BSE 500 Total Return Index"
        ],
        features: [
            {
                title: "TIGER Framework",
                description: "Tailwinds, In-Depth Research, Growth Potential, Earnings Visibility, and Risk Mitigation.",
                icon: "troubleshoot"
            },
            {
                title: "Rigorous Risk Management",
                description: "Capital Protection comes first. We cap single-name exposure, avoid leverage-heavy balance sheets, and strictly monitor down-side risks.",
                icon: "shield_locked"
            },
            {
                title: "Transparent & Aligned Fees",
                description: "Fair Fulcrum Fee structure—pay only for performance exceeding the benchmark.",
                icon: "handshake"
            }
        ]
    },
    {
        id: "sme-advisory",
        name: "Tiger Assets SME Advisory",
        slug: "sme-advisory",
        theme: "sme",
        shortDescription: "Exclusive advisory providing on-ground research, fund-raising opportunities, and private SME investments.",
        fullDescription: "A Revolutionary Leap Forward in advisory services. Tiger Assets SME Advisory goes beyond traditional research, offering exclusive 'Expertise-as-a-Service', direct access to management, and unique value-unlock opportunities within the burgeoning micro, small, and mid-cap space.",
        highlights: [
            "Deep Network Connections & Channel Checks",
            "Fund-Raising Opportunities for High-Potential Startups",
            "Limited Capacity Company Meets",
            "Scuttlebutt Approach to uncover value"
        ],
        features: [
            {
                title: "Ground-Level Intelligence",
                description: "Company-specific on-ground information gathered straight from industry networks, management meetups, and channel checks.",
                icon: "travel_explore"
            },
            {
                title: "Private Investment Access",
                description: "Exclusive deal flow providing access to curated SMEs, entrepreneurs, and high-growth private businesses.",
                icon: "key"
            },
            {
                title: "Direct Expert Access",
                description: "Round-the-clock access to sector experts and technical advisors for your investment queries.",
                icon: "support_agent"
            }
        ]
    },
    {
        id: "hni-model",
        name: "The HNI Model",
        slug: "hni-model",
        theme: "hni",
        shortDescription: "A holistic multi-asset portfolio approach recommending 40+ investment ideas for High Net Worth Individuals.",
        fullDescription: "Customized to empower HNIs, this model offers a holistic approach through equity markets, proposing over 40 investment ideas across core, momentum, and microcap/SME segments, coupled with dynamic multi-asset portfolio allocation to maximize returns.",
        highlights: [
            "Multi-Asset Allocation (Equities, Debt, Real Estate, Commodities)",
            "40+ Investment Ideas",
            "Quarterly Performance Positioning & Results Forecasting",
            "Blend of Growth and Momentum Investing"
        ],
        features: [
            {
                title: "Multi-Asset Strategy",
                description: "Broad diversification across equities, fixed income, and commodities managed by dedicated experts.",
                icon: "pie_chart"
            },
            {
                title: "Technical Breakouts",
                description: "Advanced technical chart analysis to identify and act on potential breakout points.",
                icon: "candlestick_chart"
            },
            {
                title: "Quarterly Positioning",
                description: "In-depth analysis and tracking of quarterly results to identify high-gain opportunities.",
                icon: "finance"
            }
        ]
    },
    {
        id: "fixed-income",
        name: "Fixed Income Product",
        slug: "fixed-income",
        theme: "fixed-income",
        shortDescription: "Stable, predictable returns through meticulously selected fixed-income instruments. Details coming soon.",
        fullDescription: "We are expanding our offerings to include dedicated Fixed Income products designed for capital preservation and steady yield generation. Stay tuned for complete product details and investment criteria.",
        highlights: [
            "Capital Preservation Focus",
            "Steady Yield Generation",
            "Curated Debt Instruments",
            "Diversified Risk"
        ],
        features: [
            {
                title: "Stable Returns",
                description: "Consistent yield generation designed to balance against equity market volatilities.",
                icon: "account_balance"
            },
            {
                title: "Risk Averse",
                description: "Investments evaluated heavily for credit safety and capital protection.",
                icon: "security"
            },
            {
                title: "Coming Soon",
                description: "Full details and prospectus are currently being finalized.",
                icon: "hourglass_bottom"
            }
        ]
    }
];
