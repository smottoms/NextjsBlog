import Link from "next/link"
import Image from "next/image"
import { Camera } from 'lucide-react'


export default function Footer(){


    
    return(<>

        <footer>
            <div className="flex justify-between gap-20  p-10 pb-0">
                <div>
                <Link href={'/'}>
                    <Image src='/logo/favicon.png' width={100} height={100} alt='logo' className="w-auto h-12.5">

                    </Image>
                </Link>
                    </div>
    
                <div className=" flex gap-4 text-[grey] text-[15px]">
                    <a href="/" className="hover:text-[white]">       home</a> 
                    <a href="/topic" className="hover:text-[white]">  topic</a> 
                    <a href="/about" className="hover:text-[white]">  about</a> 
                    <a href="/contact" className="hover:text-[white]">contact</a> 
                    </div>

                <div className="flex justify-center gap-8">

                    <Link href="https://x.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
                        <Image src="/icons/x.svg" alt="X (formerly Twitter)" width={24} height={24} className="w-auto h-3 brightness-0 invert" />
                    </Link>

                    <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
                        <Image src="/icons/linkedin.svg" alt="X (formerly Twitter)" width={24} height={24} className="w-auto h-3 brightness-0 invert" />
                    </Link>

                    <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
                        <Image src="/icons/insta.svg" alt="X (formerly Twitter)" width={24} height={24} className="w-auto h-3 brightness-0 invert" />
                    </Link>
                   <div className=" text-[grey] text-[10px]"> &copy; 2026 Blog. All rights reserved</div>
                </div>
            </div>
        </footer>
    </>
    )
}