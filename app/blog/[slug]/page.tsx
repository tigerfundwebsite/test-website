import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: post } = await sanityFetch({
        query: `*[_type == "blog" && slug.current == $slug][0] {
            title,
            publishedAt,
            mainImage,
            body,
            "slug": slug.current
        }`,
        params: { slug },
    });

    if (!post) return notFound();

    return (
        <article className="min-h-screen pt-48 pb-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/#insights"
                    className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:text-primary-dark transition-colors"
                >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Back to Insights
                </Link>

                {post.mainImage && (
                    <div className="relative aspect-[21/9] mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <div className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
                            {post.title}
                        </h1>
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:font-medium prose-p:text-slate-600 prose-strong:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                        <PortableText value={post.body} />
                    </div>
                </div>
            </div>
        </article>
    );
}
