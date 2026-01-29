import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>;
};

function upsertMetaTag(name: string, content: string) {
  const head = document.head;
  let el = head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  const head = document.head;
  let el = head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, jsonLd: Record<string, unknown>) {
  const head = document.head;
  let el = head.querySelector(`script#${CSS.escape(id)}`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    head.appendChild(el);
  }
  el.text = JSON.stringify(jsonLd);
}

export function usePageMeta({ title, description, canonicalPath, jsonLd }: PageMeta) {
  useEffect(() => {
    document.title = title;

    if (description) upsertMetaTag("description", description);

    const canonical = new URL(canonicalPath ?? window.location.pathname, window.location.origin);
    upsertCanonical(canonical.toString());

    if (jsonLd) upsertJsonLd("page-jsonld", jsonLd);
  }, [title, description, canonicalPath, jsonLd]);
}
