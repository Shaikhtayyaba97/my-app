import Footer from "../components/Footer";
import Nav1 from "../components/Header";
import Image from "next/image";

export default function Shopping(){
    return(
        <div className="ml-10  mr-10 relative bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
            <Nav1/>
            <div>
           <h1 className="text-6xl m-10  text-blue-950"> Your shopping cart</h1>
            <ul className="flex gap-96  text-blue-950 border-b mb-10 border-gray-300">
                <li className="ml-96 mb-7" >Product</li>
                <li>Quantity</li>
                <li>Total</li>
            </ul>
          
           </div>
           <div>
            
            
           
           
            <ul className="text-right">
                <li className="text-gray-500">Subtotal</li>
                <li className="mt-4 mb-4 text-gray-500 ">Taxes and shipping are calculated at checkout</li>
                <li><button className="py-2 ml-32 px-6 bg-[rgba(128,0,128,0.5)] text-[rgb(91,96,118,100)] text-xs mt-2 hover:bg-blue-700">
                View Collection
              </button></li>
            </ul>
           </div>
            <Footer/>
        </div>
    )
}