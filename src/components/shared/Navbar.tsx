import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import logo from "./../../assets/images/logo.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { DropdownMenu, DropdownMenuContent,  DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { BiLogOut } from "react-icons/bi";
import {MdOutlineSpaceDashboard } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import Mode_toggler from "../mode-toggler/Mode_toggler";

import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/verifyToken";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const token=useAppSelector(useCurrentToken);
  const cartData=useAppSelector(state=>state?.cart);

  const {data:myData}=useGetMeQuery(undefined);
  console.log(myData);
  const  initials:string=myData?.data?.name;
   
  let user:any;
  if(token){
    user=verifyToken(token);
  }
  console.log(user?.role);
  console.log(cartData,'cardData');
 const cartCount=cartData?.items.length;


  const dashboardLink=user?.role==="admin"? "/dashboard":user?.role==="user"?"/dashboard/profile":"/";

  

  const [position, setPosition] =useState("bottom");
  return (
    <nav className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white  font-orbitron border-2 border-radius-2xl  overflow-hidden shadow-lg z-10 w-full">
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-black  font-orbitron text-[8px] md:text:sm lg:text-xl font-bold ml-2">
            ETHEREAL
          </span>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center w-1/3">
          <Input
            type="text"
            placeholder="Search"
            className="w-full bg-white rounded-full pl-4 pr-10 border-none"
          />
          {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" /> */}
        </div>

        {/* Icons and Menu */}
        <div className="flex items-center md:space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          {user ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={'default'}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <User size={28} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-orbitron font-bold uppercase">
                            {initials}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 font-orbitron">
                  {/* <DropdownMenuLabel className="mt-2">Panel Position</DropdownMenuLabel> */}
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    
                    <DropdownMenuRadioItem value="bottom">
                      {/* dashboard */}

                      <Link to={dashboardLink}>
                        <Button variant={"outline"}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <MdOutlineSpaceDashboard className="text-blue-700" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="font-bold font-orbitron">
                                  Dashboard
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Button>
                      </Link>
                    </DropdownMenuRadioItem>

                    <DropdownMenuRadioItem value="right">
                      {/* log out */}
                      <Button variant={"outline"}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <BiLogOut className="text-blue-800" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-bold font-orbitron">Log Out</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Button>
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Link to="/register">
              <User size={24} />
            </Link>
          )}

          {/* Mobile Menu Button */}
          <Button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        <div>
          <Mode_toggler></Mode_toggler>
        </div>
      </div>

      {/* mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block py-2 px-4 text-[10px] hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/all-product"
            className="block py-2 px-4 text-[10px] hover:bg-gray-200"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-[10px] hover:bg-gray-200"
          >
            About
          </Link>
        </div>
      )}

      <div>
        <div className="bg-orange-200 hidden space-x-2 p-2 md:flex items-center justify-center text-black">
          <Button className="bg-blue-200">
            <Link to={"/"}>Home</Link>
          </Button>
          <Button className="bg-blue-200">
            <Link to={"/all-product"}>Products</Link>
          </Button>
          <Button className="bg-blue-200">
            <Link to={"/about"}>About</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
