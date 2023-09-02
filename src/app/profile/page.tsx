"use client";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const Profile = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full">
      <SideBar pathname={pathname} />
      <main className="w-full">profile</main>
    </div>
  );
};

export default Profile;
