"use client";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const History = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full">
      <SideBar pathname={pathname} />
      <main className="w-full">history</main>
    </div>
  );
};

export default History;
