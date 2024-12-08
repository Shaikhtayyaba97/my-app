import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
export default function Nav1(){
    return(
        <div >
            <div className="flex border-b p-3 justify-between ">
            <div> < IoIosSearch color="purple" size={30}  /> </div>
             <div className='ml-64 text-xl [color:rgba(42, 37, 75, 1)]'>Avion</div>
               <div><p className="flex text-purple-800 ml-72 gap-3 "><RiShoppingCart2Line size={30} />
             <Image src='/header.png' alt="logo" width={20} height={50}/> </p></div>
            
        </div>
        <div>
            <ul className="flex justify-center gap-6 m-4 text-gray-500">
                <li>Plant pots</li>
                <li>Ceramics</li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li>
                
            </ul>
            <ul className=" flex gap-5 justify-center">
              <li ><Link href='/'>Home</Link></li>
              
              <li><Link href='/product'>Product Listing</Link></li>
              <li><Link href='shopping'>Shoping Basket  </Link></li>
              <li><Link href='/product2'></Link>Product-listing2</li>
            </ul>
        </div>
        </div>
        
    )
}