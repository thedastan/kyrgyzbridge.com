"use client";

import { useParams } from "next/navigation";
import { useGetBlogQuery } from "@/redux/api/blog";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";

const BlogMediaDetail = () => {
  const { data } = useGetBlogQuery();
  const params = useParams();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const numericId = Number(id);

  const blog = data?.find((el) => el.id === numericId);

  if (!blog) {
    return (
      <section>
        <div className="container py-10"></div>
      </section>
    );
  }

  return (
    <section>
      <div className="container !py-20">
        <div
          className="w-full h-[400px] rounded-[24px] bg-cover bg-center mb-10"
          style={{ backgroundImage: `url(${blog.image})` }}
        />

        <Title className="text-[32px] mb-4">{blog.title}</Title>

        <Description className="text-[18px]">{blog.description}</Description>
      </div>
    </section>
  );
};

export default BlogMediaDetail;
