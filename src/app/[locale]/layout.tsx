import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import styles from "./styles.module.css"
import { getMessages } from "next-intl/server";
const inter = Inter({ subsets: ["latin"] });
import { CartProvider } from "./api/cart/CartContext"

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


export default async function RootLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body className={locale === "ar" ? styles.arbic : styles.english}>
          <CartProvider>
            {children}
          </CartProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
