import { Description } from "@/components/ui/text/Description";
import { useTranslations } from "next-intl";
import card from "@/assets/images/about_card.png";
import card2 from "@/assets/images/about_card2.png";
import card3 from "@/assets/images/about_card3.png";
import Image from "next/image";
import { Title } from "@/components/ui/text/Title";

const About_card = () => {
  const t = useTranslations("WhoAre");

  const data = [
    {
      id: 1,
      title: "Кайрат Биримкулов",
      description:
        "Родом из Кыргызстана, президент организации. Журналист-фрилансер и кинопродюсер. Активно развивает инициативы в сфере интеграции мигрантов в Швейцарии.",
      img: card,
    },
    {
      id: 2,
      title: "Кайрат Биримкулов",
      description:
        "Родом из Кыргызстана, президент организации. Журналист-фрилансер и кинопродюсер. Активно развивает инициативы в сфере интеграции мигрантов в Швейцарии.",
      img: card2,
    },
    {
      id: 3,
      title: "Кайрат Биримкулов",
      description:
        "Родом из Кыргызстана, президент организации. Журналист-фрилансер и кинопродюсер. Активно развивает инициативы в сфере интеграции мигрантов в Швейцарии.",
      img: card3,
    },
  ];

  return (
    <section className="py-[60px] md:bg-[#ffffff] bg-[#F3F5F0]">
      <div className="container">
        <div className="flex flex-col gap-[60px]">
          <div className="flex justify-center">
            <Description className="border-b pb-2 border-[#E16C2B]">
              {t("about_us")}
            </Description>
          </div>
          <div className="flex flex-col justify-center md:flex-row gap-[30px]">
            {data.map((el) => (
              <div className="w-[330px]">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    className="w-full h-full object-cover"
                    src={el.img}
                    alt="img"
                  />
                </div>
                <div className="px-[20px] mt-[12px]">
                  <Title className="!text-[24px] font-[600]">{el.title}</Title>
                  <Description className="!text-[16px] mt-[12px]">
                    {el.description}
                  </Description>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_card;
