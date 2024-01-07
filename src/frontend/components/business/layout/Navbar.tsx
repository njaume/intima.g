import { Button } from "../../ui/button";
import { ChevronDown, Globe } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1920px] w-full px-5 xl:px-[80px] 2xl:px-[122px] fixed">
        <nav className="mt-[53px] xl:mt-[73px] flex items-center justify-between overflow-hidden w-full right-0">
          <div className="flex-1"></div>
          <Button variant={"outline"} className="text-white_secondary px-2">
            <Globe className="mr-2 h-5 w-5" /> En
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
