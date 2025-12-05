import user from "@/assets/svg/user.svg";
import list from "@/assets/svg/list.svg";
import check from "@/assets/svg/check.svg";
import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";
import { useTranslations } from "next-intl";

const Values = () => {
  const t = useTranslations("Values");
  const data = [
    {
      icon: user,
      title: t("box_title"),
      desc: t("box_description"),
    },
    {
      icon: list,
      title: t("box_title2"),
      desc: t("box_description2"),
    },
    {
      icon: check,
      title: t("box_title3"),
      desc: t("box_description3"),
    },
  ];
  return (
    <section id="mission" className="bg-white py-20">
      <div className="container flex flex-col items-center gap-10">
        <Description
          data-aos="fade-up"
          className="border-b pb-2 border-[#E16C2B]"
        >
          {t("title")}
        </Description>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[10px]">
          {data.map((el, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 300}
              key={index}
              className="flex flex-col gap-4 bg-[#F3F5F0] border rounded-[24px] p-6"
            >
              <Image src={el.icon} alt="icon" />
              <Title className="!text-[24px] font-[600]">{el.title}</Title>
              <Description>{el.desc}</Description>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
