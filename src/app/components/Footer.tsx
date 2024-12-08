import { RiFacebookBoxFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { GrSkype } from "react-icons/gr";
import { FaTwitter, FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[rgb(24,37,75,100)]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row text-white justify-around gap-7 border-b-2 p-6">
        <div className="m-4">
          <ul className="space-y-4">
            <li className="font-semibold">Menu</li>
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        <div className="m-4">
          <ul className="space-y-4">
            <li className="font-semibold">Categories</li>
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
        </div>

        <div className="m-4">
          <ul className="space-y-4">
            <li className="font-semibold">Our company</li>
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        <div className="m-4">
          <ul className="space-y-4">
            <li className="font-semibold">Join our mailing list</li>
            <li>
              <div className="flex w-full max-w-[400px] h-10 bg-transparent">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-2 w-3/4 focus:outline-none bg-[rgba(77,78,147,0.39)] text-white"
                />
                <button className="py-2 px-4 bg-slate-100 text-[rgb(24,37,75,100)] text-xs hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6">
        <div className="text-white mb-4 md:mb-0">
          Copyright 2022 Avion LTD
        </div>
        <div className="flex gap-4">
          <RiFacebookBoxFill className="text-white" size={30} />
          <LuInstagram className="text-white" size={30} />
          <GrSkype className="text-white" size={30} />
          <FaTwitter className="text-white" size={30} />
          <FaPinterest className="text-white" size={30} />
          <FaLinkedin className="text-white" size={30} />
        </div>
      </div>
    </div>
  );
}