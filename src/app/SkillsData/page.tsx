import Header from "../Header/page";

type SkillsDataProps = {
    imgLink : string;
    imgData : string
}

const SkillsData = ({imgLink , imgData}:SkillsDataProps) => {
    return(
        <div>
            
            <div className="m-2 w-26 border-1 flex flex-col justify-between items-center rounded-xl text-center hover:scale-110">
                    <img className="pt-2.5 pr-3 pb-0 pl-3 h-16" src={imgLink} />
                    <p className="m-2">{imgData}</p>
            </div>
                
        </div>
    );
};

export default SkillsData;