import { Link } from "react-router-dom";
import Twitch from "../components/icons/Twitch";
import Sun from "../components/icons/Sun";
import Moon from "../components/icons/Moon";
import useDarkMode from "../hooks/useDarkMode";
const Navigation = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <nav className="flex items-start justify-start pt-20 space-x-20">
            <ul className="items-start ml-20 justify-start p-2.5 bg-indigo-400 hover:bg-indigo-500 transition duration-150 rounded-md text-gray-50 whitespace-nowrap" onClick={() => setTheme(colorTheme)}>
                <li>
                    <Link to="/">
                    {colorTheme === "light" ? (
                        <Moon />
                    ) : (
                        <Sun />
                    )}
                    </Link>
                </li>
            </ul>
            <ul className="items-start justify-start p-2 pl-8 pr-8 transition duration-150 bg-purple-400 rounded-md dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-500 text-gray-50 whitespace-nowrap">
                <li>
                    <a href="https://www.twitch.tv/shironamie" target="_blank" rel="noreferrer" className="font-mono text-xl pointer"><twitch className="inline-flex"><Twitch />&nbsp;Twitch</twitch></a>
                </li>
            </ul>
            <select className="items-start justify-start p-3 pl-8 transition duration-150 bg-blue-400 rounded-md appearance-none pr-8-s dark:bg-yellow-700 dark:hover:bg-yellow-600 hover:bg-blue-500 text-gray-50 whitespace-nowrap">
                <option href="https://www.twitch.tv/shironamie" target="_blank" rel="noreferrer" className="font-mono text-xl rounded-md pointer">
                    Shiromanie
                </option>
                <option href="https://www.twitch.tv/AlexayFTN" target="_blank" rel="noreferrer" className="font-mono text-xl rounded-md pointer">
                    AlexayFTN
                </option>
                <option href="https://www.twitch.tv/Anas" target="_blank" rel="noreferrer" className="font-mono text-xl rounded-md pointer">
                    Anas
                </option>
                <option href="https://www.twitch.tv/prince__off" target="_blank" rel="noreferrer" className="font-mono text-xl rounded-md pointer">
                    Prince
                </option>
            </select>
        </nav>
    )
}
export default Navigation;