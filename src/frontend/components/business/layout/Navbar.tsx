import { getSession } from "@auth0/nextjs-auth0";

import { Button } from "../../ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
const Navbar = async () => {
  const { user } = await getSession();
  console.log("user", user);
  return (
    <div className="flex justify-center">
      <div className="max-w-[1920px] w-full px-5 xl:px-[80px] 2xl:px-[122px] fixed">
        <nav className="mt-[53px] xl:mt-[73px] flex items-center justify-between overflow-hidden w-full right-0">
          <div className="flex-1"></div>
          <div className="flex gap-10 items-center">
            <Button variant={"outline"} className="text-white_secondary px-2">
              <Globe className="mr-2 h-5 w-5" /> En
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src={user.picture} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
