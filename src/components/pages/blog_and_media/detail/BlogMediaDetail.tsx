"use client";

import { useParams } from "next/navigation";
import { useGetBlogQuery } from "@/redux/api/blog";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations } from "next-intl";

const BlogMediaDetail = () => {
  const { data } = useGetBlogQuery();
  const params = useParams();
  const t = useTranslations("Blog");

  // Получаем slug
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // Ищем блог
  const blog = data?.find((el) => el.slug === slug);

  useEffect(() => {
    const galleryElements = document.querySelectorAll(
      "[data-fancybox='blog-gallery']"
    );

    galleryElements.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        Fancybox.show(
          Array.from(galleryElements).map((el) => ({
            src: (el as HTMLAnchorElement).href,
            type: "image",
            caption:
              (el as HTMLAnchorElement).getAttribute("data-caption") || "",
          })),
          {
            dragToClose: true,
          }
        );
      });
    });

    return () => {
      Fancybox.destroy();
    };
  }, [blog]);

  if (!blog) {
    return (
      <section>
        <div className="container py-10"></div>
      </section>
    );
  }

  return (
    <section className="bg-[#F3F5F0] pb-[50px]">
      <div className="w-full h-full flex justify-center">
        <TitleComponent
          className="text-center py-[30px] md:py-[40px] md:w-[70%] w-[90%]  h-full !md:text-[40px] text-[32px]
             leading-[110%]"
        >
          {blog.title}
        </TitleComponent>
      </div>
      <Link
        className="w-full h-full flex justify-center"
        href={blog.image}
        data-fancybox="blog-gallery"
        data-caption={blog.title}
      >
        <div
          className="md:w-[95%] w-[90%] md:h-[600px] h-[350px] rounded-[24px] bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${blog.image})` }}
        />
      </Link>
      <div className="container !py-10 flex justify-center">
        <div className="md:w-[90%] w-full flex flex-col items-start">
          <Description className="border-b pb-2 border-[#E16C2B]">
            {t("title")}
          </Description>
          <Description className="md:text-[18px] text-[18px] font-[400] leading-[140%] mt-[30px]">
            {blog.description}
          </Description>
        </div>
      </div>
    </section>
  );
};

export default BlogMediaDetail;
