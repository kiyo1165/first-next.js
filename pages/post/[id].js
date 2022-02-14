import { useRouter } from "next/router";
import { getAllPostsIds, getPostData } from "../../lib/posts";

const PostData = ({ post }) => {
  const router = useRouter();

  //fallbackがtrueもしくはpost情報がない場合
  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-5  w-full">
      <div className="flex justify-center flex-col items-center mb-5">
        <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
        <p className="mb-3">{post.created_at}</p>
        <div className="border w-14"></div>
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await getAllPostsIds();
  console.log(paths);
  return {
    paths,
    fallback: true, //idに含まれないpageは404を返す。require
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}
export default PostData;
