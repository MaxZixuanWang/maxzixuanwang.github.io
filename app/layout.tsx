import type { Metadata } from "next";
import "./hallmark.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxzixuanwang.github.io"),
  title: "Zixuan Wang (Max) — Academic Homepage",
  description:
    "Academic homepage of Zixuan Wang (Max): projects, publications, and activities.",
  openGraph: {
    title: "Zixuan Wang (Max) — Academic Homepage",
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
