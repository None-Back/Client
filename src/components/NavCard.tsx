import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";

interface INavCard {
  pathname: string;
  href: string;
  title: string;
}

const NavCard = ({ pathname, href, title }: INavCard) => {
  return (
    <Link
      href={href}
      className={`flex w-full items-center h-12 px-6 rounded-xl ${
        pathname === href ? "bg-gray-200" : ""
      }`}
    >
      <ul className="flex w-full justify-between items-center">
        <span>{title}</span>
        <MdArrowDropDown />
      </ul>
    </Link>
  );
};

export default NavCard;
