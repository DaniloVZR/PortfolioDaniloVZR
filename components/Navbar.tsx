import { navItems } from "@/constants";
import { Button } from "./ui/MovingBorder";

const Navbar = () => {
  return (
    <div className="my-5 fixed top-2">
      <Button
        duration={4000}
        borderRadius="1rem"
      >
        <ul className="flex justify-center items-center w-full">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex-1 flex my-3 text-white hover:text-purple-500 transition-colors duration-300 px-10 border-r-2 last:border-none border-gray-300">
              <a href={item.link} className="font-medium text-base flex-1">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </Button>
    </div>
  );
};

export default Navbar;