import SingleBlogPageJSON_LD from "@/components/Schema/SingleBlogPageJSON_LD";
import SingleBlog1 from "@/components/SingleBlog/SingleBlog1";
import { blog, NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import { redirect } from "next/navigation";
import React from "react";

const Page = ({ params }) => {
  const { slug } = params;
  const oneBlog = blog.find((i) => i?.slug === slug);

  if (!oneBlog) {
    redirect("/");
  }

  return (
    <>
      <SingleBlogPageJSON_LD slug={slug} />
      <SingleBlog1 data={oneBlog} />
    </>
  );
};

export default Page;
export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = blog.find((i) => i?.slug === slug);

  return {
    title: data?.meta?.title,
    description: data?.meta?.description,
    alternates: {
      canonical: `${NEXT_PUBLIC_WEB_URL}/blog/${slug}`,
    }
  };
}
