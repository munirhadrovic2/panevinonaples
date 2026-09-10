// Server-rendered JSON-LD. next/script would inject it client-side only,
// which hides it from crawlers that don't execute JavaScript.
export default function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
    );
}
