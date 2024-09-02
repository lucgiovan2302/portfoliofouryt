import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Lucien ANDRIAMIHAJA | Web Developer",
  description: "Créer par Lucien ANDRIAMIHAJA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
