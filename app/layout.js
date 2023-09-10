import "./globals.css";
import { Lato, Inter } from "next/font/google";
import { Providers, SWRProvider } from "./providers";
import { Toaster } from "@/components/shared/toast/toaster";
import { cn } from "@/lib/utils";
import "react-loading-skeleton/dist/skeleton.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Coach Web",
  description: "Do tempor sint ad nulla consequat proident ut aliquip et et.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full bg-white">
      <body
        className={`${cn(
          lato.className,
          inter.variable
        )} flex h-full flex-col text-gray-veryDark antialiased`}
      >
        <SWRProvider>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </SWRProvider>
      </body>
    </html>
  );
}
