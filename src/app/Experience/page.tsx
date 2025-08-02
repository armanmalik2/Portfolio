import { User,CodeXml, Building2, LocateIcon, MapPin, Timer, Calendar, Hourglass } from "lucide-react";
import Header from "../Header/page";
const Experience = () => {
    return(
        <>
        <Header />
        <div className="flex flex-col justify-center items-center  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className=" w-full h-[50vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold flex">Work <span className="text-orange-500">Experience</span></h1><br/>
                <p className="text-xl w-[80vw] text-center">Gained valuable experience developing scalable solutions and playing a key role in innovative, cutting-edge projects</p>
            </div>
            <div className="h-fit  bg-transparent max-w-93/100 min-w-80 border-1 border-orange-500 rounded-2xl p-10 shadow1 hover:scale-101">
                <h1 className="font-bold text-3xl mb-5 flex"><CodeXml className="icons size-10 text-orange-500"/> Web Developer</h1>
                <h1 className="flex">
                    <span className="opacity-75 mt-0 flex"><Building2 className="size-5 mr-1" />Cyberfort Tech</span>
                    <span className="opacity-75 ml-10 flex"><MapPin className="size-5 mr-1" /> Remote</span>
                </h1>
                <h1 className="mt-5 flex">
                    <span className="text-[12px] border-1 rounded-2xl p-1 pr-2 pl-2 text-orange-500 flex"><Calendar className="size-4 mr-1" />June 2025 - Present</span>
                    <span className="ml-5 text-[12px] border-1 rounded-2xl p-1 pr-2 pl-2 text-orange-500 flex"><Hourglass className="size-4 mr-1"/>Full-time</span>
                </h1>
                
                <h1 className="mt-5">
                    <span className="opacity-75 text-xl">Building responsive MERN stack apppcations for businesses with focus on user experience and performance optimization.</span>
                </h1>
                <h1 className="mt-5 text-2xl">Key Achievements:</h1>
                <div>
                    <h1 className="mt-5 opacity-75 flex items-center" ><p className="mr-2 w-3 h-3 rounded-2xl bg-orange-500" ></p>Built responsive MERN stack applications for diverse business needs</h1>
                    <h1 className="mt-5 opacity-75 flex items-center" ><p className="mr-2 w-3 h-3 rounded-2xl bg-orange-500" ></p>Designed reusable UI components ensuring cross-browser compatibility</h1>
                    <h1 className="mt-5 opacity-75 flex items-center" ><p className="mr-2 w-3 h-3 rounded-2xl bg-orange-500" ></p>Integrated third-party APIs including Stripe for payments and Firebase for real-time features</h1>
                    <h1 className="mt-5 opacity-75 flex items-center" ><p className="mr-2 w-3 h-3 rounded-2xl bg-orange-500" ></p>Participated in Agile methodology and collaborative code reviews</h1>
                    <h1 className="mt-5 opacity-75 flex items-center" ><p className="mr-2 w-3 h-3 rounded-2xl bg-orange-500" ></p>Optimized application performance and user experience</h1>
                </div>
                <h1 className="m-5 ml-0 text-2xl">Technologies Used:</h1>
                <div className="flex gap-4">
                    <span className="text-[12px] border-1 rounded-2xl p-1 pr-2 pl-2 text-orange-500 flex " >Next.Js</span>
                    <span className="text-[12px] border-1 rounded-2xl p-1 pr-2 pl-2 text-orange-500 flex" >Tailwind CSS</span>
                    <span className="text-[12px] border-1 rounded-2xl p-1 pr-2 pl-2 text-orange-500 flex" >React</span>
                </div>
            </div><br/>
        </div>
        </>
    );
};

export default Experience;