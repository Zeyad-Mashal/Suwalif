import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import styles from "./styles.module.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suwlif Tea",
  description: "Suwlif Tea Made By Zeyad Mashaal",
}


type Props = {
  children: React.ReactNode;
  params: {
    locale: "ar" | "en"
  }
}

const RootLayout: React.FC<Props> = ({
  children,
  params: { locale },
}) => {

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body
          className={locale === "ar" ? styles.arbic : styles.english}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
export default RootLayout;