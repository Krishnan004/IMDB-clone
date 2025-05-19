import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: "IMDB clone",
  description: "IMDB clone website",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} text-gray-700 dark:text-white dark:bg-gray-700 min-h-screen transition-colors duration-300`}
      >
        <Provider>
          <Header />
          <NavBar/>
          {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
