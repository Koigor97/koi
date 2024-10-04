import { Nunito } from "next/font/google";
import "../globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
