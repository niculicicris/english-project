import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
