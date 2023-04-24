'use client';
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const MenuList = () => {
  const router = useRouter();

  return ( 
    <nav>
        <ul className="hidden md:flex flex-row gap-5 text-center relative">
            <li className="hover:text-amber-500" onClick={() => router.push('/posts')}>Posts</li>
            <li className="hover:text-amber-500" onClick={() => router.push('/news')}>News</li>
            <li className="hover:text-amber-500" onClick={() => router.push('/forum')}>Forum</li>
            <li className="hover:text-amber-500" onClick={() => router.push('/shop')}>Shop</li>
        </ul>
        {/* <MenuItem 
                label="Posts" 
                onClick={() => router.push('/posts')}
        />
        <MenuItem 
                label="News" 
                onClick={() => router.push('/News')}
        />
        <MenuItem 
                label="Forum" 
                onClick={() => router.push('/forum')}
        />
        <MenuItem 
                label="Shop" 
                onClick={() => router.push('/shop')}
        /> */}
    </nav>
   );
}
 
export default MenuList;   
     