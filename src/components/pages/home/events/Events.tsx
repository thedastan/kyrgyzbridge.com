"use client";

import { Description } from "@/components/ui/text/Description";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { useGetEventQuery } from "@/redux/api/blog";

const Events = () => {
  const t = useTranslations("Events");
  const { data } = useGetEventQuery();

  return (
    <section id="events" className="py-10">
      <div className="flex flex-col justify-center items-center">
        <Description
          data-aos="fade-up"
          className="border-b pb-2 border-[#E16C2B]"
        >
          {t("title")}
        </Description>

        <div className=" grid grid-cols-1 md:grid-cols-2 w-full mt-10  after: md:min-h-[630px] min-h-full">
          {data?.map((el, index) => {
            const isBlue = index % 3 === 0; // чётные — синий
            return (
              <div
                key={el.id}
                data-aos="fade-up"
                className="w-full md:w-full h-full"
              >
                {/* Шахматный порядок */}
                <div className={`${isBlue ? "" : "order-2"}`}>
                  <Image
                    className="w-full md:h-[540px] h-[300px] object-cover"
                    src={el.image}
                    alt={el.title}
                    width={800}
                    height={600}
                  />
                </div>

                <div
                  className={`
          md:h-[90px] h-[170px] w-full 
          md:flex-row flex-col flex items-center md:justify-between justify-center 
          gap-3 px-8 
          ${isBlue ? "bg-[#1D49C5] text-white" : "bg-[#F3F5F0] text-black"}
          ${isBlue ? "" : "order-1"}
        `}
                >
                  <div>
                    <Title className={isBlue ? "text-white" : ""}>
                      {el.title}
                    </Title>

                    <Description
                      className={`flex items-center gap-1 ${
                        isBlue ? "text-[#ffffffdc]" : "text-[#1D1D1D]"
                      }`}
                    >
                      <CiLocationOn size={24} />
                      {el.address}, {el.start_time} - {el.start_end}{" "}
                      {el.start_date || ""}
                    </Description>
                  </div>

                  <Link target={"_blank"} href={el.link || "/"}>
                    <Button className="border-none text-white bg-[#E16C2B]">
                      {t("more")}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
