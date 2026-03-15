import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductClientPage from "./ProductClientPage";

// Generate static params for all known products
export function generateStaticParams() {
    return products.map((p) => ({
        slug: p.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return <ProductClientPage product={product} />;
}
