"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { MarqueeNotice } from "@/components/MarqueeNotice";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ToastContainer } from "@/components/ToastContainer";
import { LightboxModal } from "@/components/LightboxModal";

const dashboardRoutes = [
  "/dashboard",
  "/login",
  "/admin-users",
  "/admin-classes",
  "/sections",
  "/sessions",
  "/fee-structure",
  "/transport-routes",
  "/students",
  "/fee-collection",
  "/expenses",
  "/reports",
  "/receipt",
  "/settings",
];

export function WebsiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isDashboard = dashboardRoutes.some(
    (route) => pathname === route || pathname?.startsWith(route + "/")
  );

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <div className="website-wrapper min-h-screen flex flex-col bg-white text-gray-700">
      <TopBar />
      <MarqueeNotice />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ToastContainer />
      <LightboxModal />
    </div>
  );
}
