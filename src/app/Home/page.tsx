import Link from "next/link";
import { Download } from "lucide-react";

const Home1 = () => {
    return(
        <div className="">
            <div className="h-[90vh] flex justify-evenly items-center relative z-1 text-white">
                    <div className="Body-Text-Container">
                        <h1 className="text-3xl font-bold mb-2">Hey, I'm <span className="text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Arman</span> 👋</h1>
                        <p>Artificial Intelligence and Web Dev Enthusiast</p>
                        <div className="flex flex-wrap mt-2 gap-2">
                            <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                                <Download size={20} />
                                <a href="/resume.pdf" download >Download Resume</a>
                            </button >
                            <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                                <Download size={20} />
                                <Link href="/Experience">See Projects</Link>
                            </button >
                        </div>
                    </div>
                  {/* <image id="myImg" src={MyImg} /> */}
            </div>
            {/* {<About /><Skills />} */}
        </div>
      
    );
};


export default Home1;
