import {useEffect, useState} from "react";
import MusicCard from "@/components/MusicCard";

interface IRecord {
    title : string,
    day : string,
    pathName : string
}

const RecordFileList = () => {
    const [data, setData] = useState<IRecord[]>([]);
    const [clicked, setClicked] = useState<number>(1);

    useEffect(() => {
        const example :IRecord[] = [
            {
                title : "example1",
                day : "2012-12-31 13:10",
                pathName : "./path/example/example.mp3"
            }, {
                title : "example2",
                day : "2015-09-23 23:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example3",
                day : "2019-10-23 09:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example4",
                day : "2020-01-14 04:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example5",
                day : "2020-04-16 18:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example6",
                day : "2020-04-16 19:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example7",
                day : "2020-06-12 10:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example8",
                day : "2020-06-13 13:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example9",
                day : "2022-04-20 09:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example10",
                day : "2022-12-20 15:10",
                pathName : "./path/example/example.mp3"
            },{
                title : "example11",
                day : "2023-06-25 17:10",
                pathName : "./path/example/example.mp3"
            }
        ]
        setData(example);
    },[]);

    return (
        <div style={{ display: "grid",  gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gridAutoFlow:"dense", gap: "0.8rem", padding:"14px"}}>
            {data.map((item, index) => (
                <MusicCard key={index} index={index+1} {...item} event={setClicked} clicked={clicked === index+1}/>
            ))}
        </div>
    )
}

export default RecordFileList;