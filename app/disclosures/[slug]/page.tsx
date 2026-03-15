import { disclosures } from "@/data/disclosures";
import { notFound } from "next/navigation";
import DisclosureClientPage from "./DisclosureClientPage";

export function generateStaticParams() {
    return disclosures.map((p) => ({
        slug: p.slug,
    }));
}

export default async function DisclosurePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const document = disclosures.find((p) => p.slug === slug);

    if (!document) {
        notFound();
    }

    return <DisclosureClientPage document={document} />;
}
