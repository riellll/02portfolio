import Providers from "@/lib/Providers";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import FloatingAction from "../components/theme/FloatingAction";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { Inter } from "next/font/google";
import { NextProviders } from "./providers";
import Navbarr from "../components/Navbarr";

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
          <NextProviders>
            <StyledComponentsRegistry>
              <Navbarr />
              {children}
              <Toaster/>
              <Footer />
              <FloatingAction />
            </StyledComponentsRegistry>
          </NextProviders>
        </Providers>
      </body>
    </html>
  );
}
