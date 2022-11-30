import { useQuery } from "react-query";
import axios from "axios";

const fetchPost = async (postId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return data;
};

const usePost = (postId) =>
  useQuery(["posts", postId], () => fetchPost(postId));
export default usePost;
