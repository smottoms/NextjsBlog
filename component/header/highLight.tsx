'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"



export default function Simple({children, href}:{children: React.ReactNode, href: string}){

    const path = usePathname();
    const isActive = href === "/" ? path === "/" : path?.startsWith(href);

    return(<>
            <Link href={href} className={isActive ? "border-b-2 font-semibold px-2 pb-2" : "px-2 pb-2"}>{children}</Link>
    </>)

}