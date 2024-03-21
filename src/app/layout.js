import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Constantino Restaurante",
  description: "Restaurante Constantino en Rawson Chubut Menu diario Hamburguesas pizzas bebidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
