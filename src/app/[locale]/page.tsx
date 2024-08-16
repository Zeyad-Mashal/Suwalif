import { Metadata } from "next";
import HomePage from "../../components/Home/Home"
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
  title: "Suwalif",
  description: "Created By Zeyad Mashaal",
};
export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <HomePage />
    </main>
  );
}
