import Blog1 from '@/components/Blog/Blog1'
import PageJSON_LD from '@/components/Schema/PageJSON_LD'
import { NEXT_PUBLIC_WEB_URL } from '@/utils/constant'
import React from 'react'

const page = () => {
  return (
   <>
    <PageJSON_LD name={"Blog"} pathName={"blog"}/>
   <Blog1/>
   </>
  )
}

export default page

export const metadata = {
  title: "Blackrock Porcelano Blog: Insights, Tips, and Trends",
  description: `Stay inspired with the latest tile trends, design ideas, and expert tips from Blackrock Porcelano. Discover how to enhance your spaces with ceramic and Porcelano tiles.`,
  alternates: {
    canonical: `${NEXT_PUBLIC_WEB_URL}/blog`,
  },
};