export default function Skill(){
    return(
        <div className=" container pt-32 m-4 p-4">
            <div className=" grid md:grid-cols-2 gap-20 items-center">
                <div data-aos="zoom-in-up">
                    <h2 className="text-4xl md:text-sxl">Technologies I work with</h2>
                    <p className="text-gray-600 pt-2">I have created website by using <i>Html</i> and <i>Css</i>. I also have knowledge of <i>Typescript</i> and my <b>Nextjs</b> learning is going on.</p>
                </div>
                <div>
                    <div className="grid grid-cols-2 text-emerald-900 text-3xl sm:text-4xl">
                        <div className="space-y-2">
                            <h2 data-aos="zoom-in-up">Html</h2>
                            <h2 data-aos="zoom-in-up">Css</h2>
                            <h2 data-aos="zoom-in-up">Typescript</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>
                            

                        </div>
                        <div className="space-y-2">
                            <h2 data-aos="zoom-in-up">Tailwind</h2>
                            <h2 data-aos="zoom-in-up">Costum css</h2>
                            
                            

                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}