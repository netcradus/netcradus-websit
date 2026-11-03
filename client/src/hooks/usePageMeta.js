import { useEffect } from "react";
import { getSeoMetaByPath } from "../data/seoMeta";

const BASE_URL = "https://www.netcradus.com";
const SITE_NAME = "Netcradus";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.png`;
const DEFAULT_KEYWORDS = [
  "cybersecurity",
  "enterprise security",
  "managed security services",
  "threat detection",
  "AI SIEM",
  "SOAR automation",
  "autonomous cyber immune system",
];

function setMetaTag(attribute, key, content) {
  if (!content) {
    return;
  }

  let meta = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function setStructuredData(data) {
  const scriptId = "seo-ld-json";
  let script = document.getElementById(scriptId);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function usePageMeta(titleOrObj, description, options = {}) {
  useEffect(() => {
    const windowPath = window.location.pathname || "/";
    const normalizedPath = windowPath === "/" ? "/" : windowPath.replace(/\/+$/, "");
    const matchedMeta = getSeoMetaByPath(normalizedPath);

    let title = "";
    let desc = "";
    let opts = options;

    if (typeof titleOrObj === "object" && titleOrObj !== null) {
      title = titleOrObj.title;
      desc = titleOrObj.description;
      opts = { ...titleOrObj, ...options };
    } else {
      title = titleOrObj;
      desc = description;
    }

    const finalTitle = title || matchedMeta?.title || "Netcradus | Autonomous Cyber Defense & Enterprise Security";
    const finalDescription = desc || matchedMeta?.description || "Netcradus delivers autonomous cyber immune systems, managed security services, and enterprise cybersecurity solutions.";
    const rawKeywords = opts.keywords || matchedMeta?.keywords || DEFAULT_KEYWORDS;
    const finalKeywords = Array.isArray(rawKeywords) ? rawKeywords : [rawKeywords];
    const finalRobots = opts.robots || matchedMeta?.robots || "index, follow, max-image-preview:large";
    const finalType = opts.type || matchedMeta?.type || "website";
    const finalPath = opts.path || normalizedPath;
    const canonicalUrl = opts.canonical || `${BASE_URL}${finalPath}`;
    const imageUrl = opts.image?.startsWith("http")
      ? opts.image
      : opts.image
        ? `${BASE_URL}${opts.image}`
        : DEFAULT_IMAGE;

    if (finalTitle) {
      document.title = finalTitle;
    }

    if (finalDescription) {
      setMetaTag("name", "description", finalDescription);
    }

    setMetaTag("name", "keywords", finalKeywords.join(", "));
    setMetaTag("name", "robots", finalRobots);

    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:type", finalType);
    setMetaTag("property", "og:title", finalTitle);
    setMetaTag("property", "og:description", finalDescription);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", imageUrl);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", finalTitle);
    setMetaTag("name", "twitter:description", finalDescription);
    setMetaTag("name", "twitter:image", imageUrl);

    setCanonical(canonicalUrl);

    // Build structured data graph
    const schemaGraph = [];

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": finalType === "article" ? "Article" : "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      publisher: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: SITE_NAME,
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: DEFAULT_IMAGE,
        },
      },
    };

    if (opts?.article?.publishedTime) {
      webPageSchema.datePublished = opts.article.publishedTime;
    }

    if (opts?.article?.modifiedTime) {
      webPageSchema.dateModified = opts.article.modifiedTime;
    }

    if (opts?.article?.section) {
      webPageSchema.articleSection = opts.article.section;
    }

    schemaGraph.push(webPageSchema);

    // Product / SoftwareApplication schema for software products and platform tiers
    if (
      finalPath === "/acis" ||
      finalPath === "/netxdr" ||
      finalPath === "/crm" ||
      finalPath === "/netcrad" ||
      finalPath.startsWith("/platform")
    ) {
      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        name: finalTitle.split("|")[0].trim(),
        description: finalDescription,
        url: canonicalUrl,
        applicationCategory: "SecurityApplication",
        operatingSystem: "All",
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: BASE_URL,
        },
      });
    }

    // Service schema for cybersecurity services
    if (finalPath.startsWith("/services")) {
      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: finalTitle.split("|")[0].trim(),
        description: finalDescription,
        url: canonicalUrl,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: BASE_URL,
        },
      });
    }

    // BreadcrumbList schema for nested paths
    const pathParts = finalPath.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
      ];

      let currentAccPath = "";
      pathParts.forEach((part, index) => {
        currentAccPath += `/${part}`;
        const nameFormatted = part
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        breadcrumbItems.push({
          "@type": "ListItem",
          position: index + 2,
          name: nameFormatted,
          item: `${BASE_URL}${currentAccPath}`,
        });
      });

      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      });
    }

    if (finalPath === "/") {
      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: SITE_NAME,
        url: BASE_URL,
        logo: DEFAULT_IMAGE,
      });
      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: SITE_NAME,
        url: BASE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/blog`,
          "query-input": "required name=search_term_string",
        },
      });
    }

    setStructuredData(schemaGraph);

    return undefined;
  }, [titleOrObj, description, options]);
}
