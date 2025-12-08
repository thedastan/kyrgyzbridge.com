import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Title } from "@/components/ui/text/Title";
import Button from "@/components/ui/button/Button";
import { useTranslations } from "next-intl";
import { useGetBlogQuery } from "@/redux/api/blog";

const Blog = () => {
  const t = useTranslations("Blog");
  const { data } = useGetBlogQuery();
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center flex flex-col justify-center items-center">
          <Description
            data-aos="fade-up"
            className="border-b pb-2 border-[#E16C2B]"
          >
            {t("title")}
          </Description>
          <TitleComponent data-aos="fade-up">{t("description")}</TitleComponent>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[10px] gap-[20px] mt-10">
          {data?.map((el, index) => {
            const isThirdFull = index % 2 === 0 && index === data.length - 1;

            return (
              <div
                data-aos="fade-up"
                key={index}
                style={{
                  backgroundImage: `url(${el.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`h-[400px] text-white rounded-[24px] overflow-hidden
          ${isThirdFull ? "md:col-span-2" : "w-full"}
        `}
              >
                <div className="p-8 w-full h-full flex flex-col items-start justify-end gap-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <Title className="!text-[24px] font-[600] leading-[100%] text-white">
                    {el.title}
                  </Title>
                  <Description>{el.description}</Description>
                  <Button className="bg-[#E16C2B] border-none mt-2">
                    {t("read")}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
