import { Nunito } from "next/font/google";
import "./globals.css";
import {ToastContainer} from 'react-toastify';

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"]});

export const metadata = {
  title: "Weather App",
  description: "Weather app created with Next.js by Sophie Woodcock",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      {children}
      <ToastContainer />
        </body>
    </html>
  );
}
