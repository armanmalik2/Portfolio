import Header from "../Header/page";
import SkillsData from "../SkillsData/page";

const Skills = () => {
    return(
        <>
        <Header />
        <div className="w-full h-screen flex flex-col justify-center items-center relative z-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <p className="text-amber-50">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p><br/>
                <h1 className="text-5xl">Skills</h1><br/>
                <p>The main area of expertise is front end development (client side of the web).</p>
                <p>HTML, CSS, JS, building small and medium web applications, animations, and coding interactive layouts.</p><br/>
                <p>Visit my <a href="/" className="text-blue-500" >Linkedin</a> for more details.</p>
                <br/><br/>
            </div>
            <div className="Skills-Container flex  justify-center items-center move">
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719388321/html_fejvsv.svg" imgData="HTML" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719388267/css_bdxk3t.svg" imgData="CSS" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719389015/file_3_ylzus1.png" imgData="JAVASCRIPT" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719392183/file_7_fkikio.png" imgData="REACT" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391159/file_4_lzsyfn.png" imgData="SQLite" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391558/file_5_l9mlu6.png" imgData="JAVA" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391665/Remove_background_project_h3jhri.png" imgData="PYTHON" />
                <SkillsData imgLink="https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=512" imgData="Tailwind" />
                <SkillsData imgLink="https://cdn.iconscout.com/icon/free/png-512/free-typescript-3521774-2945272.png?f=webp&w=512" imgData="TypeScript" />
                <SkillsData imgLink="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" imgData="Next JS" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719388321/html_fejvsv.svg" imgData="HTML" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719388267/css_bdxk3t.svg" imgData="CSS" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719389015/file_3_ylzus1.png" imgData="JAVASCRIPT" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719392183/file_7_fkikio.png" imgData="REACT" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391159/file_4_lzsyfn.png" imgData="SQLite" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391558/file_5_l9mlu6.png" imgData="JAVA" />
                <SkillsData imgLink="https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391665/Remove_background_project_h3jhri.png" imgData="PYTHON" />
                <SkillsData imgLink="https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=512" imgData="Tailwind" />
                <SkillsData imgLink="https://cdn.iconscout.com/icon/free/png-512/free-typescript-3521774-2945272.png?f=webp&w=512" imgData="TypeScript" />
                <SkillsData imgLink="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" imgData="Next JS" />

            </div>
        </div>
        </>
    );
};

export default Skills;