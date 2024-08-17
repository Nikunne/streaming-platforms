import {Icon} from "@mui/material";
import NavbarEntity from "@/app/components/atoms/NavbarEntity";
import StreamingService from "@/app/components/atoms/StreamingService";


export default function page() {
    return (
        <main>
            <li>
                Liste 2
            </li>
            <li>
                Liste 4
            </li>
            <StreamingService name = "Netflix">

            </StreamingService>
        </main>
    );
}