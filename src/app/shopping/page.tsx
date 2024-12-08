import Footer from "../components/Footer";
import Nav1 from "../components/Header";
import Image from "next/image";

export default function Shopping() {
  return (
    <div className="relative bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8 px-4 sm:px-6 lg:px-10">
      <Nav1 />
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-blue-950 m-10">
          Your shopping cart
        </h1>
        <ul className="flex flex-wrap justify-between gap-4 text-blue-950 border-b mb-10 border-gray-300 px-2">
          <li className="flex-1 text-left lg:text-center">Product</li>
          <li className="flex-1 text-center">Quantity</li>
          <li className="flex-1 text-right lg:text-center">Total</li>
        </ul>
      </div>

      <div className="mt-8 text-right">
        <ul className="text-sm sm:text-base">
          <li className="text-gray-500">Subtotal</li>
          <li className="mt-4 mb-4 text-gray-500">
            Taxes and shipping are calculated at checkout
          </li>
          <li>
            <button className="py-2 px-6 bg-[rgba(128,0,128,0.5)] text-[rgb(91,96,118,100)] text-xs mt-2 hover:bg-blue-700">
              View Collection
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}