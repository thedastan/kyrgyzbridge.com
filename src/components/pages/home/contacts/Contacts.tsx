import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import logo from "@/assets/images/logo-new.png";
import frame from "@/assets/svg/frame.svg";
import fone from "@/assets/images/Group 1321314511.png";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const data = [frame, frame, frame, frame, frame, frame];

const Contacts = () => {
  const t = useTranslations("Contacts");
  // {t("title")}
  return (
    <section id="contact" className="bg-[#F3F5F0] py-[50px]">
      <div className="overflow-hidden">
        <div className="flex   h-[88px] items-center">
          <div className="flex  ">
            {[...data, ...data].map((icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className=" relative w-[1200px] h-[80px]">
                  <Image
                    fill
                    src={icon}
                    alt="logo"
                    objectFit="contain"
                    className="max-w-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="relative md:mt-[80px] mt-[30px] w-full h-[930px] md:h-fit flex flex-col justify-center items-center">
          <Image src={fone} alt="img" />
          <div className="absolute w-full h-full">
            <div className="md:w-[420px] w-full">
              <TitleComponent className="leading-[100%]">
                {t("title")}
              </TitleComponent>
              <Description className="mt-[10px]">
                {t("description")}
              </Description>
            </div>
            <div className="mt-[20px] md:flex-row flex-col flex justify-between md:gap-[50px] gap-[20px]">
              <div className="w-full bg-white border rounded-[24px] md:p-6 p-3 flex flex-col justify-between gap-[12px] md:gap-[0px]">
                <input
                  className="bg-[#F5F5F5] w-full py-[18px] px-[18px] rounded-[16px] outline-none"
                  type="text"
                  placeholder={t("name")}
                />
                <input
                  className="bg-[#F5F5F5] w-full py-[18px] px-[18px] rounded-[16px] outline-none"
                  type="email"
                  placeholder={t("email")}
                />
                <textarea
                  className="bg-[#F5F5F5] w-full py-[18px] px-[18px] rounded-[16px] outline-none"
                  placeholder={t("message")}
                ></textarea>
                <div className="flex items-center gap-[8px]">
                  <input
                    className="w-[16px] h-[16px] cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-gray-500 text-[14px]">{t("checkbox")}</p>
                </div>
                <Button className="w-full border-none text-white bg-[#E16C2B]">
                  {t("send")}
                </Button>
              </div>

              <div className="w-full md:max-w-[188px] md:h-[417px] bg-white border rounded-[24px] md:p-6 p-3 flex md:flex-col items-center gap-[42px]">
                <TitleComponent className="md:text-[32px] text-[24px]">
                  {t("media")}
                </TitleComponent>
                <Link className="md:text-[52px] text-[26px]" href="/">
                  <FaInstagram />
                </Link>
                <Link className="md:text-[52px] text-[26px]" href="/">
                  <FaFacebook />
                </Link>
                <Link className="md:text-[52px] text-[26px]" href="/">
                  <BsTwitterX />
                </Link>
              </div>

              <div className="w-[100%] flex flex-col justify-between gap-[20px]">
                <div className="w-full max-w-[100%] bg-white border rounded-[24px] md:p-6 p-3 flex flex-col gap-[12px]">
                  <TitleComponent className="md:text-[32px] text-[24px] md:w-[80%] w-full">
                    {t("title2")}
                  </TitleComponent>
                  <div className="flex md:relative justify-end items-center flex-col md:flex-row gap-[12px]">
                    {/* Контейнер для input + иконки */}
                    <div className="relative w-full">
                      <LuUserRound className="absolute left-[15px] top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        className="bg-[#F5F5F5] w-full md:py-[18px] py-[15px] pl-[40px] pr-[15px] rounded-[30px] outline-none"
                        type="email"
                        placeholder={t("email2")}
                      />
                    </div>

                    <Button className="w-full md:w-fit bg-[#000000] text-[#FFFFFF] md:py-[24px] md:absolute md:mr-[5px]">
                      {t("subscribe")}
                    </Button>
                  </div>
                </div>

                <div className="w-full max-w-[100%] bg-white border rounded-[24px] md:p-6 p-3 flex flex-col md:gap-[20px] gap-[12px]">
                  <Image width={90} height={63} src={logo} alt="img" />
                  <p className="text-gray-500 text-[14px]">{t("year")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
