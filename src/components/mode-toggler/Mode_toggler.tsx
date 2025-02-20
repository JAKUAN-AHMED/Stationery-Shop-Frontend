import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useTheme } from "../themProvider/theme-provider";
import clsx from "clsx";


const Mode_toggler = () => {
    const {theme, setTheme } = useTheme();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Button
              className={clsx(
                "font-orbitron text-[10px]",
                theme === "dark" ? "text-blue-600" : "text-black"
              )}
              variant={"destructive"}
            >
              Light
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Button
              className={clsx(
                "font-orbitron text-[10px]",
                theme === "dark" ? "text-blue-600" : "text-black"
              )}
              variant={"destructive"}
            >
              Dark
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default Mode_toggler;