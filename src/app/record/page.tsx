"use client";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";
import RecordFileList from "@/content/record/RecordFileList";

const Record = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full">
      <SideBar pathname={pathname} />
      <main className="w-full">
          <img src={"/dummp.png"} />
          <RecordFileList />
      </main>
    </div>
  );
};

export default Record;