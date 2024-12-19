import { TbTruckDelivery } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { GrFormSubtract } from "react-icons/gr";

import Link from "next/link";


export default function Listing2() {
  return (
    <div>
      {/* Free delivery banner */}
      <div className="bg-purple-950 flex justify-center text-white p-2 text-center">
        <TbTruckDelivery size={20} className="m-2" />
        <p className="m-2 text-sm md:text-base">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      </div>

      {/* Header Section */}
      <div className="mx-4 md:mx-8 bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-4xl text-purple-900">Avion</div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex gap-6 text-gray-600 text-sm lg:text-base">
            <li>
              <Link href="/plant-pots">Plant Pots</Link>
            </li>
            <li>
              <Link href="/ceramics">Ceramics</Link>
            </li>
            <li>
              <Link href="/tables">Tables</Link>
            </li>
            <li>
              <Link href="/chairs">Chairs</Link>
            </li>
            <li>
              <Link href="/crockery">Crockery</Link>
            </li>
            <li>
              <Link href="/tableware">Tableware</Link>
            </li>
            <li>
              <Link href="/cutlery">Cutlery</Link>
            </li>
          </ul>

          {/* Search, Cart, and Logo */}
          <ul className="flex gap-5 items-center">
            <li>
              <IoIosSearch color="purple" size={30} />
            </li>
            <li>
              <RiShoppingCart2Line color="purple" size={30} />
            </li>
            <li>
              <Image src="/header.png" alt="logo" width={30} height={50} />
            </li>
          </ul>
        </div>

        {/* Submenu */}
        <div className="mt-4">
          <ul className="flex flex-wrap justify-center gap-6 text-purple-800 text-sm md:text-base">
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
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap mt-8 ml-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image src="/left.png" alt="left image" width={800} height={500} className="w-full h-auto" />
        </div>

        {/* Right Content */}
        <div className=" w-full lg:w-1/2 p-6">
          <h1 className="text-[rgb(42,37,75)]  ml-6 text-2xl md:text-4xl mt-4">The Dandy Chair</h1>
          <p className="text-[rgb(42,37,75)] ml-6 text-lg md:text-xl mt-2">£250</p>
          <h2 className="text-[rgb(42,37,75)] ml-6 text-xl md:text-2xl mt-6">Description</h2>
          <p className="text-[rgb(80,89,119)] ml-6 mt-4 text-sm md:text-base">
            A timeless design, with premium materials features as one of our most popular and iconic pieces. 
            The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
          </p>
          <ul className=" ml-6 mt-4 space-y-2 text-[rgb(80,89,119)] text-sm md:text-base">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          <h2 className="text-[rgb(42,37,75)] ml-6 text-xl md:text-2xl mt-6">Dimensions</h2>
          <div className=" grid grid-cols-3 gap-4 mt-4 text-center">
            <div>
              <h3 className="text-[rgb(42,37,75)]">Height</h3>
              <p className="text-[rgb(80,89,119)]">110cm</p>
            </div>
            <div>
              <h3 className="text-[rgb(42,37,75)]">Width</h3>
              <p className="text-[rgb(80,89,119)]">75cm</p>
            </div>
            <div>
              <h3 className="text-[rgb(42,37,75)]">Depth</h3>
              <p className="text-[rgb(80,89,119)]">50cm</p>
            </div>
          </div>
          <div className="flex ml-24 mt-32"><h1 >Amount:</h1> <br />
          <p className="mt-1 ml-6 text-gray-300"><GrFormSubtract />
          </p>
          <p className="ml-7">1</p>
          <p className="m-0 mt-1 ml-7 text-gray-300"><HiMiniPlusSmall />
          </p>
          <p className="bg-[rgb(42,37,75)] ml-72 text-white"><button className="w-36 h-16 ">Add to card</button></p></div>
        </div>
        
      </div>

      {/* Suggested Products Section */}
      <div className="mt-14 px-4">
        <h1 className="text-2xl md:text-4xl text-[rgb(42,37,75)] text-center">
          You might also like
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { src: "/chair.png", title: "The Dandy Chair", price: "£250" },
            { src: "/doublepot.png", title: "Rustic Vase Set", price: "£155" },
            { src: "/singlepot.png", title: "The Silky Vase", price: "£125" },
            { src: "/light.png", title: "The Lucy Lamp", price: "£399" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <Image src={item.src} alt={item.title} width={300} height={300} className="w-full h-auto" />
              <h2 className="mt-3 text-[rgb(24,37,75)]">{item.title}</h2>
              <p className="text-[rgb(80,89,119)]">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className=" mb-9 px-6 py-3 bg-[rgba(211,211,211,0.5)] text-[rgb(24,37,75)] text-sm hover:bg-blue-700">
            View Collection
          </button>
        </div>
      </div>
       <div className="mx-4 lg:mx-10  py-8">
                <h1 className="text-blue-900 text-center mb-10 text-2xl lg:text-3xl">
                  What makes our brand different
                </h1>
                <div className="flex flex-wrap justify-between gap-6 lg:gap-10 px-4 lg:px-24">
                  {[
                    {
                      icon: "/delivery.png",
                      title: "Next day as standard",
                      description: "Order before 3pm and get your order the next day as standard",
                    },
                    {
                      icon: <CiCircleCheck className="text-blue-950 text-4xl" />,
                      title: "Made by true artisans",
                      description: "Handmade crafted goods made with real passion and craftsmanship",
                    },
                    {
                      icon: "/Purchase.png",
                      title: "Unbeatable prices",
                      description: "For our materials and quality, you won’t find better prices anywhere",
                    },
                    {
                      icon: "/Sprout.png",
                      title: "Recycled packaging",
                      description: "We use 100% recycled to ensure our footprint is more manageable",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="text-blue-900 bg-gray-200 bg-opacity-20 p-4 w-full lg:w-[22%]">
                      <ul>
                        <li className="mb-4 flex justify-center">
                          {typeof feature.icon === "string" ? (
                            <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                          ) : (
                            feature.icon
                          )}
                        </li>
                        <li className="text-center text-lg font-semibold">{feature.title}</li>
                        <li className="mt-2 text-center text-sm">{feature.description}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center  py-8 px-4">
          <h2 className="text-2xl lg:text-4xl mb-6">Join the club and get the benefits</h2>
          <p className="text-sm mb-6">
            Sign up for our newsletter and receive exclusive offers on <br /> new ranges, sales, pop-up stores, and more
          </p>
          <ul className="flex flex-wrap justify-center gap-5">
            <li className="flex gap-2">
              <CiCircleCheck className="text-blue-950 mt-1" />
              Exclusive offers
            </li>
            <li className="flex gap-2">
              <CiCircleCheck className="text-blue-950 mt-1" />
              Free events
            </li>
            <li className="flex gap-2">
              <CiCircleCheck className="text-blue-950 mt-1" />
              Large discounts
            </li>
          </ul>
          <div className="flex mt-[50px] ml-[500px] pt-2 w-full max-w-md h-12 bg-transparent">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-2 w-3/4 focus:outline-none"
                  style={{ background: "rgba(77,78,147,0.39)" }}
                />
                <button className="py-2 px-6 bg-blue-950 text-white text-xs hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
          
        </div>
      
      

      {/* Footer */}
      <div className="bg-[rgb(24,37,75)] text-white py-10">
        <div className="flex flex-wrap justify-between px-6 md:px-10">
          {/* Footer Columns */}
          {[
            {
              title: "Avion",
              items: ["21 New York Street", "New York City", "United States of America", "432 34"],
            },
            {
              title: "Menu",
              items: ["New arrivals", "Best sellers", "Recently viewed", "Popular this week", "All products"],
            },


           
            {
              title: "Categories",
              items: ["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"],
            },
            {
              title: "Our company",
              items: ["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"],
            },
          ].map((column, index) => (
            <div key={index} className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="font-bold text-lg">{column.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {column.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}