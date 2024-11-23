import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
export default function Header(){
    return(<div>
        <ul className="gap-10 lg:gap-16 hidden md:flex  justify-end p-4 ">
    <li className="menuLink"><Link href="/" >Home</Link></li>
    <li className="menuLink "><Link  href="/about">About</Link></li>
    <li className="menuLink"><Link href="/contact">Contact</Link></li>
    
     
</ul>

<MdOutlineMenu className="md:hidden" size={30}/>
    
            </div>
    
    );

};
