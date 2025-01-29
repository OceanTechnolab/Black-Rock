import SingleBlogPageJSON_LD from "@/components/Schema/SingleBlogPageJSON_LD";
import SingleBlog1 from "@/components/SingleBlog/SingleBlog1";
import { blog, NEXT_PUBLIC_WEB_URL } from "@/utils/constant";
import { notFound } from "next/navigation";
import React from "react";

const Page = ({ params }) => {
  const { slug } = params;
  const oneBlog = blog.find((i) => i?.slug === slug);

  if (!oneBlog) {
    console.error(`Blog post not found for slug: ${slug}`);
    notFound();
  }

  return (
    <>
      <SingleBlogPageJSON_LD slug={slug} title={oneBlog.title} />
      <SingleBlog1 data={oneBlog} />
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const params = blog.map((post) => ({
    slug: post.slug,
  }));
  console.log("Generated static params:", params);
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = blog.find((i) => i?.slug === slug);

  if (!data) {
    console.error(`Metadata not found for slug: ${slug}`);
    return {
      title: "Blog not found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: data?.meta?.title,
    description: data?.meta?.description,
    alternates: {
      canonical: `${NEXT_PUBLIC_WEB_URL}/blog/${slug}`,
    }
  };
}