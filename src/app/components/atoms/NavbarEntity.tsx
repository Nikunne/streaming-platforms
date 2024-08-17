import Link from "next/link";
import React, {useEffect, useState} from "react";
import { usePathname } from 'next/navigation'
import { MdHome } from "react-icons/md";

interface NavbarEntityProps {
    name: string;
    home?: boolean
}

const NavbarEntity: React.FC<NavbarEntityProps> = ({ name , home = false}) => {

    const pathname = usePathname()
    const [isActive, setIsActive] = useState<boolean>(false)

    function logger(strToLog: string) {
        console.log(strToLog);
    }

    useEffect(() => {
        setIsActive(pathname === `/${name.toLowerCase()}`);
        console.log(23);
    }, [pathname, name]);

    return (
        home ? (
        <Link className={` m-2 relative   block after:block after:content-[''] after:absolute after:h-[3px] after:bg-neutral-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-170 after:origin-left`} onClick={() => logger(name)} href={"/"}>
            <MdHome  className="size-10"/>
        </Link>) :
            (
                <Link className={`m-2 relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-neutral-50 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-170 after:origin-right ${isActive ? 'font-bold text ' : ''}`} onClick={() => logger(name)} href={"/".concat(name.toLowerCase())}>
                    {name}
                </Link>
            )

    );
}
export default NavbarEntity;