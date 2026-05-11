import blogData from "../blogData";
import BlogDetails from "./BlogDetails";

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.url,
  }));
}

export default function Page() {
  return <BlogDetails />;
}
