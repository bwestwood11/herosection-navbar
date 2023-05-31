import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";

const DesktopNavbar = () => {
  return (
    <div className="fixed hidden sm:flex w-full bottom-10 z-40 text-center items-center justify-center">
      <div className="bg-black flex items-center text-white rounded-full mx-auto max-w-[660px] px-3 py-5">
        <ul className="flex gap-10 justify-around text-xl items-center">
          <li className="rounded-full bg-gray-700 p-3 flex-nowrap">
            <SlArrowUp className="text-2xl mx-auto cursor-pointer" />
          </li>
          <Link href="/portfolio">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
        Portfolio
          </li>
            </Link>
          <Link href="/pricing">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
        Pricing
          </li>
            </Link>
          <Link href="/faq">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
        FAQ
          </li>
            </Link>
          <Link href="/schedule">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
        Book A Call
          </li>
            </Link>
            <Link href='/login'>
                <li className="bg-gray-700 rounded-full tracking-tight p-3">
                    Login
                </li>
            </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
