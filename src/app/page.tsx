"use client";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="flex w-full">
      <SideBar pathname={pathname} />
      <main className="w-full"></main>
    </div>
  );
}
