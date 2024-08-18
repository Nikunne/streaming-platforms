import {Icon} from "@mui/material";
import NavbarEntity from "@/app/components/atoms/NavbarEntity";
import StreamingService from "@/app/components/atoms/StreamingService";


export default function page() {
    return (
        <main>
            <div className={" border-2 border-blue-950 ml-4 mr-4 flex justify-between"}>
                <p>
                    Aktive strømmetjenester
                </p>
                <p>
                    Avskrudde strømmetjenester
                </p>
            </div>
            <StreamingService name = "Netflix"/>
            <StreamingService name = "disney"/>

        </main>
    );
}