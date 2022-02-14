import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

// 投稿一覧取得
export async function getAllPostsData() {
  const res = await axios.get(`${baseURL}/api/post/`);
  const posts = res.data;
  return posts;
}

//投稿一覧IDの取得
export async function getAllPostsIds() {
  const res = await axios.get(`${baseURL}/api/post/`);
  const posts = res.data;
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

//投稿詳細
export async function getPostData(id) {
  const res = await axios.get(`${baseURL}/api/post/${id}/`);
  const post = res.data;
  return post;
}
