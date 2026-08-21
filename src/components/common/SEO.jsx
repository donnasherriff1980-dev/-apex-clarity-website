import { useEffect } from "react";

const SITE_NAME = "Apex Clarity";
const DEFAULT_IMAGE = "https://media.base44.com/images/public/6a24770b8156364d64a8152b/89ac9e742_Testerlogo.png";
const SITE_URL = "https://www.apexclarity.co.uk";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-page SEO tags for the SPA. Applied once per route mount — index.html carries
 * sensible sitewide defaults which this overrides per page.
 */
export default function SEO({ title, description, path = "", image = DEFAULT_IMAGE, noIndex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    setCanonical(`${SITE_URL}${path}`);

    // Parked pages (currently /resources) must not be indexed while they
    // have no published content. The tag is removed again on unmount so it
    // never leaks onto the next route in this SPA.
    const existing = document.head.querySelector('meta[name="robots"]');
    if (noIndex) {
      let el = existing;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", "robots");
        document.head.appendChild(el);
      }
      el.setAttribute("content", "noindex, nofollow");
      return () => el.remove();
    }
    if (existing) existing.remove();
  }, [title, description, path, image, noIndex]);

  return null;
}
