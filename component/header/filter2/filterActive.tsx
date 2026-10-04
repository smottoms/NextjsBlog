'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function FilterActive({children, href}:{children:React.ReactNode, href:string}){
    const path = usePathname();
    const isActive = path ? (href === "/" ? path === "/" : path.startsWith(href)) : false;

    return(<>
            <Link href={href} className={isActive ? "font-bold px-3 py-1 rounded-full bg-[#ebebeb] text-[#1d1d1d]": "flex justify-center items-center border border-neutral-700 px-3 py-1 rounded-full text-neutral-400 hover:text-white"}>
            {children}
            </Link>
    </>)
}