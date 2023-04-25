import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
});

export const metadata = {
  title: "Andros",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.style.fontFamily}>{children}</body>
    </html>
  );
}
