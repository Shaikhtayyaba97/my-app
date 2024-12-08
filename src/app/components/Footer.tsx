import { RiFacebookBoxFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { GrSkype } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="bg-[rgb(24,37,75,100)] ">
<div className="flex flex-row text-white justify-around gap-7 border-b-2   ">
    <div className="m-10 " ><ul className="space-y-4">
        <li>Menu</li>
        <li>New arrivals</li>
        <li>Best sellers</li>
        <li>Recently viewed</li>
        <li>Popular this week</li>
        <li>All products</li></ul></div>
        <div className="m-10"><ul className="space-y-4">
        <li>Categories</li>
        <li>Crockery</li>
        <li>Furniture</li>
        <li>Homeware</li>
        <li>Plant pots</li>
        <li>Chairs</li>
        <li>Crockery</li>
        </ul></div>
        <div className="m-10"><ul className="space-y-4">
        <li>Our company</li>
        <li>About us</li>
        <li>Vacancies</li>
        <li>Contact us</li>
        <li>Privacy</li>
        <li>Returns policy</li></ul></div>
        <div className="m-10"><ul className="space-y-4">
        <li>Join our mailing list</li>
        
        <li>
        

    <div className="flex w-[550px] h-10 bg-transparent " >
    
      <input
        type="email"
        placeholder="your@email.com"
        className="  p-2 w-3/4  focus:outline-none" style={{ background:'rgba(77,78,147,0.39)'}} 
      />
      <button className="py-2 px-6 bg-slate-100 text-[rgb(24,37,75,100)] text-xs  hover:bg-blue-700">
        Sign Up
      </button>
    </div>
         
 </li></ul></div>
    
</div>


<div className="flex justify-between p-10 m-10  ">

    <div className="text-white " >Copyright 2022 Avion LTD</div>
    <div className="flex gap-7 " ><RiFacebookBoxFill style={{color:'white'}} size={40}  />
    <LuInstagram style={{color:'white'}} size={40}  />
    <GrSkype style={{color:'white'}} size={40}  />
    <FaTwitter style={{color:'white'}} size={40}  />
    <FaPinterest style={{color:'white'}} size={40}  />
    <FaLinkedin style={{color:'white'}} size={40}  />



    </div>
</div>
        </div>
    )
}