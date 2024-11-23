import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact(){
    return(
        <div className="pt-32 container m-3 p-5">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
                    <p className="text-gray-600 text-[18px] pt-2 " data-aos="zoom-in-up">
                        Drop a line,give me a call oe send me a message by submittinh this form.
                    </p>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <IoIosMail size={30}/> Tayyabashahbaz2020@gmail.com
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <FaPhoneAlt size={30}/> 0314-3066596
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="h-[40px] bg-transparent border border-emerald-700" id="name" />
                    </div>
                
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="h-[40px] bg-transparent border border-emerald-700" id="email" />
                    </div>
                    
                    <div className="flex flex-col gap-1"data-aos="zoom-in-up">
                        <label htmlFor="msg">Message</label>
                        <textarea
                         className="bg-transparent border border-emerald-700" id="msg"
                        rows={8}/>
                
                    </div>
                    <button className="bg-green-700 p-2 px-6" data-aos="zoom-in-up">Send</button>

                </div>

            </div>
            
        </div>
    )
}