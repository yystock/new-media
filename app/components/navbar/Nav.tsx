
import { SafeUser } from "@/app/types";
import UserMenu from "./UserMenu";
import Container from "../Container";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import MenuList from "./NavList";
import { ModeToggle } from "./ModeToggle";
import { MobileNav } from "./MobileNav";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Nav: React.FC<NavbarProps> = ({
    currentUser,
  }) => {

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-b-slate-200 dark:border-b-slate-700 dark:bg-slate-900 shadow-sm">
      <div
        className="
          py-4 
  
        "
      >
      <Container>
        
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <MobileNav/>
          <Logo/>
          <MenuList/>
          <ModeToggle/>
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>

  </header>
  );

}

export default Nav;



