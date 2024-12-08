import Nav1 from "../components/Header";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import Footer from "../components/Footer";

export default function Listing() {
  return (
    <div className="bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
      <Nav1 />
      <div>
        <Image src="/page Headers.png" alt="headerpic" width={2000} height={200} />
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap justify-between m-6 gap-4">
        <ul className="flex flex-wrap gap-4">
          <li className="flex items-center gap-1">
            Category <IoMdArrowDropdown />
          </li>
          <li className="flex items-center gap-1">
            Product type <IoMdArrowDropdown />
          </li>
          <li className="flex items-center gap-1">
            Price <IoMdArrowDropdown />
          </li>
          <li className="flex items-center gap-1">
            Brand <IoMdArrowDropdown />
          </li>
        </ul>
        <ul className="flex flex-wrap gap-3">
          <li>Sorting by:</li>
          <li className="flex items-center gap-1">
            Date added <IoMdArrowDropdown />
          </li>
        </ul>
      </div>

      {/* Products Section */}
      <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[
          { img: "/chair.png", title: "The Dandy chair", price: "£250" },
          { img: "/doublepot.png", title: "Rustic Vase Set", price: "£155" },
          { img: "/singlepot.png", title: "The Silky Vase", price: "£125" },
          { img: "/light.png", title: "The Lucy Lamp", price: "£399" },
          { img: "/listing.png", title: "The Dandy chair", price: "£250" },
          { img: "/listing6.png", title: "Rustic Vase Set", price: "£155" },
          { img: "/listing5.png", title: "The Silky Vase", price: "£125" },
          { img: "/listin4.png", title: "The Lucy Lamp", price: "£399" },
        ].map((product, index) => (
          <div
            key={index}
            className="text-blue-950 p-4 flex flex-col items-center bg-white shadow-md rounded-md"
          >
            <ul>
              <li>
                <Image src={product.img} alt={product.title} width={350} height={100} />
              </li>
              <li className="mt-3 text-center">{product.title}</li>
              <li className="mt-3 text-center">{product.price}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Button Section */}
      <button className="block mx-auto py-2 mb-10 px-6 bg-transparent text-[rgb(24,37,75,1)] text-xs mt-36 hover:bg-blue-700">
        View Collection
      </button>

      <Footer />
    </div>
  );
}