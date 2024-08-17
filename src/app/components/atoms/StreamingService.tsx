"use client"
import React, {useEffect, useState} from "react";


interface StreamingService {
    name: string
}



const StreamingService: React.FC<StreamingService> = ({name: string}) => {
    const [left, setLeft] = useState(true);
    function clicker() {
        console.log(left);
        setLeft(!left)
    }
    return (
        <div className={` p-1 ${left ? "text-left" : "text-right"}`} onClick={clicker}>
            <img src={"./public/next.svg"} alt={"bnexths"}>
            </img>
        </div>
    )

}

export default StreamingService;