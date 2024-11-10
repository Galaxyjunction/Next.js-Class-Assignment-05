import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "MANZZARI",
  description: "Jewelry website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
