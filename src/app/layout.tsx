import type { Metadata } from "next";
import NavBar from "@/component/navbar/NavBar";
import Footer from "@/component/footer/Footer";
import "@/style/globals.scss";

export const metadata: Metadata = {
  title: "English Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
