import { Metadata } from "next";
import HomePage from "../../components/Home/Home"

export const metadata: Metadata = {
  title: "Suwalif",
  description: "Created By Zeyad Mashaal",
};
export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
