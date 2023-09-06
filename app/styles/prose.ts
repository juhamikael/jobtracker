import { cn } from "@/lib/utils";

const proseValues = {
  h1: "prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-4 prose-h1:text-white",
  h2: "prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:text-white",
  h3: "prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-4 prose-h3:text-white",
  h4: "prose-h4:text-xl prose-h4:font-bold prose-h4:mb-4 prose-h4:text-white",
  h5: "prose-h5:text-lg prose-h5:font-bold prose-h5:mb-4 prose-h5:text-white",
  h6: "prose-h6:text-base prose-h6:font-bold prose-h6:mb-4 prose-h6:text-white",
  p: "prose-p:text-base prose-p:mb-4 prose-p:text-white",
  a: "prose-a:text-base prose-a:mb-4 prose-a:font-bold prose-a:underline prose-a:hover:text-blue-300 prose-a:hover:transition-all prose-a:text-blue-200",
  ul: "prose-ul:text-base prose-ul:mb-4 prose-ul:text-white",
  ol: "prose-ol:text-base prose-ol:mb-4 prose-ol:text-white",
  li: "prose-li:text-base prose-li:mb-1 prose-li:text-white",
  blockquote:
    "prose-blockquote:text-base prose-blockquote:mb-4 prose-blockquote:text-white",
  pre: "prose-pre:text-base prose-pre:mb-4 prose-pre:text-white",
  code: "prose-code:text-base prose-code:mb-4 prose-code:text-white",
  hr: "prose-hr:text-base prose-hr:mb-4 prose-hr:text-white",
};

export const prose = cn(...Object.values(proseValues));
