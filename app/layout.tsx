import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbat";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Zustand demo",
    description: "created by NextGenDev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
