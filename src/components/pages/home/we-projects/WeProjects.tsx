import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import img1 from "@/assets/images/project1.png";
import img2 from "@/assets/images/project2.png";
import img3 from "@/assets/images/project3.png";
import { Title } from "@/components/ui/text/Title";
import { useTranslations } from "next-intl";

const WeProjects = () => {
  const t = useTranslations("WeProjects");
  const data = [
    {
      img: img1,
      title: "Детские кровати в онкоцентре",
      desc: "Поддержка детей, проходящих длительное лечение.",
    },
    {
      img: img2,
      title: "Санаторий «Петровка»",
      desc: "Поддержка медицинского восстановления и реабилитации.",
    },
    {
      img: img3,
      title: "Орловский детский дом",
      desc: "Создание более безопасной и развивающей среды для детей.",
    },
  ];
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

          <Button className="border-none text-white bg-[#E16C2B]">
            {t("all_projects")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[10px] gap-[20px] mt-10">
          {data.map((el, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 300}
              key={index}
              style={{
                backgroundImage: `url(${el.img.src})`,
                backgroundSize: "cover",
              }}
              className="w-full h-[300px]  text-white rounded-[24px] p-8 flex flex-col items-start justify-end gap-3"
            >
              <Title className="!text-[24px] font-[600] leading-[100%] text-white">
                {el.title}
              </Title>
              <Description>{el.desc}</Description>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeProjects;
