"use client";

import { Description } from "@/components/ui/text/Description";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useGetEventQuery } from "@/redux/api/blog";

const Events = () => {
  const t = useTranslations("Events");
  const { data } = useGetEventQuery();

  const [visibleCount, setVisibleCount] = useState(2);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const sortedData = [...(data || [])].sort((a, b) => {
    const dateA = a.start_date ? new Date(a.start_date).getTime() : 0;
    const dateB = b.start_date ? new Date(b.start_date).getTime() : 0;
    return dateB - dateA;
  });

  const visibleEvents = sortedData.slice(0, visibleCount);

  return (
    <section id="events" className="py-10">
      <div className="flex flex-col justify-center items-center">
        <Description
          data-aos="fade-up"
          className="border-b pb-2 border-[#E16C2B]"
        >
          {t("title")}
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10 md:min-h-[630px] min-h-full">
          {visibleEvents.map((el, index) => {
            const isBlue = index % 3 === 0;
            const isExpanded = expandedIds.has(el.id);
            const isLong = el.description.length > 100;

            return (
              <div
                key={el.id}
                data-aos="fade-up"
                className="w-full md:w-full h-full"
              >
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
                  className={`w-full md:flex-col flex-col flex items-center md:justify-start justify-center p-3 gap-2
                    ${
                      isBlue
                        ? "bg-[#1D49C5] text-white"
                        : "bg-[#F3F5F0] text-black"
                    }
                    ${isBlue ? "" : "order-1"}
                  `}
                >
                  <div className="flex flex-col w-full gap-2">
                    <Title className={isBlue ? "text-white" : ""}>
                      {el.title}
                    </Title>
                  </div>

                  {/* Динамическая обёртка */}
                  <div
                    className={
                      isExpanded
                        ? "flex items-start flex-col-reverse gap-2"
                        : "flex items-end flex-col md:flex-row"
                    }
                  >
                    <div className="md:w-full flex flex-col gap-2">
                      <Description
                        className={`flex items-center gap-1 ${
                          isBlue ? "text-[#ffffffdc]" : "text-gray-600"
                        }`}
                      >
                        <CiLocationOn size={24} />
                        {el.address}, {el.start_time} - {el.start_end}{" "}
                        {el.start_date || ""}
                      </Description>

                      <Description>
                        {isExpanded ? (
                          <>
                            {el.description}
                            <button
                              onClick={() => toggleExpand(el.id)}
                              className="text-[#E16C2B] hover:underline ml-1 inline cursor-pointer"
                            >
                              свернуть
                            </button>
                          </>
                        ) : isLong ? (
                          <>
                            {el.description.slice(0, 100)}
                            <button
                              onClick={() => toggleExpand(el.id)}
                              className="text-[#E16C2B] hover:underline ml-1 inline cursor-pointer"
                            >
                              ... читать дальше
                            </button>
                          </>
                        ) : (
                          el.description
                        )}
                      </Description>
                    </div>

                    <Link
                      className="w-full md:w-fit"
                      target="_blank"
                      href={el.link || "#"}
                    >
                      <Button className="border-none w-full md:w-[180px] text-white bg-[#E16C2B]">
                        {t("more")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visibleCount < sortedData.length && (
          <Button
            className="border-none mt-[30px] px-[50px] flex gap-2"
            onClick={() => setVisibleCount((prev) => prev + 2)}
          >
            {t("more2")}
            <IoIosArrowDown />
          </Button>
        )}
      </div>
    </section>
  );
};

export default Events;
