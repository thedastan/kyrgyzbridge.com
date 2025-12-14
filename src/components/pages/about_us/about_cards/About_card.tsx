"use client";
import { Description } from "@/components/ui/text/Description";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
import { useGetAboutQuery } from "@/redux/api/blog";

const About_card = () => {
  const t = useTranslations("WhoAre");
  const { data } = useGetAboutQuery();

  return (
    <section className=" md:bg-[#ffffff] bg-[#F3F5F0]">
      <div className="container">
        <div className="flex flex-col gap-[60px]">
          <div className="flex justify-center">
            <Description className="border-b pb-2 mt-[40px] border-[#E16C2B]">
              {t("about_us")}
            </Description>
          </div>
          <div
            className="
            pb-[40px]
            
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-[30px]
    justify-items-center
  "
          >
            {data?.map((el) => (
              <div key={el.id} className="w-[330px] md:w-[400px]">
                <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[20px]">
                  <Image
                    src={el.image}
                    alt={el.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 330px"
                  />
                </div>

                <div className="px-[20px] mt-[12px]">
                  <Title className="!text-[24px] font-[600]">{el.name}</Title>
                  <Description className="!text-[16px] mt-[12px]">
                    {el.description}
                  </Description>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_card;
