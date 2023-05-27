'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <div className="flex items-center gap-2">

 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
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
