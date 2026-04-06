"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();
  const hiddenRoutes = ["/login", "/signup"];

  if (!pathname) {
    return <Navbar />;
  }

  const normalizedPath = pathname.replace(/\/$/, "");

  if (hiddenRoutes.includes(normalizedPath)) {
    return null;
  }

  return <Navbar />;
};

export default ConditionalNavbar;
