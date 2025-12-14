"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import { useGetProjectsQuery } from "@/redux/api/blog";
import { Description } from "@/components/ui/text/Description";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { TitleComponent } from "@/components/ui/text/TitleComponent";

const AllProjectDetail = () => {
  const { data, isLoading } = useGetProjectsQuery();
  const params = useParams();
  const t = useTranslations("WeProjects");

  // ✅ Get the slug from the URL
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // ✅ Find project by slug (not id!)
  const project = data?.find((el) => el.slug === slug);

  const swiperRef = useRef<any>(null);

  if (!project) {
    return (
      <section>
        <div className="container py-10"></div>
      </section>
    );
  }

  return (
    <section className="bg-[#F3F5F0] py-[50px]">
      <div className="w-full h-full flex justify-center">
        <TitleComponent
          className="text-center py-[30px] md:py-[40px] md:w-[70%] w-[90%]  h-full !md:text-[40px] text-[32px]
                   break-all overflow-wrap
                   md:break-normal md:overflow-wrap-normal leading-[110%]"
        >
          {project.title}
        </TitleComponent>
      </div>

      {/* <Title className="text-[32px] mb-4">{project.title}</Title> */}

      <div className="flex justify-center">
        <div className="relative md:w-[95%] w-[90%] md:h-[600px] h-full rounded-[24px] mb-10 overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true} // бесконечный цикл
            grabCursor={true} // курсор "рука"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, // не останавливать автопрокрутку после свайпа
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full h-full"
          >
            {project.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full md:h-[600px] h-[350px]">
                  <Image
                    src={img.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="absolute top-0 left-0 w-1/2 h-full cursor-pointer z-10"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <div
            className="absolute top-0 right-0 w-1/2 h-full cursor-pointer z-10"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <div className="container !py-10 flex justify-center">
        <div className="md:w-[90%] w-full flex flex-col items-start">
          <Description className="border-b pb-2 border-[#E16C2B]">
            {t("title")}
          </Description>
          <Description className="md:text-[18px] text-[18px] font-[400] leading-[140%] mt-[30px]">
            {project.description}
          </Description>
        </div>
      </div>
    </section>
  );
};

export default AllProjectDetail;
