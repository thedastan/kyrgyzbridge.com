import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import hero_img from "@/assets/images/f0214e54b5b650ce0888125d0a6270fb7d1d1313.png";
import Image from "next/image";

import img from "@/assets/images/Vector (2).png";
import img2 from "@/assets/images/Vector (3).png";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Hero");
  const data = [img, img, img, img, img];
  const data2 = [img2, img2, img2, img2];

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
          <div className="flex md:w-[50%] relative w-full justify-between  md:px-[30px] px-[20px] h-full  ">
            <div className="flex flex-col gap-6 h-full justify-center">
              <TitleComponent className="w-full max-w-[550px]">
                {t("title")}
              </TitleComponent>
              <Description>{t("description")}</Description>
              <div className="flex gap-[12px] justify-between md:justify-start">
                <Link href="#about">
                  <Button className="px-[40px] md:px-[54px] border-none  py-[10px] rounded-[30px] bg-[#E16C2B] text-[14px] text-[#FFFFFF]">
                    {t("about_us")}
                  </Button>
                </Link>
                <Link href="#project">
                  <Button className="px-[40px] md:px-[54px] border-none  py-[10px] rounded-[30px] bg-[#1D49C5] text-[14px] text-[#FFFFFF]">
                    {t("projects")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* <div className="md:block hidden relative w-[60px] h-full">
              <Image fill src={img} objectFit="contain" alt="img" />
            </div> */}

            <div className="flex flex-col overflow-hidden">
              {[...data, ...data].map((index) => (
                <Image src={index} alt="img" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden mt-5">
          {[...data2, ...data2].map((index) => (
            <Image src={index} alt="img" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
