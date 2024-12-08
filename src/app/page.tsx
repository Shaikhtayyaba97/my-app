import Footer from "./components/Footer";
import Nav1 from "./components/Header";
import { Button } from "@/components/ui/button";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Nav1 />
      <section>
        <div className="relative w-full h-full bg-[url('/background.png')] bg-cover bg-center flex">
          <div className="w-[800px]"> 
            
          </div>

          <div className="bg-white m-[200px] w-[1000px] h-[400px]">
            <p className="mt-14 ml-20 text-3xl text-[rgb(34,36,46,100)]">
              Luxury homeware for people <br /> who love timeless design quality
            </p>
            <p className="text-xs text-[rgb(91,96,118,100)] ml-20 mt-8">
              Shop the new Spring 2022 collection today
            </p>
            <button className="py-2 ml-32 px-6 bg-gray-50 text-[rgb(91,96,118,100)] text-xs mt-36 hover:bg-blue-700">
                View Collection
              </button>
          </div>
        </div>

        
        <div className="ml-10 mr-10 relative bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
          <h1 className="text-blue-900 text-center m-10 text-3xl">
            What makes our brand different
          </h1>
          <div className="flex justify-between ml-24 mr-24">
           
            <div className="text-blue-900 bg-gray-200 bg-opacity-20 p-4">
              <ul>
              <li className="mt-10 mb-3 ml-6">
                <Image src="/delivery.png" alt="truck" width={20} height={20} />
              </li>
              <li className="mb-2 text-xl text-blue-950 ml-6 mr-6">Next day as standard</li>
              <li className="ml-6 mr-6">
                Order before 3pm and get <br /> your order the next day as <br /> standard
              </li></ul>
            </div>

           
            <div className="text-blue-900 bg-gray-200 bg-opacity-20 p-4">
             <ul> <li className="mt-10">
                <CiCircleCheck className="text-blue-950" />
              </li>
              <li className="mt-2 mb-2 text-xl text-blue-950 mr-6">Made by true artisans</li>
              <li>Handmade crafted goods <br /> made with real passion and <br /> craftsmanship</li></ul>
            </div>

            <div className="text-blue-900 bg-gray-200 bg-opacity-20 p-4">
             <ul> <li className="mt-10">
                <Image src="/purchase.png" alt="truck" width={20} height={20} />
              </li>
              <li className="mt-2 mb-2 text-xl text-blue-950">Unbeatable prices</li>
              <li>
                For our materials and quality <br /> you won’t find better prices <br /> anywhere
              </li></ul>
            </div>

            
            <div className="text-blue-900 bg-gray-200 bg-opacity-20 p-4">
              <ul><li className="mt-10">
                <Image src="/sprout.png" alt="truck" width={20} height={20} />
              </li>
              <li className="mt-2 mb-2 text-xl text-blue-950">Recycled packaging</li>
              <li>We use 100% recycled to <br /> ensure our footprint is more <br /> manageable</li></ul>
            </div>
          </div>
        </div>

       
        <div className="m-10 mr-14">
          <div className="flex gap-4">
            <div className="text-blue-950 p-4">
              <ul>
              <li>
                <Image src="/chair.png" alt="chair" width={350} height={100} />
              </li>
              <li className="mt-3">The Dandy chair</li>
              <li className="mt-3">£250</li></ul>
            </div>
            <div className="text-blue-950 p-4">
              <ul>
              <li>
                <Image src="/doublepot.png" alt="doublepot" width={350} height={100} />
              </li>
              <li className="mt-3">Rustic Vase Set</li>
              <li className="mt-3">£155</li></ul>
            </div>
            <div className="text-blue-950 p-4">
              <ul>
              <li>
                <Image src="/singlepot.png" alt="pot" width={350} height={100} />
              </li>
              <li className="mt-3">The Silky Vase</li>
              <li className="mt-3">£125</li></ul>
            </div>
            <div className="text-blue-950 p-4">
              <ul>
              <li>
                <Image src="/light.png" alt="light" width={350} height={100} />
              </li>
              <li className="mt-3">The Lucy Lamp</li>
              <li className="mt-3">£399</li></ul>
            </div>
          </div>
          <div className="text-[rgb(91,96,118,100)] m-9 ml-[650px] mt-11">
            <Button variant="outline">View collection</Button>
          </div>
        </div>

        
        <div className="flex m-7 gap-10 mt-28">
          <div className="bg-purple-950 flex-1 text-gray-300 w-[300px]">
            <ul className="m-28">
              <li className="text-3xl mb-6"> It started with a small idea</li>
              <li>
                A global brand with local beginnings, our story began in a <br /> small studio in South London in early 2014
              </li>
              <button className="py-2 px-6 bg-gray-500 text-[rgb(24,37,75,100)] text-xs mt-36 hover:bg-blue-700">
                View Collection
              </button>
            </ul>
          </div>
          <div className="flex-1 w-[900px]">
            <Image src="/divimage.png" alt="div-image" width={700} height={500} />
          </div>
        </div>
        <div className= ' m-11 text-center relative bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8'>
          <div className="text-4xl mt-20 mb-8">Join the club and get the benefits</div>
          <div className="mb-8">Sign up for our newsletter and receive exclusive offers on <br /> new ranges, sales, pop up stores and more</div>
          <div >
            <ul className="flex flex-row justify-center mb-8 gap-5">
              <li className="flex gap-2"><CiCircleCheck className="text-blue-950 mt-1" />Exclusive offers</li>
              <li className="flex gap-2"><CiCircleCheck className="text-blue-950 mt-1" /> Free events</li>
              <li className="flex gap-2"><CiCircleCheck className="text-blue-950 mt-1" />Large discounts</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}