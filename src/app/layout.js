import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./redux/service/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login | E-School",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/school.png" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
