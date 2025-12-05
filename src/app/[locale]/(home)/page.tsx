import HomeComponents from "@/components/pages/home/HomeComponents";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Мост в Кыргызстан",
  description:
    "Brücke nach Kirgisistan — это независимая некоммерческая организация, основанная в Швейцарии в 2012 году.",
  url: "https://most-kyrgyzstan.vercel.app",
  image: "/logo.png",
});

const Home = () => <HomeComponents />;

export default Home;
