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
  const [active, setActive] = useState<string | null>(null);
  const [hash, setHash] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const toggleBox = () => setIsOpen((prev) => !prev);

  const handleAnchor = (id: string) => {
    setActive(id);

    if (pathname !== "/") {
      router.push(`/#${id}`);
      setHash(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleNavigate = (path: string) => {
    setActive(path); // ✅ сразу подсвечиваем кнопку
    setIsOpen(false);
    router.push(path);
  };

  // Скролл после перехода по hash
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setHash(null);
      }
    }
  }, [hash, pathname]);

  // Автоматическая подсветка на главной при скролле
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      "hero",
      "about_us",
      "project",
      "blogMedia",
      "events",
      "contact",
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [pathname]);

  // Подсветка по initial hash
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash) setActive(currentHash);
  }, [pathname]);

  // стиль активного пункта меню
  const activeClass = (id: string) =>
    active === id ? "text-[#E16C2B]" : "text-gray-600";

  return (
    <header className="w-full h-[80px]">
      <div
        className="bg-[#ffffff] fixed top-0 left-0 w-full border-transparent py-3"
        style={{ zIndex: 1000 }}
      >
        <div className="container">
          <div className="w-full flex justify-between">
            <div className="flex gap-[40px] items-center cursor-pointer">
              <Image
                onClick={() => handleAnchor("hero")}
                width={90}
                height={63}
                src={logo}
                alt="img"
              />
              <div className="items-center md:flex">
                <LanguageSelect />
              </div>
            </div>

            {/* Бургер кнопка для мобильного */}
            <div className="flex md:hidden items-center relative p-0 justify-end">
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

            {/* Десктоп меню */}
            <div className="md:flex hidden items-center gap-[27px]">
              <button
                onClick={() => handleAnchor("hero")}
                className={`${activeClass("hero")} transition`}
              >
                {t("hero")}
              </button>

              <button
                onClick={() => handleNavigate("/about_us")}
                className={`${activeClass("/about_us")} transition`}
              >
                {t("about")}
              </button>

              <button
                onClick={() => handleAnchor("project")}
                className={`${activeClass("project")} transition`}
              >
                {t("projects")}
              </button>

              <button
                onClick={() => handleAnchor("blogMedia")}
                className={`${activeClass("blogMedia")} transition`}
              >
                {t("blogMedia")}
              </button>

              <button
                onClick={() => handleAnchor("events")}
                className={`${activeClass("events")} transition`}
              >
                {t("events")}
              </button>

              <button
                onClick={() => handleAnchor("contact")}
                className={`${activeClass("contact")} transition`}
              >
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
