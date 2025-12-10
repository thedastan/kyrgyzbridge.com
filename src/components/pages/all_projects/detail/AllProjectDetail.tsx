"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import { useGetProjectsQuery } from "@/redux/api/blog";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const AllProjectDetail = () => {
  const { data, isLoading } = useGetProjectsQuery();
  const params = useParams();

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
    <section>
      <div className="container !py-20">
        {/* SLIDER */}
        <div className="relative w-full h-[400px] rounded-[24px] mb-10 overflow-hidden">
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
                <div className="relative w-full h-[400px]">
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

          {/* Overlay слева */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full cursor-pointer z-10"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          {/* Overlay справа */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full cursor-pointer z-10"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>

        <Title className="text-[32px] mb-4">{project.title}</Title>
        <Description className="text-[18px]">{project.description}</Description>
      </div>
    </section>
  );
};

export default AllProjectDetail;
