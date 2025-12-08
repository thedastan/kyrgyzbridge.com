"use client";

import { useParams, usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

type LanguageSelectProps = {
  textColor?: string;
};

const LanguageSelect = ({ textColor = "text-white" }: LanguageSelectProps) => {
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "en", label: "ENG" },
    { value: "ru", label: "RUS" },
    { value: "kg", label: "KGZ" },
    { value: "de", label: "DEU" },
  ];

  const LanguageChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${params.locale}`, `/${newLocale}`);
    window.location.href = newPathname;
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        className={`flex items-center gap-2 w-[70px]    !text-[black]  bg-transparent   ${textColor}   text-[14px]   transition-all`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find((opt) => opt.value === locale)?.label}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <IoIosArrowDown />
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-24 bg-[#ffffff] border  text-black border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden animate-fadeIn">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 text-sm hover:bg-[#e7e7e7] hover:text-black cursor-pointer transition-all flex items-center gap-2"
              onClick={() => {
                LanguageChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
