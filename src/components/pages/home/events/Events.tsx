"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "next-intl";

import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import Button from "@/components/ui/button/Button";
import { useGetEventQuery } from "@/redux/api/blog";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";

const Events = () => {
  const t = useTranslations("Events");
  const { data } = useGetEventQuery();

  const [visibleCount, setVisibleCount] = useState(2);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const sortedData = [...(data || [])].sort((a, b) => {
    const dateA = a.start_date ? new Date(a.start_date).getTime() : 0;
    const dateB = b.start_date ? new Date(b.start_date).getTime() : 0;
    return dateB - dateA;
  });

  const visibleEvents = sortedData.slice(0, visibleCount);

  // Инициализация Fancybox при монтировании
  useEffect(() => {
    Fancybox.destroy();

    if (!data) return;

    // Подготавливаем данные для Fancybox: маппинг по ID события
    const allGalleries: Record<number, { src: string; caption: string }[]> = {};
    data.forEach((event) => {
      allGalleries[event.id] = event.images.map((img) => ({
        src: img.image,
        caption: event.title,
      }));
    });

    // Вешаем обработчик на каждый триггер
    data.forEach((event) => {
      const trigger = document.querySelector(
        `[data-fancybox-trigger="events-gallery-${event.id}"]`
      );
      if (!trigger) return;

      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        Fancybox.show(allGalleries[event.id], { dragToClose: true });
      });
    });

    return () => {
      Fancybox.destroy();
    };
  }, [data]);

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
                className="w-full h-full flex flex-col"
              >
                {/* Swiper карусель */}
                {el.images && el.images.length > 0 ? (
                  <div
                    data-fancybox-trigger={`events-gallery-${el.id}`}
                    className="cursor-pointer w-full"
                  >
                    <Swiper
                      modules={[Pagination, Mousewheel, Keyboard]}
                      pagination={{ clickable: true }}
                      keyboard={{ enabled: true }}
                      mousewheel={{
                        forceToAxis: true, // 🔥 ключевой параметр
                        sensitivity: 1,
                        releaseOnEdges: true,
                      }}
                      slidesPerView={1}
                      className="h-[300px] md:h-[540px] w-full"
                    >
                      {el.images.map((img, idx) => (
                        <SwiperSlide
                          key={idx}
                          className="!flex !items-center !justify-center"
                        >
                          <Image
                            src={img.image || "/images/placeholder.jpg"}
                            alt={`${el.title} - ${idx + 1}`}
                            fill
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : (
                  // fallback, если images пуст
                  <div className="w-full h-[300px] md:h-[540px] bg-gray-200 flex items-center justify-center">
                    Нет изображений
                  </div>
                )}

                {/* Описание */}
                <div
                  className={`w-full flex flex-col items-center justify-start p-3 gap-2 ${
                    isBlue
                      ? "bg-[#1D49C5] text-white"
                      : "bg-[#F3F5F0] text-black"
                  }`}
                >
                  <div className="flex flex-col w-full gap-2">
                    <Title className={isBlue ? "text-white" : ""}>
                      {el.title}
                    </Title>
                  </div>

                  <div
                    className={
                      isExpanded
                        ? "flex items-start flex-col-reverse gap-2 w-full"
                        : "flex items-end flex-col md:flex-row w-full gap-2"
                    }
                  >
                    <div className="md:w-full flex flex-col gap-2">
                      <Description
                        className={`flex items-center gap-1 ${
                          isBlue ? "text-[#ffffffdc]" : "text-gray-600"
                        }`}
                      >
                        <CiLocationOn size={24} />
                        {el.address}, {el.start_end} {el.start_date}
                      </Description>

                      <Description>
                        {isExpanded ? (
                          <>
                            {el.description}
                            <button
                              onClick={() => toggleExpand(el.id)}
                              className="text-[#E16C2B] hover:underline ml-1 inline cursor-pointer"
                            >
                              {t("show_less")}
                            </button>
                          </>
                        ) : isLong ? (
                          <>
                            {el.description.slice(0, 100)}
                            <button
                              onClick={() => toggleExpand(el.id)}
                              className="text-[#E16C2B] hover:underline ml-1 inline cursor-pointer"
                            >
                              ... {t("read_more")}
                            </button>
                          </>
                        ) : (
                          el.description
                        )}
                      </Description>
                    </div>

                    {el.link && (
                      <Link
                        className="w-full md:w-[300px]"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={el.link}
                      >
                        <Button className="border-none w-full text-white bg-[#E16C2B] hover:bg-[#ff8b4d] transition duration-200 mt-2 md:mt-0">
                          {t("more")}
                        </Button>
                      </Link>
                    )}
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
