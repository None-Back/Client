import {useState} from "react";

interface IData {
    index : number,
    title : string,
    day : string,
    pathName : string,
    clicked : boolean,
    event : React.Dispatch<React.SetStateAction<number>>
}

const MusicCard = ({ index, title, day, pathName, clicked, event}: IData) => {
    const titleObj = {
        className : "text-black font-medium text-lg",
        children : title,
    }

    const dayObj = {
        className : "text-slate-500 text-sm",
        children : day
    }

    const audioObj = {
        className : "w-full",
        controls : true,
        src : pathName
    }

    return (
        <div
            className={`${clicked ? "col-span-2" : "col-span-1"} rounded-lg border border-slate-300 hover:border-slate-400 w-auto`}
            onClick={() => event(index)}>
            <div className={"p-1.5"}>
                <p {...titleObj} />
                <p {...dayObj} />
            </div>
            <div className={"bg-[#f0f3f4] rounded-b-lg border-slate-300"}>
                <audio {...audioObj} />
            </div>
        </div>
    );
}

export default MusicCard;