"use client";
import Link from "next/link";
import LanguageSelect from "./LanguageModal";
import Image from "next/image";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { useTranslations } from "next-intl";
import logo from "@/assets/images/logo-new.png";

const Header = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full h-[80px]">
      <div
        className="bg-[#ffffff] fixed top-0 left-0 w-full border-transparent py-3"
        style={{ zIndex: "1000" }}
      >
        <div className="container">
          <div className="flex justify-between md:flex-row flex-row-reverse items-center">
            <div className="flex gap-[40px] items-center">
              <Link href="/">
                <Image width={90} height={63} src={logo} alt="img" />
              </Link>
              <div className="hidden items-center md:flex">
                <LanguageSelect />
              </div>
            </div>
            <div className="flex md:hidden items-center justify-center">
              <div className="burger__button">
                <label>
                  <input
                    type="checkbox"
                    checked={isOpen}
                    onChange={toggleBox}
                  />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </div>
            <div className="md:flex hidden items-center gap-[27px] text-gray-600">
              <Link href="/#hero">{t("hero")}</Link>
              <Link href="/#about">{t("about")}</Link>
              <Link href="/#project">{t("projects")}</Link>
              <Link href="/#mission">{t("mission")}</Link>
              <Link href="/#events">{t("events")}</Link>
            </div>
          </div>
        </div>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
