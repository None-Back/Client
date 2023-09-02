"use client";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const Record = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full">
      <SideBar pathname={pathname} />
      <main className="w-full">record</main>
    </div>
  );
};

export default Record;
