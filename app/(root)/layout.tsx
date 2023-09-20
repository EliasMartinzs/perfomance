import Navbar from "@/components/Navbar";
import "../globals.css";
import React from "react";
import Footer from "@/components/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
