import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
            <ThemeSwitch />
        </nav>
    )
}

export default NavBar;