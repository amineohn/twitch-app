import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Sun from "../components/icons/Sun";
import Moon from "../components/icons/Moon";
import useDarkMode from "../hooks/useDarkMode";
const Navigation = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="flex items-start justify-start pt-20 space-x-4 lg:space-x-20">
      <ul
        className="items-start ml-20 justify-start p-2.5 bg-indigo-400 hover:bg-indigo-500 transition duration-150 rounded-md text-gray-50 whitespace-nowrap"
        onClick={() => setTheme(colorTheme)}
      >
        <li>
          <Link to="/">{colorTheme === "light" ? <Moon /> : <Sun />}</Link>
        </li>
      </ul>
      <ul className="items-start justify-start p-2 pl-8 pr-8 transition duration-150 bg-purple-500 rounded-md pointer dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-600 text-gray-50 whitespace-nowrap">
        <Dropdown color="purple" />
      </ul>
    </nav>
  );
};
export default Navigation;
