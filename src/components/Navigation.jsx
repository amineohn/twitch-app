import { Link } from "react-router-dom";
import Twitch from "../components/icons/Twitch";
import Sun from "../components/icons/Sun";
import Moon from "../components/icons/Moon";
import useDarkMode from "../hooks/useDarkMode";
const Navigation = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <nav className="flex items-center justify-center pt-20 space-x-20">
            <ul className="items-center justify-center p-2.5 -ml-96 bg-indigo-400 hover:bg-indigo-500 transition duration-150 rounded-md text-gray-50 whitespace-nowrap" onClick={() => setTheme(colorTheme)}>
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
            <ul className="items-center justify-center p-2 pl-8 pr-8 transition duration-150 bg-purple-400 rounded-md dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-500 text-gray-50 whitespace-nowrap">
                <li>
                    <Link to="/" className="font-mono text-xl"><twitch className="inline-flex"><Twitch />&nbsp;Twitch</twitch></Link>
                </li>
            </ul>
            <ul className="items-center justify-center p-2 pl-8 pr-8"></ul>
            <ul className="items-center justify-center p-2 pl-8 pr-8"></ul>
            <ul className="items-center justify-center p-2 pl-8 pr-8"></ul>
        </nav>
    )
}
export default Navigation;