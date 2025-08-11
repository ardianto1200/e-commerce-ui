import Link from "next/link";
import Image from "next/image";
    const Footer = () =>{
        return(
            <div className="mt-16 flex flex-col item-center gap-8 md:flex-row md:item-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg ">
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <Link href="/" className="flex item-center">
                        <Image src="/logo.png" alt="Ardi" width={36} height={36}/> 
                        <p className="hidden md:block text-md font-medium tracking-wider text-white">Aleumdaun</p>
                    </Link>
                    <p className="text-sm text-gray-400">2025 Aleumdaun</p>
                    <p className="text-sm text-gray-400">All Right Reserved</p>
                </div>

                <div className="flex flex-col gap-4 items-center md:items-start text-gray-400">
                    <p className="text-sm text-amber-50">Links</p>
                    <Link href="/">Hompage</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Term of Services</Link>
                    <Link href="/">Privacy Policy</Link>

                </div>

                <div className="flex flex-col gap-4 items-center md:items-start text-gray-400">
                    <p className="text-sm text-amber-50">Product</p>
                    <Link href="/">All Product</Link>
                    <Link href="/">New Arivals</Link>
                    <Link href="/">Best Sellers</Link>
                    <Link href="/">Sale</Link>

                </div>

                <div className="flex flex-col gap-4 items-center md:items-start text-gray-400">
                    <p className="text-sm text-amber-50">Company</p>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Affiliate Program</Link>

                </div>
            </div>
        )
    };


export default Footer