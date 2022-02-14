import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Post from "../components/post/post";
import { getAllPostsData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Hellow Next.js</title>
      </Head>
      <div className="md-10 p-3 border rounded">
        <Image
          className="object-cover rounded"
          src="/112996.jpeg"
          alt="112996"
          width={1280}
          height={500}
        />
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="text-lg md-3">BLOG POSTS</div>
        <div className="border w-14"></div>
      </div>
      <div className="flex flex-wrap -m-4 mb-5">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
}
