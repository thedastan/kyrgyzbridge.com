import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Title } from "@/components/ui/text/Title";
import { useTranslations } from "next-intl";
import { useGetProjectsQuery } from "@/redux/api/blog";
import Link from "next/link";

const WeProjects = () => {
  const t = useTranslations("WeProjects");
  const { data } = useGetProjectsQuery();
  return (
    <section id="project" className="py-10">
      <div className="container">
        <div
          data-aos="fade-up"
          className="flex md:flex-row flex-col gap-3 justify-between md:items-end items-start"
        >
          <div className="w-full max-w-[800px] flex flex-col gap-5">
            <Description>{t("title")}</Description>
            <TitleComponent>{t("description")}</TitleComponent>
          </div>

          <Link href="/all_projects">
            <Button className="border-none text-white bg-[#E16C2B]">
              {t("all_projects")}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[10px] gap-[20px] mt-10">
          {data?.slice(0, 3).map((el, index) => (
            <Link
              href={`/all_projects/${el.id}`}
              data-aos="fade-up"
              data-aos-delay={index * 300}
              key={index}
              style={{
                backgroundImage: `url(${el.image})`,
                backgroundSize: "cover",
              }}
              className="w-full h-[300px]  text-white rounded-[24px] p-8 flex flex-col items-start justify-end gap-3"
            >
              <Title className="!text-[24px] md:w-[80%] font-[600] leading-[100%] text-white">
                {el.title}
              </Title>
              <Description className="md:w-[87%]">
                {el.description.length > 150
                  ? el.description.slice(0, 150) + "..."
                  : el.description}
              </Description>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeProjects;
