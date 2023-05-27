'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <div   onClick={() => router.push('/')} className="hidden md:flex md:items-center gap-2 cursor-pointer">

 
    <Image
    
  
      src="/images/Booknowphlogo.png" 
      height="50" 
      width="50" 
      alt="Logo" 
    />
    <h1 className="font-bold">BookNowPH</h1>
       </div>
   );
}
 
export default Logo;
