"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        id: 1,
        quote: "They have demonstrated a credible record in identifying sound companies that have been ignored or undervalued due to corporate and market events. Their ability to look through the noise and singularly focus on the key aspects in a company make them a fine stock-picker. I wish them all the very best in their future endeavours.",
        author: "Vishal Bhargava",
        role: "Columnist-CNBC/Moneycontrol, Ex-CLSA/ET",
        avatar: "/vishal.jpeg",
    },
    {
        id: 2,
        quote: "Amazing stock picking skills which is evident by the mind-blowing returns that some of their recent picks have given to their investor friends. They have unique ability of picking small cap ideas through their thorough research. Their ability to be always on top of things is Outstanding. I have no doubt that their stellar performance would continue.",
        author: "Abhishekh Agarwal",
        role: "Partner SRBC & Co LLP",
        avatar: "/abhishek.jpeg",
    },
    {
        id: 3,
        quote: "Rarely you come across people, who have high depth understanding of business, financial understanding and mindset of an investor! They have been genuinely checking all boxes. I have seen my portfolio booming because of their guidance and being member of your prime batch! Keep up the good show and don't forget to include me in your product for momentum investment!",
        author: "Sachin Arora",
        role: "Head Data & AI, AWS India",
        avatar: "/sachin-arora.avif",
    },
]

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
    const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const handleSelect = (index: number) => {
        if (index === activeIndex || isAnimating) return
        setIsAnimating(true)

        setTimeout(() => {
            setDisplayedQuote(testimonials[index].quote)
            setDisplayedRole(testimonials[index].role)
            setActiveIndex(index)
            setTimeout(() => setIsAnimating(false), 400)
        }, 200)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (activeIndex + 1) % testimonials.length
            handleSelect(nextIndex)
        }, 6000)
        return () => clearInterval(timer)
    }, [activeIndex, isAnimating])

    return (
        <div className="flex flex-col items-center gap-10 py-16">
            {/* Quote Container */}
            <div className="relative px-8">
                <span className="absolute -left-2 -top-6 text-7xl font-serif text-slate-800/[0.06] select-none pointer-events-none">
                    "
                </span>

                <p
                    className={cn(
                        "text-xl md:text-2xl font-light text-slate-900 text-center max-w-4xl leading-relaxed transition-all duration-400 ease-out",
                        isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
                    )}
                >
                    {displayedQuote}
                </p>

                <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-slate-800/[0.06] select-none pointer-events-none">
                    "
                </span>
            </div>

            <div className="flex flex-col items-center gap-6 mt-2">
                {/* Role text */}
                <p
                    className={cn(
                        "text-xs text-slate-500 tracking-[0.2em] uppercase transition-all duration-500 ease-out",
                        isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
                    )}
                >
                    {displayedRole}
                </p>

                <div className="flex items-center justify-center gap-2">
                    {testimonials.map((testimonial, index) => {
                        const isActive = activeIndex === index
                        const isHovered = hoveredIndex === index && !isActive
                        const showName = isActive || isHovered

                        return (
                            <button
                                key={testimonial.id}
                                onClick={() => handleSelect(index)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={cn(
                                    "relative flex items-center gap-0 rounded-full cursor-pointer",
                                    "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                    isActive ? "bg-primary shadow-lg shadow-primary/20" : "bg-transparent hover:bg-orange-50",
                                    showName ? "pr-4 pl-2 py-2" : "p-0.5",
                                )}
                            >
                                {/* Avatar with smooth ring animation */}
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.author}
                                        className={cn(
                                            "w-14 h-14 md:w-16 md:h-16 rounded-full object-cover",
                                            "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                            isActive ? "ring-4 ring-primary/30" : "ring-0",
                                            !isActive && "hover:scale-105",
                                        )}
                                    />
                                </div>

                                <div
                                    className={cn(
                                        "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                        showName ? "grid-cols-[1fr] opacity-100 ml-4" : "grid-cols-[0fr] opacity-0 ml-0",
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <span
                                            className={cn(
                                                "text-base font-semibold whitespace-nowrap block",
                                                "transition-colors duration-300",
                                                isActive ? "text-white" : "text-slate-900",
                                            )}
                                        >
                                            {testimonial.author}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
