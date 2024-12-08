"use client"; // Ensures this component runs on the client side

import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className="flex items-center justify-between border-b p-3">
        {/* Search Icon */}
        <div>
          <IoIosSearch color="purple" size={30} />
        </div>

        {/* Logo */}
        <div className="text-xl text-[rgba(42,37,75,1)]">Avion</div>

        {/* Cart & User Icon */}
        <div className="flex items-center gap-3">
          <RiShoppingCart2Line className="text-purple-800" size={30} />
          <Image src="/header.png" alt="logo" width={20} height={50} />
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="border-b">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-6 m-4 text-gray-500">
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-5 justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Product Listing</Link>
          </li>
          <li>
            <Link href="/shopping">Shopping Basket</Link>
          </li>
          <li>
            <Link href="/product2">Product Listing 2</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center p-4">
          <button
            className="text-purple-800 text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 text-gray-500 p-4">
            <ul className="flex flex-col gap-3">
              <li>Plant pots</li>
              <li>Ceramics</li>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Crockery</li>
              <li>Tableware</li>
              <li>Cutlery</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/product">Product Listing</Link>
              </li>
              <li>
                <Link href="/shopping">Shopping Basket</Link>
              </li>
              <li>
                <Link href="/product2">Product Listing 2</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}