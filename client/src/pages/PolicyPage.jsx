import React from "react";
import Policies from "../components/Policy";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

function PolicyPage() {
  usePageMeta(SEO_META.policy.title, SEO_META.policy.description);

  return (
    <div>

     <Policies />
    </div>
  );
}

export default PolicyPage;
