import logo from "../assets/logo.png";
import google_play from "../assets/google_play.png";
import app_store from "../assets/app_store.png";

export default function Navbar() {
    const options = ["features", "pricing", "careers", "help"];

    return (
        <nav className="w-svw h-fit flex flex-row bg-transparent relative box-border lg:px-28 sm:px-10 px-5 py-6 z-50">
            {/* Left Section: Logo & Nav Links */}
            <div className="flex flex-row gap-8">
                <img
                    src={logo}
                    alt="Landify Logo"
                    className="h-8 w-32"
                />
                <span className="lg:flex hidden flex-row gap-2 my-auto capitalize">
                    {options.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item}`}
                            className="text-sm font-semibold px-2"
                        >
                            {item}
                        </a>
                    ))}
                </span>
            </div>

            {/* Right Section: App Buttons */}
            <div className="sm:flex flex-row-reverse lg:gap-8 gap-4 hidden ml-auto">
                <img
                    src={app_store}
                    alt="Download on the App Store"
                    className="h-10 object-contain"
                />
                <img
                    src={google_play}
                    alt="Get it on Google Play"
                    className="h-10 object-contain"
                />
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden block text-2xl text-[#111827] mx-3 sm:ml-3 ml-auto my-auto p-2">
                ☰
            </button>
        </nav>
    );
}
