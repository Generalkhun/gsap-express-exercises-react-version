import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GSAP express exercises",
  description: "Exercises from gsap express",
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
