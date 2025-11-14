import * as Next from "next";
import * as Ui from "@/ui";

import localFont from "next/font/local";

import "./globals.css";

const Bradford = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../../public/fonts/BradfordLLWeb-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-LightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-Book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-BookItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/BradfordLLWeb-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

const TrueSans = localFont({
  variable: "--font-interface",
  src: [
    {
      path: "../../public/fonts/TrueSans-Hairline.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-HairlineItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-UltraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-Thin.woff2",
      weight: "250",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-ThinItalic.woff2",
      weight: "250",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-Book.woff2",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-BookItalic.woff2",
      weight: "350",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-UltraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-UltraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/TrueSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrueSans-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export const metadata: Next.Metadata = {
  title: "Art Guard",
  description: "The Next Level In Asset Protection Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Bradford.variable} ${TrueSans.variable} antialiased`}>
        <Ui.Page.RootLayout>
          <Ui.Announcement.Bar />
          <Ui.Nav />
          {children}
          <Ui.Footer />
        </Ui.Page.RootLayout>
      </body>
    </html>
  );
}
