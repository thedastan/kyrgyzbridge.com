import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { useTranslations } from "next-intl";
import Link from "next/link";

const WhoAre = () => {
  const t = useTranslations("WhoAre");
  return (
    <section>
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

          <Link href="/about_us">
            <Button> {t("about_us")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoAre;
