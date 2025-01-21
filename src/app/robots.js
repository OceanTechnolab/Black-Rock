import { NEXT_PUBLIC_WEB_URL } from "@/utils/constant";

export default function robots() {
  const rules = [];
  const URL = NEXT_PUBLIC_WEB_URL;
  if (process.env.NEXT_PUBLIC_ENV == "production") {
    rules.push({
      userAgent: "*",
      allow: "/",
    });
  } else {
    rules.push({
      userAgent: "*",
      allow: "/",
    });
  }
  return {
    rules,
    sitemap: `${URL}/sitemap.xml`,
  };
}
