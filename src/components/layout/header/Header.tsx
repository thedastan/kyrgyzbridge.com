"use client";

import Link from "next/link";
import LanguageSelect from "./LanguageModal";
import Image from "next/image";
import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/images/logo-new.png";

const Header = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const toggleBox = () => setIsOpen((prev) => !prev);

  const handleAnchor = (id: string) => {
    if (pathname !== "/") {
      // Перейти на главную с хэшем
      router.push(`/#${id}`);
      // Сохраняем hash чтобы скроллить после перехода
      setHash(id);
    } else {
      // На главной просто скроллим
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // После перехода на главную, скроллим к элементу
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setHash(null);
      }
    }
  }, [hash, pathname]);

  return (
    <header className="w-full h-[80px]">
      <div
        className="bg-[#ffffff] fixed top-0 left-0 w-full border-transparent py-3"
        style={{ zIndex: 1000 }}
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
              <button onClick={() => handleAnchor("hero")}>{t("hero")}</button>
              <button onClick={() => handleAnchor("about")}>
                {t("about")}
              </button>
              <button onClick={() => handleAnchor("project")}>
                {t("projects")}
              </button>
              <button onClick={() => handleAnchor("blogMedia")}>
                {t("blogMedia")}
              </button>
              <button onClick={() => handleAnchor("events")}>
                {t("events")}
              </button>
              <button onClick={() => handleAnchor("contact")}>
                {t("contacts")}
              </button>
            </div>
          </div>
        </div>

        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
