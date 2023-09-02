import Image from "next/image";
import Link from "next/link";
import { HiSelector } from "react-icons/hi";
import NavCard from "./NavCard";

interface ISideBar {
  pathname: string;
}

const SideBar = ({ pathname }: ISideBar) => {
  return (
    <aside className="flex flex-col w-[22rem] h-screen px-2 bg-[#f9f9fc]">
      <div className="flex items-center px-4 text-lg">
        <div className="flex items-center py-5 w-full border-b px-4">
          <Link href={"/"}>
            <h1>
              Minute <span className="text-blue-300">Mind</span>
            </h1>
          </Link>
        </div>
      </div>
      <Link
        href={"/profile"}
        className={`flex items-center px-6 py-4 my-2 rounded-lg ${
          pathname === "/profile" ? "bg-gray-200" : ""
        }`}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src="/profile.jpeg" alt="profile" width={100} height={100} />
        </div>
        <span className="ml-5">현용재</span>
      </Link>
      <div className="flex h-12 items-center px-2 relative">
        <select className="w-full h-full px-4 mb-2">
          <option value="group1">group1</option>
          <option value="group2">group2</option>
          <option value="group3">group3</option>
          <option value="group4">group4</option>
        </select>
        <HiSelector className="absolute right-8" />
      </div>
      <nav>
        <NavCard pathname={pathname} title="녹음" href="/record" />
        <NavCard pathname={pathname} title="회의 기록" href="/history" />
        <NavCard pathname={pathname} title="그룹 설정" href="/setting" />
      </nav>
    </aside>
  );
};

export default SideBar;
