import { Description } from "@/components/ui/text/Description";
import events1 from "@/assets/images/events1.png";
import events2 from "@/assets/images/events2.png";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import { CiLocationOn } from "react-icons/ci";
import { useTranslations } from "next-intl";

const Events_and_calendar = () => {
  const t = useTranslations("Events");

  return (
    <section id="events" className="py-16">
      <div className="flex flex-col justify-center items-center">
        <Description
          data-aos="fade-up"
          className="border-b pb-2 border-[#E16C2B]"
        >
          {t("title")}
        </Description>

        <div className="w-full  mt-10 md:flex-row flex-col md:min-h-[630px] min-h-full flex ">
          <div data-aos="fade-up" className="md:w-[50%] w-full h-full">
            <Image
              className="w-full md:h-[540px] h-[300px] object-cover "
              src={events1}
              alt="img"
            />
            <div className="md:h-[90px] bg-[#1D49C5] h-[170px] w-full md:flex-row flex-col flex items-center md:justify-between justify-center gap-3 px-8">
              <div className="md:text-start text-center">
                <Title className="text-white">Forum Choyro 2022</Title>
                <Description className="text-[#ffffffdc]">
                  14.02.2022
                </Description>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#F3F5F0] md:w-[50%] w-full h-full"
          >
            <Image
              className="w-full md:h-[540px] h-[300px] object-cover"
              src={events2}
              alt="img"
            />
            <div className="md:h-[90px] h-[170px] w-full md:flex-row flex-col flex items-center md:justify-between justify-center gap-3 px-8">
              <div className="">
                <Title>IT Forum Switzerland</Title>
                <Description className="text-[#1D1D1D] flex items-center gap-1">
                  <CiLocationOn size={24} color="black" /> Криенс, 19:30–23:00,
                  14.02.2022
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events_and_calendar;
