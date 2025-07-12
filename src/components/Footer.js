import logo from "../assets/logo.png";
import google_play from "../assets/google_play.png";
import app_store from "../assets/app_store.png";

export default function Footer() {
    const navLinks = ["About", "Features", "Pricing", "News", "Help", "Contact"];

    return (
        <footer className="w-full bg-black text-white box-border flex sm:flex-row flex-col justify-between lg:px-28 sm:px-10 px-5 py-16">
            {/* Left Section: Logo & Links */}
            <div className="flex flex-col gap-6">
                <img
                    src={logo}
                    alt="Landify Logo"
                    className="h-8 w-32"
                />
                <span className="flex flex-row gap-6">
                    <p className="text-base">Download Now</p>
                    <p className="text-base">Licence</p>
                </span>
                <span className="flex flex-row flex-wrap gap-6">
                    {navLinks.map((item, index) => (
                        <p key={index} className="text-base">
                            {item}
                        </p>
                    ))}
                </span>
                <p className="text-[#D1D5DB] text-sm">
                    © 2021 Landify UI Kit. All rights reserved
                </p>
            </div>

            {/* Right Section: App Buttons */}
            <div className="w-fit flex flex-col sm:mt-0 mt-8 sm:gap-2 gap-4">
                <p className="text-lg text-[#D1D5DB] font-semibold">Get the App</p>
                <div className="flex sm:flex-col flex-col gap-4">
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
            </div>
        </footer>
    );
}
