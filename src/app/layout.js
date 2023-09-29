import Providers from "@/lib/Providers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import FloatingAction from "./components/theme/FloatingAction";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel Napiere | Portfolio",
  description: "Gabriel portfolio web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-900">
        <Providers>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
            <Footer />
            <FloatingAction />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
