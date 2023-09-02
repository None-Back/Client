"use client";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const Setting = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full">
      <SideBar pathname={pathname} />
      <main className="w-full">setting</main>
    </div>
  );
};

export default Setting;
