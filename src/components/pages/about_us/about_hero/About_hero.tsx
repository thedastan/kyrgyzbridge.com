import React from "react";
import img from "@/assets/images/about_hero2.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";

const About_hero = () => {
  const t = useTranslations("WhoAre");

  return (
    <section className="bg-[#F3F5F0] py-[50px] flex flex-col items-center text-center gap-[40px]">
      <div className="flex flex-col gap-[40px] items-center text-center">
        <Description className="border-b pb-2 border-[#E16C2B]">
          {t("title")}
        </Description>
        <Title className="md:w-[730px] w-full md:!text-[32px] !text-[24px]">
          {t("about_text")}
        </Title>
      </div>
      <div className="w-[90%] overflow-hidden h-[200px] md:h-[500px] rounded-[20px]">
        <Image className="w-full h-full object-cover" src={img} alt="img" />
      </div>
    </section>
  );
};

export default About_hero;
