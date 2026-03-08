"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import type { Image as SanityImage } from "sanity";

type Blog = {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    mainImage: SanityImage;
};

export default function BlogsSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                console.log("Fetching blogs from Sanity...");
                const data = await client.fetch<Blog[]>(`
                    *[_type == "blog"] | order(publishedAt desc)[0...3] {
                        _id,
                        title,
                        slug,
                        publishedAt,
                        excerpt,
                        mainImage
                    }
                `);
                console.log("Blogs fetched successfully:", data);
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    return (
        <section id="insights" className="py-20 bg-background-light border-y border-slate-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-3 py-1 rounded-full">Insights & Perspectives</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-4">Market Intelligence</h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
                        Latest thoughts, research, and analysis from the SRE Tiger desk.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-slate-500 font-medium">No insights published yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.map((blog, i) => (
                            <Link
                                key={blog._id}
                                href={`/blog/${blog.slug.current}`}
                                className="flex"
                            >
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col w-full"
                                >
                                    <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                                        {blog.mainImage ? (
                                            <Image
                                                src={urlFor(blog.mainImage)?.url() as string}
                                                alt={blog.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-orange-50/50 flex items-center justify-center text-primary/20">
                                                <span className="material-symbols-outlined text-5xl">newspaper</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                            {new Date(blog.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-6 line-clamp-3 font-medium flex-grow">
                                            {blog.excerpt}
                                        </p>
                                        <div className="mt-auto">
                                            <div className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors cursor-pointer">
                                                Read Article
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
