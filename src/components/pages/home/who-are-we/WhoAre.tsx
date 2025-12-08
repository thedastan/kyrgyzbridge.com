import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import logo from "@/assets/images/k.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const data = [logo, logo, logo, logo, logo, logo, logo];

const WhoAre = () => {
  const t = useTranslations("WhoAre");
  return (
    <section>
      <div className="overflow-hidden">
        <div className="flex bg-[#1D49C5] h-[88px] items-center">
          <div className="flex animate-scroll-left">
            {/* Два прохода для бесконечности */}
            {[...data, ...data].map((icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center   h-[40px] px-20"
              >
                <div className=" relative w-[80px] h-[40px]">
                  <Image
                    fill
                    src={icon}
                    alt="logo"
                    objectFit="contain"
                    className="max-w-none"
                  />
                </div>
                <Title className="text-[#ffffff7a] uppercase">
                  {t("bridge")}
                </Title>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="about" className="bg-[#F3F5F0]">
        <div className=""></div>
        <div
          data-aos="fade-up"
          className="container !py-28 flex flex-col justify-center items-center gap-5 "
        >
          <Description className="border-b pb-2 border-[#E16C2B]">
            {t("title")}
          </Description>
          <Title className="w-full max-w-[740px] text-center">
            {t("description")}
          </Title>

          <Link href="#project">
            <Button> {t("about_us")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoAre;
