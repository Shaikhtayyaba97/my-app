import Navbar from "./Navbar";

export default function Hero(){
    return(
        <div className="bg-[url()] lg:bg-[url(/home.jpg)] min-h-screen bg-cover">
            <Navbar/>
            <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
                <div className="hidden lg:block"></div>
                <div className="text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center ">
                    <div>
                        <p data-aos="zoom-in-up">I'm</p>
                        <p data-aos="zoom-in-up">Tayyaba</p>
                        <p data-aos="zoom-in-up">Shahbaz</p>
                    </div>
                </div>

            </div>
        </div>
    )
}