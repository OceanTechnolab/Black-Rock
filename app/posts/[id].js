import { useRouter } from 'next/router';

export async function generateStaticParams() {
  // Fetch your data here and return the paths
  const posts = await fetchPosts(); // Replace with your data fetching logic
  return posts.map(post => ({
    id: post.id.toString()
  }));
}

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// Fetch post data based on the id
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.id); // Replace with your data fetching logic
  return {
    props: {
      post
    }
  };
}
