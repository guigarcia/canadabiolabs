import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import DisclaimerModal from "@/components/DisclaimerModal/DisclaimerModal";

export const metadata: Metadata = {
  title: "CanadaBioLabs Brasil - Fornecedor Líder em Pesquisa Inovadora",
  description: "CanadaBioLabs é um fornecedor líder de produtos sintéticos industriais inovadores de pesquisa, proteínas e peptídeos de pesquisa para pesquisa em ciências da vida em todo o mundo há mais de 10 anos.",
  keywords: "peptídeos, proteínas, reagentes laboratoriais, pesquisa científica, CanadaBioLabs, laboratório",
  authors: [{ name: "CanadaBioLabs" }],
  robots: "index, follow",
  openGraph: {
    title: "CanadaBioLabs Brasil",
    description: "Fornecedor líder de produtos para pesquisa científica",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <DisclaimerModal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
