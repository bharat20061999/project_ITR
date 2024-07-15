import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dhangurus",
  description: "One Stop Solution for Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Box>
            <Navbar />
          </Box>
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
