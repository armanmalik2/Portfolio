import Link from "next/link";
const Header = () => {
    return(
        <div className="m-0 p-10 pt-7 flex justify-between items-center fixed top-0 z-20 h-[10vh] w-full bg-slate-800">
            <h3 className="font-extrabold text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">ARMAN</h3>
            <ul className="flex justify-between items-center ">
                <li className="m-[2vw] cursor-pointer"><Link href="/">Home</Link></li>
                <li className="m-[2vw] cursor-pointer"><Link href="/About">About</Link></li>
                <li className="m-[2vw] cursor-pointer"><Link href="/Skills">Skills</Link></li>
                <li className="m-[2vw] cursor-pointer"><Link href="/Project">Projects</Link></li>
                <li className="m-[2vw] cursor-pointer"><Link href="/Experience">Experience</Link></li>
                <li className="m-[2vw] cursor-pointer"><Link href="/ContactForm">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;