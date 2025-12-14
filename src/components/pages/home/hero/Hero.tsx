import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
// import hero_img from "@/assets/images/f0214e54b5b650ce0888125d0a6270fb7d1d1313.png";
import hero_img from "@/assets/images/Hero_new.jpeg";

import Image from "next/image";

// import img from "@/assets/images/ornament.png";
import img from "@/assets/images/Vector (4).png";

import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Hero");
  const data = [img, img, img, img, img, img, img];

  return (
    <section id="hero" className=" bg-[#F3F5F0]">
      <div className="flex flex-col items-center">
        <div className="flex md:flex-row flex-col items-center h-[669px]  ">
          <div className="md:w-[50%] w-full h-full overflow-hidden">
            <Image
              className="w-[100%] h-[100%] object-cover"
              src={hero_img}
              alt="img"
            />
          </div>
          <div className="md:w-[50%] w-full  md:px-[30px] px-[20px] h-full  ">
            <div className="flex flex-col justify-center md:gap-[36px] gap-[20px] w-full h-full md:px-[30px]">
              <TitleComponent className="w-full max-w-[550px]">
                {t("title")}
              </TitleComponent>
              <Description>{t("description")}</Description>
              <div className="flex gap-[12px] justify-between md:justify-start">
                <Link className="w-full md:w-fit" href="#project">
                  <Button className="px-[10px] w-full md:w-fit md:px-[54px] border-none  py-[10px] rounded-[30px] bg-[#1D49C5] hover:bg-[#3e72ff] transition duration-200 text-[14px] text-[#FFFFFF]">
                    {t("projects")}
                  </Button>
                </Link>
                <Link className="w-full md:w-fit" href="#about">
                  <Button className="px-[10px] w-full md:w-fit md:px-[54px] border-none  py-[10px] rounded-[30px] bg-[#E16C2B] hover:bg-[#ff8b4d] transition duration-200 text-[14px] text-[#FFFFFF]">
                    {t("about_us")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div className="flex h-[60px] items-center">
            <div className="flex w-max animate-scroll">
              {[...data, ...data].map((icon, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-1"
                >
                  <div className="relative w-[180px] h-[80px]">
                    <Image
                      fill
                      src={icon}
                      alt="frame"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
