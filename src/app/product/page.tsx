import Nav1 from "../components/Header";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import Footer from "../components/Footer";

export default function Listing() {
  return (
    <div className="bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
      <Nav1 />

      <div>
        <Image src="/Page Headers.png" alt="headerpic" width={2000} height={200} />
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap justify-between px-6 py-4">
        <ul className="flex gap-4 flex-wrap text-sm sm:text-base">
          <li className="flex gap-1">Category<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Product Type<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Price<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Brand<IoMdArrowDropdown /></li>
        </ul>
        <ul className="flex gap-3 flex-wrap text-sm sm:text-base">
          <li>Sorting by:</li>
          <li className="flex gap-1">Date Added<IoMdArrowDropdown /></li>
        </ul>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {/* Example Product */}
        {[
          { src: "/chair.png", name: "The Dandy Chair", price: "£250" },
          { src: "/doublepot.png", name: "Rustic Vase Set", price: "£155" },
          { src: "/singlepot.png", name: "The Silky Vase", price: "£125" },
          { src: "/light.png", name: "The Lucy Lamp", price: "£399" },
        ].map((product, index) => (
          <div key={index} className="text-blue-950 p-4 flex flex-col items-center">
            <ul>
              <li>
                <Image src={product.src} alt={product.name} width={350} height={100} />
              </li>
              <li className="mt-3">{product.name}</li>
              <li className="mt-3">{product.price}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center my-8">
        <button className="py-2 px-6 bg-transparent text-blue-950 border border-blue-950 text-xs hover:bg-blue-700 hover:text-white transition">
          View Collection
        </button>
      </div>

      <Footer />
    </div>
  );
}