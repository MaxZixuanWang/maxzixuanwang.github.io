import type { Metadata } from "next";
import "./hallmark.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxzixuanwang.github.io"),
  title: "Max Wang — Academic Homepage",
  description:
    "Max Wang's personal academic homepage, projects, publications, and activities.",
  openGraph: {
    title: "Max Wang — Academic Homepage",
    description:
      "Personal academic homepage, projects, publications, and activities.",
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
