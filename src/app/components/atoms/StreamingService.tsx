"use client"
import React, {useEffect, useState} from "react";


interface StreamingService {
    name: string
}



const StreamingService: React.FC<StreamingService> = ({name}) => {
    const [left, setLeft] = useState(true);
    function clicker() {
        console.log(left);
        setLeft(!left)
    }


    return (
        <div className={` flex p-1 ${left ? "" : "justify-end"}`} >
            <img className={" ml-10 mr-10 hover:bg-green-700 hover:border-green-700 border-amber-50 border-8 size-20 "} src={"/logos/".concat(name).concat(".png")} alt={"bnexths"} onClick={clicker}>
            </img>
        </div>
    )
}

export default StreamingService;