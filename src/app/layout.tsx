import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { BrandingProvider } from "@/lib/branding-context";
import { ThemeProvider } from "@/lib/theme-context";
import { AppProvider } from "@/context/AppContext";
import { WebsiteChrome } from "@/components/WebsiteChrome";
import { SchoolFaviconBootstrap } from "@/components/shared/school-favicon-bootstrap";
import { Toaster } from "@/components/ui/toaster";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const heading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A.K. Sunshine Convent School | Nagla Sikandar, Tundla, Firozabad",
  description:
    "A.K. Sunshine Convent School is a premier educational institution in Tundla, Firozabad, offering co-educational holistic learning, smart digiboards, safe transport, and experienced educators.",
  icons: {
    icon: "/img/logo1.png",
  },
};

const themeBootScript = `
(function(){
  try {
    var t = localStorage.getItem('fees-theme') || 'system';
    var dark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Handlee&family=Nunito:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${sans.variable} ${heading.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider>
          <AuthProvider>
            <BrandingProvider>
              <AppProvider>
                <SchoolFaviconBootstrap />
                <WebsiteChrome>{children}</WebsiteChrome>
                <Toaster />
              </AppProvider>
            </BrandingProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
