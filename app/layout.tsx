import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxzixuanwang.github.io"),
  title: "Max Wang — Academic Homepage",
  description:
    "Max Wang's personal academic homepage, research interests, and updates.",
  openGraph: {
    title: "Max Wang — Academic Homepage",
    description:
      "Personal academic homepage, research interests, and updates.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
