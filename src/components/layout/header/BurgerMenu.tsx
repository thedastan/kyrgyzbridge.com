"use client";

import { useTranslations } from "next-intl";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BurgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const t = useTranslations("Header");

  const [hash, setHash] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

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
    <div
      id="menu-overlay"
      className={`fixed top-0 right-0 bg-[rgba(0,0,0,0)] w-full h-[100vh] z-50 transition-opacity duration-700 ${
        isOpen ? " pointer-events-auto" : "  pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-[100%] h-full bg-white p-4 flex flex-col justify-start gap-4 shadow-lg z-50 transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex flex-col justify-between items-start h-[70ch]">
          <div className="flex flex-col items-start w-[100%] text-start p-[20px] gap-4 mt-16 ">
            <button onClick={() => handleAnchor("hero")}>{t("hero")}</button>
            <button onClick={() => handleAnchor("about")}>{t("about")}</button>
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
    </div>
  );
};

export default BurgerMenu;
